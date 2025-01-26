import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { isDev } from "./util.js";
import { getPreloadPath } from "./pathResolver.js";
import { sendDataToFront } from "./prueba.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(), //Añadis preload como seguridad
    },
  });

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    //Aqui le decimos donde esta el html, con path evitamos errores por las rutas de los archivos en diferentes sistemas
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }

  // Llamamos funcion para enviar datos al front cada 3 seg
  sendDataToFront(mainWindow);

  // Manjemos peticion que llega del front
  ipcMain.handle("getStaticData", (_, datico: string) => {
    return `Peticion atendido me enviaste ${datico}`;
  });
});
