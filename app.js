// console.dir(document)
// console.log(document.URL)
console.log(document.title)
document.title = "code with CodeBooth"
// console.log(document.head)
// console.log(document.body)
// console.log(document.forms)


// Select ElementById
var headTitle = document.getElementById("header-title")
headTitle.textContent ="Code with Bob"
headTitle.innerText ="code with Codebooth "

var header = document.getElementById("main-header")
header.style.borderBottom = "solid 3px black"

// Select Elementbyclassname
// let items = document.getElementsByClassName("list-group-item")
// items[0].innerText = "codeBooth"
// items[2].style.backgroundColor ="red"

// items.style.backgroundColor ="red"

// for(var i =0; i < items.length; i++){
//     items[i].style.backgroundColor ="green"
// }

// Select Element by tag name
let list = document.getElementsByTagName("li")
 list[3].innerText = "Item 4"

//  #f4f4f4

//  querySelector
// let wraper = document.querySelector(".container")
// wraper.style.fontWeight = "Bold"
// console.log(wraper)


// Traversing The DOM
var items = document.querySelector("#items")
console.log(items.parentNode)
items.parentNode.style.backgroundColor = "green"

// console.log(items.childNodes)
// items.childNodes.style.backgroundColor ="green"
console.log(items.children)
items.children[2].style.fontSize = "20px"
// items.firstChild.textContent = "hello Bob"



// Create Element
var newli = document.createElement("li")
newli.className ="list-group-item"

newli = document.createTextNode("item 5")
console.log(newli)


