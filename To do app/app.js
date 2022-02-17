const todo = document.querySelector("#todo");
const doing = document.querySelector("#doing");
const doit = document.querySelector("#doit");

const form = document.querySelector("#form-new-item");
const item = document.querySelector("#item-name");

let elements = document.querySelectorAll("#list-item");

todo.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        const i = e.target;
        doing.appendChild(i);
    }
})

doing.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        const i = e.target;
        doit.appendChild(i);
    }
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
