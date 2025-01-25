const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  suscribeStatistics: (callback: (statistics: any) => void) => {
    electron.ipcRenderer.on("testing", (_: any, data: any) => {
      callback(data);
    });
  },
  getStaticData: (datico: string) =>
    electron.ipcRenderer.invoke("getStaticData", datico),
});
