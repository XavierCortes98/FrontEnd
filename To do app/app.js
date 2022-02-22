const todo = document.querySelector("#todo");
const doing = document.querySelector("#doing");
const doit = document.querySelector("#doit");

const form = document.querySelector("#form-new-item");
const item = document.querySelector("#item-name");

let elements = document.querySelectorAll("#list-item");

let dragItem;

todo.addEventListener("click", function(e){    
    if (e.target.tagName === 'LI') {
        const i = e.target;
        //doing.appendChild(i);
        console.log(`test: ${e.target}`)
    }
})

todo.addEventListener("dragstart", function (e) {
    console.table(`test: ${e.target}`)
    if (e.target.tagName === 'LI') {
        console.log(e.target.value);
    }
    dragItem = e.target;
})



doing.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        const i = e.target;
        doit.appendChild(i);
    }
})

doing.addEventListener("dragenter", function (e) {
    console.log("asd")
})

doing.addEventListener("dragover", function (e) {
    e.preventDefault();
    console.log("dragover")
})

doing.addEventListener("drop", function (e) {
    console.log(e,"drop")
    doing.appendChild(dragItem);
})

doit.addEventListener("click", function (e) {
    
    if(e.target.tagName === 'LI' && e.target.classList.contains("checked"))
    {
        doit.removeChild(e.target);
    }
    else if (e.target.tagName === 'LI') {
        const i = e.target;
        i.classList.toggle('checked');
    }
})

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const itemName = item.value
    console.log(itemName.value);
    const newLI = document.createElement("LI");
    newLI.innerText = itemName;

    todo.appendChild(newLI);
    item.value = "";
})
