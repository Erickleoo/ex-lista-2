function consultarEndereco() {
  let rua = document.querySelector(".rua").value;
  let uf = document.querySelector(".uf").value;
  let localidade = document.querySelector(".localidade").value;
  let ceps = document.querySelector(".ceps")

  let url = `https://viacep.com.br/ws/${uf}/${localidade}/${rua}/json/`;

  fetch(url).then(response => {
    response.json().then((data) => {
      console.log(data);
      return data.map((data) => {
        let li = document.createElement("li");
        li.innerHTML = `${data.cep}`;
        ceps.appendChild(li)
      })
    })
  });
}


let button = document.querySelector(".button").addEventListener("click", consultarEndereco);