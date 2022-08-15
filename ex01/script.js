function consultarEndereco() {
  let cep = document.querySelector(".cep").value;

  if (cep.length !== 8) {
    alert("CEP Inválido!");
    return;
  }

  let url = `https://viacep.com.br/ws/${cep}/json/`;
  fetch(url).then(response => {
    response.json().then((data) => {
      let resultado = document.querySelector(".resultado").cloneNode(true);
      resultado.innerHTML = data.localidade;
      document.body.append(resultado);
    })
  });
}

let button = document.querySelector(".button").addEventListener("click", consultarEndereco);
