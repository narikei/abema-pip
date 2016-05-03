const electron = require('electron');
const app = electron.app;
const BrowserWindow = require('browser-window');
let mainWindow = null;

app.on('window-all-closed', function () {
  app.quit();
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    alwaysOnTop: true,
    webPreferences: {
      plugins: true,
    },
  });
  // mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.loadURL('https://abema.tv/');
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
