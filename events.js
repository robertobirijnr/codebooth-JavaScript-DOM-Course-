// var btn = document.querySelector("button")
// btn.addEventListener('click',btnClick)
// btn.addEventListener('dblclick',btnClick)
// btn.addEventListener('mousedown',btnClick)
// btn.addEventListener('mouseup',btnClick)

// function btnClick(e){
//     // console.log("you clicked me ")
//     // console.log(e.clientX)
//     // console.log(e.clientY)
//     console.log(e.shiftKey)
// }


var form = document.querySelector("#form")
var itemList = document.querySelector("#items")
// console.log(form)

form.addEventListener('submit', btnClick)

function btnClick(e) {
    e.preventDefault()
    // console.log(document.querySelector("#userInput").value)
    var userInput = document.querySelector("#userInput").value

    // create new list 
    var li = document.createElement('li')
    li.className = "list-group-item"

    // add  textnode with input vlaue
    li.appendChild(document.createTextNode(userInput))

    // Create a new button
    var deleteBtn = document.createElement("button")

    // Give your button bootstrap class
    deleteBtn.className ="btn btn-danger btn-sm float-right delete"

    deleteBtn.appendChild(document.createTextNode("X"))

    li.appendChild(deleteBtn)




    // 
    itemList.appendChild(li)

    


}


