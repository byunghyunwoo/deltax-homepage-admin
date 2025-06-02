"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('myAPI', {
    send: (channel, data) => {
        const validChannels = ['toMain'];
        if (validChannels.includes(channel)) {
            electron_1.ipcRenderer.send(channel, data);
        }
    },
    receive: (channel, callback) => {
        const validChannels = ['fromMain'];
        if (validChannels.includes(channel)) {
            electron_1.ipcRenderer.on(channel, (_event, ...args) => {
                callback(...args);
            });
        }
    },
});
//# sourceMappingURL=preload.js.map