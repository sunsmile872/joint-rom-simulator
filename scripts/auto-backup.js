import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DEBOUNCE_MS = 5000; // Wait 5s of quiet after file change before committing
let debounceTimer = null;
let isPushing = false;
let queuedChanges = false;

const IGNORE_PATTERNS = [
  /^\.git/,
  /^node_modules/,
  /^\.DS_Store/,
  /\.log$/,
  /test_screenshot/,
];

function shouldIgnore(relativePath) {
  if (!relativePath) return true;
  return IGNORE_PATTERNS.some(regex => regex.test(relativePath));
}

export function runGitBackup(callback) {
  if (isPushing) {
    queuedChanges = true;
    return;
  }
  isPushing = true;
  queuedChanges = false;

  exec('git status --porcelain', { cwd: projectRoot }, (err, stdout) => {
    if (err) {
      console.error('[Auto-Backup] Error checking git status:', err.message);
      isPushing = false;
      if (callback) callback(err);
      return;
    }

    const changedFiles = stdout.trim();
    if (!changedFiles) {
      isPushing = false;
      if (callback) callback(null, false);
      return;
    }

    const fileCount = changedFiles.split('\n').length;
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' });
    const commitMsg = `auto-backup: ${timestamp} (${fileCount} files updated)`;

    console.log(`\n📦 [Auto-Backup] Detected ${fileCount} changed file(s). Creating commit...`);

    exec(`git add -A && git commit -m "${commitMsg}" && git push origin main`, { cwd: projectRoot }, (pushErr, pushOut, pushStderr) => {
      isPushing = false;
      if (pushErr) {
        console.error('[Auto-Backup] Push failed:', pushStderr || pushErr.message);
        if (callback) callback(pushErr);
      } else {
        console.log(`✅ [Auto-Backup] Successfully backed up to GitHub at ${timestamp}!`);
        if (callback) callback(null, true);
      }

      if (queuedChanges) {
        queuedChanges = false;
        setTimeout(() => runGitBackup(), 2000);
      }
    });
  });
}

export function startAutoBackupWatcher() {
  console.log(`👀 [Auto-Backup Watcher] Active in: ${projectRoot}`);
  console.log(`   (Changes will auto-commit & push to GitHub with a 5s debounce)`);

  fs.watch(projectRoot, { recursive: true }, (eventType, filename) => {
    if (!filename || shouldIgnore(filename)) return;

    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      runGitBackup();
    }, DEBOUNCE_MS);
  });
}

// If executed directly from CLI: node scripts/auto-backup.js
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  startAutoBackupWatcher();
}
