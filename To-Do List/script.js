const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//Get refernces of Html elements
const add = document.getElementById("btn")
const remove = document.querySelector("i")
//Eventlistner when add is clicked
add.addEventListener("click",addTodo)
//Funtion to add task
function addTodo(){
    if(inputBox.value == ""){
        alert("Enter a task")
    }
    else{
    const listItem = document.createElement("li");
    const todoItem = `${inputBox.value} <i class="fa-solid fa-trash" onclick="removeTodo(this)"></i>`;
    listContainer.appendChild(listItem);
    listItem.innerHTML=todoItem;
    //Eventlistener for click on trash
    const trashIcon = listItem.querySelector('i');
            trashIcon.addEventListener('click', function () {
                //calling removeTodo with list item as arguement
                removeTodo(listItem);
            });


    inputBox.value=""
   
    }
}
function removeTodo(item) {
    item.remove();
}

 

