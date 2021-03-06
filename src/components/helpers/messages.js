export const errorMsg = (msg, err) => {
  console.log(err)
  return `
    <div class="Message-error">
      <p>Error: <b>${msg}</b> <i class="fa fa-frown-o"></i></p>
    </div>
  `
}

export const successMsg = (msg) => (
  `
    <div class="Message-success">
      <p>Exito: <b>${msg}</b> <i class="fa fa-smile-o"></i></p>
    </div>
  `
)
