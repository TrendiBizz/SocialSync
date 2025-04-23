const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  console.log("Creating window...");
  
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Check if the out directory exists and log what's in it
  const outDir = path.join(__dirname, 'out');
  console.log("Out directory path:", outDir);
  
  if (fs.existsSync(outDir)) {
    console.log("Out directory exists");
    const files = fs.readdirSync(outDir);
    console.log("Files in out directory:", files);
    
    // Check if index.html exists
    const indexPath = path.join(outDir, 'index.html');
    if (fs.existsSync(indexPath)) {
      console.log("Loading index.html from:", indexPath);
      win.loadFile(indexPath);
    } else {
      console.error("index.html not found in out directory");
      
      // Try to find any HTML file
      const htmlFiles = files.filter(file => file.endsWith('.html'));
      if (htmlFiles.length > 0) {
        const firstHtmlFile = path.join(outDir, htmlFiles[0]);
        console.log("Trying to load alternative HTML file:", firstHtmlFile);
        win.loadFile(firstHtmlFile);
      } else {
        console.error("No HTML files found in out directory");
        win.loadFile(path.join(outDir, 'index.html')); // Try anyway
      }
    }
  } else {
    console.error("Out directory does not exist");
    win.loadFile(path.join(__dirname, 'out', 'index.html')); // Try anyway
  }

  // Open dev tools to see any errors
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  console.log("Electron app is ready");
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});