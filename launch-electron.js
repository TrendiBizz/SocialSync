const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Use the exact path we found
const electronPath = path.join(process.cwd(), 'node_modules', '.bin', 'electron.cmd');
// Specify the electron.js file
const mainFile = path.join(process.cwd(), 'electron.js');

console.log(`Attempting to launch Electron from: ${electronPath}`);
console.log(`File exists: ${fs.existsSync(electronPath)}`);
console.log(`Main file exists: ${fs.existsSync(mainFile)}`);

try {
  // Use the full path to launch Electron with your electron.js file
  console.log("Running Electron...");
  execSync(`"${electronPath}" "${mainFile}"`, { 
    stdio: 'inherit',
    windowsHide: false // Make sure the process is not hidden
  });
} catch (error) {
  console.error("Error launching Electron:", error);
}