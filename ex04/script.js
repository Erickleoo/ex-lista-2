const pokedex = document.querySelector('.pokedex');

const fetchPokemon = () => {
  const promises = [];
  for (let i = 4; i <= 6; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
      name: result.name,
      type: result.types.map((type) => capitalizeFirstLetter(type.type.name)).join(', '),
      id: result.id,
      weight: Math.round(result.weight * 100) / 1000,
      height: Math.round(result.height * 100) / 1000
    }));
    displayPokemon(pokemon);
  });
};

const displayPokemon = (pokemon) => {
  console.log(pokemon);
  const pokemonHTMLString = pokemon
    .map(
      (pokeman) => `
        <li class="card">
        <h2 class="card-title">${pokeman.name} <span class="number">#${pokeman.id}</span></h2>
        <hr>
        <img class="card-image" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${pokeman.id}.png"/>
        <div class="card-text"> 
          <p class="card-subtitle"><b>${pokeman.weight} kg</b>Peso </p>
          <p class="card-subtitle"><b>${pokeman.height} m</b>Altura</p>
        </div>    
          <p class="card-subtitle"><b>${pokeman.type}</b>Tipo</p>
          <img class="card-image-footer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"/>
        </li>
    `
    )
    .join('');
  pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}