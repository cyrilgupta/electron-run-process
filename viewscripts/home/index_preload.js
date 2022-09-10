const { contextBridge, ipcMain, ipcRenderer } = require('electron')

let indexBridge = {
    openCoderJeet: async () => {
        await ipcRenderer.invoke("openCoderJeet");
    },
    loadExplorer: async () => {
        await ipcRenderer.invoke("loadExplorer");
    },
}

contextBridge.exposeInMainWorld("indexBridge", indexBridge);
