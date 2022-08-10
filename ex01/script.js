function consultarEndereco() {
  let cep = document.querySelector(".cep").value;
  let listaDeCidades = [];

  if (cep.length !== 8) {
    alert("CEP Inválido!");
    return;
  }

  let url = `https://viacep.com.br/ws/${cep}/json/`;
  fetch(url).then(response => {
    response.json().then((data) => {
      console.log(data);
      listaDeCidades.push(data);
      mostrarEndereco(listaDeCidades);
    })
  });
}


function mostrarEndereco(dados) {
  let resultado = document.querySelector(".resultado").innerHTML = `<p>${dados.localidade}</p>`
}

let button = document.querySelector(".button").addEventListener("click", consultarEndereco);