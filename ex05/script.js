let pokemonInput = document.querySelector(".pokemon-input");
let pokemonButton = document.querySelector(".pokemon-button");
let pokemonName = document.querySelector(".pokemon-name");
let pokemonIMG = document.querySelector(".pokemon-img");
let pokemonID = document.querySelector(".pokemon-id");
let pokemonType = document.querySelector(".pokemon-type");
let pokemonSkills = document.querySelector(".pokemon-skills");
let pokemonWeight = document.querySelector(".pokemon-weight");
let pokemonHeight = document.querySelector(".pokemon-height");
let pokemonType1 = document.querySelector(".pokemon-type-1");
let pokemonType2 = document.querySelector(".pokemon-type-2");


const fetchPokemon = (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      let id = ('00' + data.id).slice(-3);
      pokemonName.innerHTML = `Name: ${capitalizeFirstLetter(data.name)}`;
      pokemonIMG.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
      pokemonID.innerHTML = `Nº ${data.id}`;
      pokemonType.innerHTML = `Type: ${data.types.map((type) => capitalizeFirstLetter(type.type.name)).join(', ')}`;
      pokemonSkills.innerHTML = `Skills: ${data.abilities.map((ability) => capitalizeFirstLetter(ability.ability.name)).join(', ')}`;
      pokemonWeight.innerHTML = `Weight: ${data.weight / 10}kg`;
      pokemonHeight.innerHTML = `Height: ${Math.round(data.height * 10) / 100}m`
      pokemonInput.value = "";
    })
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}



pokemonInput.addEventListener("keydown", (event) => event.key === "Enter" && pokemonButton.click());
pokemonButton.addEventListener("click", () => fetchPokemon(pokemonInput.value));



