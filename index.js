const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Erstelle das Browser-Fenster.
  let win = new BrowserWindow({
    width: 600,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // lade die index.html der App.
  win.loadFile('index.html');

  // Öffne die DevTools.
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

// Beende die App, wenn alle Fenster geschlossen sind
app.on('window-all-closed', () => {
  // Auf macOS ist es üblich, die Anwendung und ihre Menüleiste
  // aktiv zu lassen, bis der Nutzer sie mit Cmd + Q explizit beendet
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // Auf macOS ist es üblich, ein neues Fenster der App zu erstellen,
  // wenn das Dock-Icon angeklickt wird und keine anderen Fenster offen sind.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
