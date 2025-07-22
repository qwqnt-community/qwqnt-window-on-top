import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('QwQNTWOT', {
  toggleWindowOnTop: (): Promise<boolean> => ipcRenderer.invoke('QwQNTWOT.toggleWindowOnTop'),
});