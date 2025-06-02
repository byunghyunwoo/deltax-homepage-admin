import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

// 허용 가능한 채널 이름 정의
type ChannelsToMain = 'toMain';
type ChannelsFromMain = 'fromMain';

// 데이터 타입 (필요 시 구체화)
type ToMainPayload = unknown;
type FromMainPayload = unknown[];

declare global {
  interface Window {
    myAPI: {
      send: (channel: ChannelsToMain, data: ToMainPayload) => void;
      receive: (
        channel: ChannelsFromMain,
        callback: (...args: FromMainPayload) => void,
      ) => void;
    };
  }
}

contextBridge.exposeInMainWorld('myAPI', {
  send: (channel: ChannelsToMain, data: ToMainPayload) => {
    const validChannels: ChannelsToMain[] = ['toMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (
    channel: ChannelsFromMain,
    callback: (...args: FromMainPayload) => void,
  ) => {
    const validChannels: ChannelsFromMain[] = ['fromMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(
        channel,
        (_event: IpcRendererEvent, ...args: FromMainPayload) => {
          callback(...args);
        },
      );
    }
  },
});
