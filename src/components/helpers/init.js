import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBfnecgqtRaPfZGI3hCGIrVj-pNsJybFv8",
  authDomain: "pwa-edgram-7e719.firebaseapp.com",
  databaseURL: "https://pwa-edgram-7e719.firebaseio.com",
  projectId: "pwa-edgram-7e719",
  storageBucket: "pwa-edgram-7e719.appspot.com",
  messagingSenderId: "56982010920"
},
  d = document,
  w = window,
  c = console.log,
  n = navigator

export const init = () => firebase.initializeApp(config)

export const pwa = () => {
  // Registro de SW
  if ('serviceWorker' in navigator) {
    w.addEventListener('load', () => {
      n.serviceWorker.register('./sw.js')
        .then(registration => {
          c(registration)
          c(
            'Service Worker registrado con éxito',
            registration.scope
          )
        })
        .catch(err => c(`Registro de Service Worker fallido`, err))
    })
  }

  // Activar Notificaciones
  if (window.Notification && Notification.permission !== 'denied') {
    Notification.requestPermission(status => {
      c(status)
      let n = new Notification('Título', {
        body: 'Soy una notificación :)',
        icon: './icon_192x192.png'
      })
    })
  }

  // Activar Sincronización de Fondo
  if ('serviceWorker' in n && 'SyncManager' in w) {
    function registerBGSync() {
      n.serviceWorker.ready
        .then(registration => {
          return registration.sync.register('github')
            .then(() => c('Sincronización de Fondo Registrada'))
            .catch(() => c('Fallo la Sincronización de Fondo', err))
        })
    }

    registerBGSync()
  }
}

export const isOnline = () => {
  const header = d.querySelector('.Header'),
    footer = d.querySelector('.Footer'),
    metaTagTheme = d.querySelector('meta[name=theme-color]')

  function networkStatus(e) {
    c(e, e.type)

    if (n.onLine) {
      metaTagTheme.setAttribute('content', '#F7DF1E')
      header.classList.remove('u-offline')
      footer.classList.remove('u-offline')
      // alert('Conexión Recuperada :)')
    } else {
      metaTagTheme.setAttribute('content', '#666')
      header.classList.add('u-offline')
      footer.classList.add('u-offline')
      // alert('Conexión Perdida')
    }
  }

  d.addEventListener('DOMContentLoaded', e => {
    if (!n.onLine) {
      networkStatus(this)
    }
    w.addEventListener('online', networkStatus)
    w.addEventListener('offline', networkStatus)
  })
}
