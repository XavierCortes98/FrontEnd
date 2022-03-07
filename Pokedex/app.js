const searchForm = document.querySelector("#searchForm");
const textInput = document.querySelector("#textInput");
const searchButton = document.querySelector("#searchButton");

const list = document.querySelector("#list");

function Pokemon(number, name) {
    this.number = number;
    this.name = name;
    // this.type = type;
    // this.imgs = imgs;
}

let pokemons = [];
let lastTarget;



function onClickDiv(e) {
    console.log(e.currentTarget.children[2]);

    if (lastTarget !== undefined && lastTarget !== e.currentTarget.children[2]) {
        if (lastTarget.classList.contains("info-active")) {
            lastTarget.classList.toggle("info-active");
        }
    }
    e.currentTarget.children[2].classList.toggle("info-active");
    lastTarget = e.currentTarget.children[2];
}

async function basePokedex() {
    for (let i = 1; i < 151; i++) {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        addPokemons(res.data);
    }
    var classname = document.getElementsByClassName("data")

    for (let index = 0; index < classname.length; index++) {
        classname[index].addEventListener('click', onClickDiv)
    }
}

function click(e) {
    console.log(e.target);
    // e.target.children[2].style.maxHeight = e.target.children[2].scrollHeight + 'px';

}

function addPokemons(data) {
    const li = document.createElement('li');
    
    li.innerHTML = `
    <div>
        <p>${data.id} ${data.name}</p>
    </div>`

    let pkmn = new Pokemon(data.name, data.id)
    pokemons.push(pkmn);

    list.children[0].appendChild(li);
}

// searchForm.addEventListener("submit", async function (e) {
//     e.preventDefault();
//     let pokemonName = textInput.value;
//     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);   
//     addPokemons(res); 
// });

basePokedex();