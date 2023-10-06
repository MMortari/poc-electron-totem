const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // fullscreen: true,
  });

  // win.loadURL("https://totem.parcelamostudo.com.br");

  win.loadFile("../public/index.html");

  // win.on("leave-full-screen", () => {
  //   win.setFullScreen(true);
  // });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("quit", () => {
  console.log("quit");
});

app.on("window-all-closed", () => {
  createWindow();
});
