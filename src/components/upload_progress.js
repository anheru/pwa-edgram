export const progressBar = () => (`
  <div class="Progress  u-hide">
    <progress value="0" max="100" class="Progress-bar"></progress>
    <span class="Progress-advance"></span>
  </div>
  <div class="Progress-output"></div>
`)

export const progressStatus = (data) => {
  const d = document,
    c = console.log,
    progress = d.querySelectorAll('.Progress'),
    progressBar = d.querySelectorAll('.Progress-bar'),
    progressAdvance = d.querySelectorAll('.Progress-advance'),
    progressOutPut = d.querySelectorAll('.Progress-output')

  progress.forEach(progress => {
    let advance = Math.floor((data.bytesTransferred / data.totalBytes) * 100)
    progress.querySelector('.Progress-bar').value = advance
    progress.querySelector('.Progress-advance').innerHTML = `${advance}%`
  })
}

export const showProgress = () => document.querySelectorAll('.Progress').forEach(bar => bar.classList.remove('u-hide'))
