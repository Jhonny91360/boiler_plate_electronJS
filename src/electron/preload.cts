const electron = require("electron");

// Preload hace de puente entre electron y react ( front y back )
electron.contextBridge.exposeInMainWorld("electron", {
  // Medoto para enviar datos
  suscribeStatistics: (callback: (statistics: any) => void) => {
    electron.ipcRenderer.on("testing", (_: any, data: any) => {
      callback(data);
    });
  },
  // Metodo para recibir peticiones
  getStaticData: (datico: string) =>
    electron.ipcRenderer.invoke("getStaticData", datico),
});
