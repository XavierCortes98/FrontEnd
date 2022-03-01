const searchForm = document.querySelector("#searchForm");
const textInput = document.querySelector("#textInput");
const searchButton = document.querySelector("#searchButton");

function addPokemons(res)
{
    
    const img = document.createElement('img');
    img.src = res.data.sprites.front_default;
    document.body.append(img);
}

searchForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    let pokemonName = textInput.value;
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);   
    addPokemons(res); 
});