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
let lastTarget;



function onClickDiv(e){   
   console.log(e.currentTarget.children[2]);

   if(lastTarget !== undefined && lastTarget!==e.currentTarget.children[2]){
    lastTarget.classList.toggle("info-active");        
   }
   e.currentTarget.children[2].classList.toggle("info-active");
   lastTarget = e.currentTarget.children[2];
  
    
}

async function basePokedex() {
    for (let i = 1; i < 10; i++) {
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
    //li.addEventListener("click", click);


    li.innerHTML = `
    <div class="data">
        <div>
            <img class="pokemon" src="${data.sprites.front_default}" alt="">
        </div>
        <div>
            <p>${data.name}</p>
        </div>
        <div class="info">
            <p>${data.id}</p>
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