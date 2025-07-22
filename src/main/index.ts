import { ipcMain, BrowserWindow } from 'electron';

ipcMain.handle('QwQNTWOT.toggleWindowOnTop', (event) => {
  const window = BrowserWindow.fromWebContents(event.sender);

  window?.setAlwaysOnTop(!window?.isAlwaysOnTop());

  return window?.isAlwaysOnTop();
});