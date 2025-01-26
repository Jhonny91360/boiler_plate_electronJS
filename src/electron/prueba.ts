import { BrowserWindow } from "electron";

export function sendDataToFront(mainWindow: BrowserWindow) {
  // cada 3 seg enviaremos un dato al front
  const data = {
    title: "hola",
  };
  setInterval(() => {
    console.log("enviando...", data);
    mainWindow.webContents.send("testing", data);
  }, 3000);
}
