import firebase from 'firebase'
import {progressBar, progressStatus, showProgress} from './upload_progress'
import {errorMsg, successMsg} from './helpers/messages'
const uploader = () => {
  const d = document,
    c = console.log

  const uploaderScripts = setInterval(() => {
    if (d.readyState === 'complete') {
      clearInterval(uploaderScripts)

      const storageRef = firebase.storage().ref().child('photos'),
        dbRef = firebase.database().ref().child('photos'),
        user = firebase.auth().currentUser,
        uploader = d.getElementById('uploader'),
        form = d.getElementById('upload'),
        output = d.querySelector('.Uploader').querySelector('.Progress-output')

      uploader.addEventListener('change', e => {
        output.innerHTML = ''
        Array.from(e.target.files).forEach(file => {
          if (file.type.match('image.*')) {
            let uploadTask = storageRef.child(file.name).put(file)

            uploadTask.on('state_changed', data => {
              showProgress()
              progressStatus(data)
            }, err => {
              c(err, err.code, err.message)
              output.innerHTML = errorMsg(`${err.message}`, err)
            })

            output.innerHTML = successMsg('Tu archivo se ha subido')
          } else {
            output.innerHTML = errorMsg('Tu archivo debe ser una imagen', null)
          }
        })

        form.reset()
      })
    }
  }, 100)
  return `
    <article class="Uploader Content-section u-show">
      <h2 class="u-title">Sube tus Fotos</h2>
      <form name="upload" id="upload">
        <input type="file" id="uploader" multiple/>
        <label for="uploader">
          <i class="fa fa-cloud-upload" title" title="Subir Foto(s)"></i>
        </label>
      </form>

      ${progressBar()}
    </article>
  `
}


export default uploader
