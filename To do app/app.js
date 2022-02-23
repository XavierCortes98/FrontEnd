const todoList = document.querySelector("#todo-list");
const doingList = document.querySelector("#doing-list");
const doneList = document.querySelector("#done-list");

const form = document.querySelector("#form-new-item");
const item = document.querySelector("#item-name");

let dragItem;


addEventListener("dragstart", function(e){
    console.table(`test: ${e.target}`)   
    if(e.target.tagName === 'LI')
    {
        dragItem = e.target;
    }    
})

addEventListener("dragover", function (e) {
    e.preventDefault();
    console.log("dragover")
})

addEventListener("drop", function (e) {
    console.log(e.target.classList, "drop")
    for(let i = 1; i<4; i++)
    {
        if(e.target.classList.contains(`col-${i}`))        
        {            
            console.log("COLUMNAAAAAAA")
            e.target.children[1].appendChild(dragItem);
           
        }
    }
    
    
})

form.addEventListener("submit", function (e) {
    e.preventDefault();    
    const itemName = item.value
    console.log(itemName.value);
    if(item.value)
    {
        const newLI = document.createElement("LI");
        newLI.innerText = itemName;
        newLI.draggable = true;
        todoList.appendChild(newLI);
        item.value = "";
    }
    
})
