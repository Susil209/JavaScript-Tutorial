const parent = document.getElementById("parent")
console.log(parent);

console.log(parent.children); // returns HTMLCollection
console.log(parent.children[0].innerText); // Monday

for (let i = 0; i < parent.children.length; i++) {
    const element = parent.children[i];
    console.log(element);
}

parent.children[0].style.color = "red"
console.log(parent.childElementCount); // 4
console.log(parent.firstElementChild); // <div id="day" style="color: red;">Monday</div>

console.log(parent.lastElementChild);

const day = document.getElementById("day")
console.log(day);
console.log(day.nextElementSibling); // <div id="day">Tuesday</div>
console.log(day.parentElement);


console.log(parent.childNodes) // NodeList
console.log(parent.baseURI); // https://obscure-fishstick-679jr9q6w6vf5rwg-5500.app.github.dev/DOM_Manipulation/

console.log(parent.firstChild);
console.log(parent.lastChild);
console.log(parent.childNodes[1]);
console.log(parent.nextSibling);
console.log(parent.previousSibling);
console.log(parent.nodeType);
// console.log(parent.nodeValue);
console.log(parent.parentNode);
console.log(parent.parentElement);
console.log(parent.textContent);

const colours = ["red","green", "blue", "pink", "violet"]


// create element 

function createMyElement(elementName, className, idName, text) {
    // creating new div element
    
    const divEle = document.createElement(elementName)
    console.log(divEle);
    divEle.className = className
    divEle.id = idName

    divEle.setAttribute("title", "newTitle")
    // divEle.innerText = "This is a div element."

    divEle.style.backgroundColor = colours[Math.round(Math.random() * 4)]
    divEle.style.fontSize = "25px"
    divEle.style.borderRadius = "15px"
    divEle.style.padding = "5px"
    divEle.style.marginTop = "15px"

    const newText = document.createTextNode(text)
    divEle.appendChild(newText)

    document.body.appendChild(divEle)
}  

// createMyElement("div", "myClass", "myId", "This is a div element")

for(let i=0; i<5; i++){
    createMyElement("div", "myClass", "myId", "This is a div element")
}



// create and append a li element 
function createList(itemName) {
    const li = document.createElement("li")
    // li.innerHTML = itemName
    
    li.appendChild(document.createTextNode(itemName));
    console.log(li);
    document.querySelector('.list').appendChild(li)
    // or document.querySelector("ul").appendChild(li)
}

createList("Javascript")
createList("Python")
createList("Java")

// replace elements
const pythonLi = document.querySelector("li:nth-child(5)")
console.log(pythonLi);

const newLi = document.createElement("li")
newLi.textContent = "Ruby"
pythonLi.replaceWith(newLi)

const ul = document.querySelector(".list");
console.log(ul.outerHTML)

// using outerHtml

const javaScriptLi = document.querySelector("li:nth-child(4)")
console.log(javaScriptLi);
javaScriptLi.outerHTML = "<li>TypeScript</li>"


// remove element
const firstChild = document.querySelector("li:first-child")
console.log(firstChild);
firstChild.remove()
