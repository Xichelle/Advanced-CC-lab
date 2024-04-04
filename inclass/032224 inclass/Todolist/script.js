
let btn = document.getElementById("submit")

btn.addEventListener("click", () => {
    // get input from form
    let todo = document.getElementById("form");
    console.log(todo.elements[0].value);
    
    // create new list item 
    let newItem = document.createElement("li");
    //set its value to the input
    newItem.innerHTML = todo.elements[0].value; 
    // console.log(newItem);
    
    // find the list in the DOM
    let list = document.getElementById("list");
    // add the new list item to the list
    list.appendChild(newItem);
    console.log(list);
    
    //reset box
    todo.elements[0].value ="";
})