const downButton = document.querySelector("#downButton");
const list = document.querySelector("#list");
const left = document.querySelector("#left");

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

function scroll(e) {

    list.scroll({
        top: list.scrollTop + 10,
        left: 0,
        behavior: 'smooth'
    });


}

downButton.addEventListener("click", scroll);
downButton.addEventListener("mousedown", scroll);

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

function addPokemons(data) {
    const div = document.createElement('div');    
    div.addEventListener("click", (e) => {        

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
    })
    div.innerHTML = `
    <div class="info">     
        <img src="${data.sprites.front_default}" alt="">    
         <p> ${padNumber(data.id)} ${data.name}</p>
    </div>`
    let pkmn = new Pokemon(data.id, data.name, data.sprites)
    pokemons.push(pkmn);
    
    list.children[1].appendChild(div);

    //console.log(pokemons[0].imgs.front_default)

    // left.innerHTML = `
    // <div>  
    //     <h2>${pokemons[0].name}</h2>   
    //     <img src="${pokemons[0].imgs.front_default}" alt="">             
    // </div>`

}

basePokedex();