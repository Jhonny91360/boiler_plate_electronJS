import path from "path";
import { app } from "electron";
import { isDev } from "./util.js";

// Funcion para obtener la ruta de la carpeta preload en base a la ubicacion del proyecto
export function getPreloadPath() {
  return path.join(
    app.getAppPath(),
    isDev() ? "." : "..",
    "/dist-electron/preload.cjs"
  );
}
