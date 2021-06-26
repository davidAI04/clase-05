const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  }, 3000);
})

const mensaje = (data) => {console.log(data)}

function main (callback) {
  if (typeof callback === 'function') {
    miPromesa
      .then((resp) => {
        callback('Ejecutado dentro del then')
      })
      .catch((err) => {
      callback('hubo un error')
      })
    callback('fuera del callback 1')
    callback('fuera del callback 2')
  } else {
    console.log('necesitamos una funcion')
  }
}

//main(mensaje);

//FETCH


/*function getUsuariosGit(id) {
  let urlId = "https://api.giub.com/users/" + id;
  fetch(urlId)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log('hubo un error');
    })
}*/

///getUsuariosGit ('xHaches')


//ASYNC - AWAIT 


async function getUsuariosGit(id) {
  let urlId = "https://api.github.com/users/" + id;
  const response = await fetch(urlId);
  const data = await response.json();
  return data;
}

async function getGit(id) {
  const resultado = await getUsuariosGit(id)
  console.log(resultado)
}

getGit('AlanAcuna')
