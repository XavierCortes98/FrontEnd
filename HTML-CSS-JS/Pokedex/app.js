const downButton = document.querySelector("#downButton");
const list = document.querySelector("#list");
const left = document.querySelector("#left");
const displayPkmn = document.querySelector(".displayPkmn");
const imgPkmn = document.querySelector(".imgPkmn");

function Pokemon(number, name, imgs) {
    this.number = number;
    this.name = name;
    // this.type = type;
    this.imgs = imgs;
}

function padNumber(num) {
    num = ('00' + num).slice(-3)
    return num
}

let pokemons = [];
let lastTarget;

function getChildElementIndex(node) {
    return Array.prototype.indexOf.call(node.parentNode.children, node);
  }

function changeInfo(e){
    console.log( getChildElementIndex(e));
    imgPkmn.children[0].src = pokemons[getChildElementIndex(e)].imgs.front_default;
    displayPkmn.children[0].innerText = pokemons[getChildElementIndex(e)].name;

}

async function basePokedex() {
    for (let i = 1; i < 151; i++) {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        
        if (i === 1) {
            displayPkmn.children[0].innerText = res.data.name;
            imgPkmn.children[0].src = res.data.sprites.front_default;
            
        }
        addPokemons(res.data);
    }    
}

function addPokemons(data) {
    const div = document.createElement('div');    
    div.addEventListener("click", divEventListener);
    div.innerHTML = `
    <div class="info">     
        <img src="${data.sprites.front_default}" alt="">    
         <p> ${padNumber(data.id)} ${data.name}</p>
    </div>`
    let pkmn = new Pokemon(data.id, data.name, data.sprites)
    pokemons.push(pkmn);
    
    list.children[1].appendChild(div);
}
function divEventListener(e)
{
    if (lastTarget === undefined) {
        e.currentTarget.children[0].classList.add("border");
        console.log(e.currentTarget.children[0]);
        lastTarget = e.currentTarget
    }
    else if (lastTarget) {
        lastTarget.children[0].classList.remove("border");
        e.currentTarget.children[0].classList.add("border");
        lastTarget = e.currentTarget

    }
    changeInfo(e.currentTarget);
}
basePokedex();