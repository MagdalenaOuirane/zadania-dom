const addBtn = document.querySelector("#add");
const list = document.querySelector(".list");

const addNewItem = function () {
  const count = list.querySelectorAll(".element").length;
  //create div element
  const div = document.createElement("div");
  console.log(div);
  div.classList.add("element");

  //create h3 element
  const h3 = document.createElement("h3");
  h3.classList.add("element-title");
  h3.textContent = "Element numer";

  div.appendChild(h3);

  //create span element
  const span = document.createElement("span");
  span.classList.add("nr");
  span.textContent = `${count + 1}`;

  //add span to h3
  h3.appendChild(span);

  const cloneBtn = document.createElement("button");
  cloneBtn.classList.add("clone");
  cloneBtn.textContent = "Clone";

  div.appendChild(cloneBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "Delete";

  div.appendChild(deleteBtn);

  list.appendChild(div);
};

addBtn.addEventListener("click", addNewItem);

function removeBtn(e) {
  console.log(e);
  if (e.target.classList.contains("delete")) {
    const elDiv = document.querySelector(".element");
    console.log(elDiv);
    list.removeChild(elDiv);
  }
}



list.addEventListener("click", removeBtn);

function cloneElement(e) {
  if (e.target.classList.contains("clone")) {
    const cloneEl = e.target.closest(".element").cloneNode(true);
    list.append(cloneEl);
  }
}

list.addEventListener("click", cloneElement);
