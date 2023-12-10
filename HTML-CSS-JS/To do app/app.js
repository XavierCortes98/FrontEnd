const todoList = document.querySelector("#todo");

const form = document.querySelector("#form-new-item");
const item = document.querySelector("#item-name");


let colorsPickers = document.querySelectorAll(".colorPicker");

let dragItem;

function addListener(event) {
    console.log(event.target.parentElement, "change");
    event.target.parentElement.style.backgroundColor = this.value;
}

colorsPickers.forEach(colorPicker => {
    colorPicker.addEventListener('input', addListener);
});



addEventListener("dragstart", function (e) {
    console.table(`test: ${e.target}`)
    if (e.target.tagName === 'LI') {
        dragItem = e.target;
        console.log(e.pageX);
    }
})

addEventListener("dragover", function (e) {
    e.preventDefault();
})

addEventListener("drop", function (e) {
    console.log(e.target.classList, "drop")
    for (let i = 1; i < 4; i++) {
        if (e.target.classList.contains(`col-${i}`)) {
            e.target.children[1].appendChild(dragItem);
        }
    }
})

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const itemName = item.value
    console.log(itemName.value);
    if (item.value) {
        const newLI = document.createElement("LI");
        const newColor = document.createElement("input");
        newColor.addEventListener("input", addListener);
        newColor.setAttribute("type", "color");
        newColor.classList.add("colorPicker");

        newLI.innerText = itemName;
        newLI.draggable = true;
        newLI.appendChild(newColor)
        todoList.children[1].appendChild(newLI);
        item.value = "";
    }

})
