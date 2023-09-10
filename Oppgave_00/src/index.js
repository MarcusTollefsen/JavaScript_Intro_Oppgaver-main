// Oppgave 1
const removeP = document.getElementById("remove");
const removeKnapp = document.querySelector('#remove-btn');

removeKnapp.addEventListener("click", () => removeP.remove());
// Oppgave 2
const change = document.getElementById("change");
const changeKnapp = document.querySelector('#change-btn');

changeKnapp.addEventListener("click", () => change.innerHTML = "Jeg fikk det til!");
// Oppgave 3
const inputText = document.getElementById("input-text");

const input = document.getElementById("input");

input.addEventListener("input", () => {
  inputText.innerHTML = input.value;
  if (inputText.innerHTML === "") {
    inputText.innerHTML = "Skriv noe så dukker det opp her";
  }
});

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];


const writeListKnapp = document.getElementById("write-list");
const ul = document.querySelector("#ul");

writeListKnapp.addEventListener("click", () => {
  for (let item of myList) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
  }
});
// Oppgave 5
const select = document.getElementById("select");
const text = document.getElementById("text");
const createElementKnapp = document.getElementById("create");

createElementKnapp.addEventListener("click", () => {
  let createElement = document.createElement(select.value);

  createElement.innerHTML = text.value;
  document.getElementById("placeholder").appendChild(createElement);
})

// Oppgave 6
const UlList = document.getElementById("list");
const removeLiKnapp = document.getElementById("remove-li");

removeLiKnapp.addEventListener("click", () => {
  if (UlList.childElementCount > 0) {
    UlList.removeChild(UlList.children[0]);
  }
});
// Oppgave 7
const nameInput = document.getElementById("name");

function disable() {
  const buttonToDisable = document.getElementById("order");

  if (nameInput.value.length > 4) {
    buttonToDisable.disabled = true;
    buttonToDisable.style.border = "1px solid red";
  } else {
    buttonToDisable.disabled = false;
    buttonToDisable.style.border = "1px solid black";
  }
}

nameInput.addEventListener("input", disable);
// Oppgave 8
const ulStyle = document.querySelector(".children");

document.getElementById("color").addEventListener("click", () => {
  for (let i = 0; i < ulStyle.childElementCount; i++) {
    i % 2 
    ? ulStyle.children[i].style.border = "3px solid pink" 
    : ulStyle.children[i].style.border = "3px solid green";
  }
}) 
