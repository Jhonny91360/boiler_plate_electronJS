import { BrowserWindow } from "electron";

export function sendDataToFront(mainWindow: BrowserWindow) {
  // cada 3 seg enviaremos un dato
  const data = {
    title: "hola",
  };
  setInterval(() => {
    console.log("enviando...");
    mainWindow.webContents.send("testing", data);
  }, 3000);
}
