// import { app, BrowserWindow } from 'electron'
// import path from 'path'
const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  // ipcMain.handle('ping', () => 'pong')

  win.loadURL('http://127.0.0.1:5173/');
}

app.whenReady().then(() => {
  createWindow()
})