//Usamos https://api.chucknorris.io/
//Con el Endpoint https://api.chucknorris.io/jokes/random  hacemos la consulta desde un metodo de nuestra clase

//Debemos tambien utilizar una función normal que recibirá como parametro una instacia de nuestra clase chuck norris service, en esta funcion haremos la logica para rederizar nuestro chuck norris en el DOM

//y tenemos que lograra que nos quede como la imágen de la captura.
//En éste caso vamos a hacer el ejercicio utilizando promesas.

//Utilizamos manejo de DOM para mostrar los datos obtenidos, ayudita abajo!


let textChuck = document.getElementById('textChuck')

class ChuckNorrisService {
  constructor(url) {
    this.url = url;
   }
  
  getChuckNorris() {
    return fetch (this.url)
  }
}

function renderData(chuckNorrisObject) {
  chuckNorrisObject.getChuckNorris()
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      let legend = document.createElement('h2');
      legend.textContent = `${data.value}`;

      let createChuck = document.createElement('img');
      createChuck.setAttribute('src', data.icon_url);
      createChuck.style.width = '200px';

      textChuck.appendChild(legend)
      textChuck.appendChild (createChuck)
    })
    .catch((err) => {
      console.log(err);
  })
}

const newChuckNorris = new ChuckNorrisService('https://api.chucknorris.io/jokes/random')

renderData(newChuckNorris);


