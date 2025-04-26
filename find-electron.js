const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// First, check where npm installs packages
console.log("Checking npm configuration...");
const npmPrefix = execSync('npm config get prefix').toString().trim();
console.log("NPM prefix:", npmPrefix);

// Check various possible locations for electron
const possibleLocations = [
  path.join(process.cwd(), 'node_modules', '.bin', 'electron.cmd'),
  path.join(process.cwd(), 'node_modules', '.bin', 'electron'),
  path.join(npmPrefix, 'node_modules', '.bin', 'electron.cmd'),
  path.join(npmPrefix, 'node_modules', '.bin', 'electron'),
  path.join(npmPrefix, '.bin', 'electron.cmd'),
  path.join(npmPrefix, '.bin', 'electron')
];

console.log("Searching for Electron in these locations:");
possibleLocations.forEach((location, index) => {
  console.log(`${index + 1}. ${location} - Exists: ${fs.existsSync(location)}`);
});

// Try to find electron via npm
try {
  console.log("\nTrying to locate Electron via npm...");
  const electronPath = execSync('npm bin').toString().trim() + '\\electron.cmd';
  console.log(`Electron path via npm bin: ${electronPath} - Exists: ${fs.existsSync(electronPath)}`);
  
  if (fs.existsSync(electronPath)) {
    console.log("Found Electron! You should update your package.json to use this path directly.");
  }
} catch (error) {
  console.log("Error finding npm bin path:", error.message);
}