const searchForm = document.querySelector("#searchForm");
const textInput = document.querySelector("#textInput");
const searchButton = document.querySelector("#searchButton");

const list = document.querySelector("#list");

function Pokemon(number) {
    this.number = number;
    // this.name = name;
    // this.type = type;
    // this.imgs = imgs;
}

let pokemons = [];

async function basePokedex() {
    for (let i = 1; i < 10; i++) {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        addPokemons(res.data);
    }

}

function click(e)
{
    console.log(e.target);
    // e.target.children[2].style.maxHeight = e.target.children[2].scrollHeight + 'px';
    
}

function addPokemons(data) {
    const li = document.createElement('li');
    li.addEventListener("click", click);


    li.innerHTML = `
    <div>
        <div>
            <img class="pokemon" src="${data.sprites.front_default}" alt="">
        </div>
        <div>
            <p>${data.name}</p>
        </div>
        <div>
            <p class="data">${data.id}</p>
        </div>  
    </div>`;  
   
    let pkmn = new Pokemon(data.name)
    pokemons.push(pkmn);

    list.appendChild(li);
}

// searchForm.addEventListener("submit", async function (e) {
//     e.preventDefault();
//     let pokemonName = textInput.value;
//     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);   
//     addPokemons(res); 
// });

basePokedex();