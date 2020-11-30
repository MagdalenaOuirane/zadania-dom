const form = document.querySelector("form");
const userList = document.querySelector(".user-list");

const addNewItem = function (event) {
  event.preventDefault();

  //get input values
  const newNameItem = document.getElementById("name").value;
  const newPhonneItem = document.getElementById("phone").value;

  //create new li element
  const li = document.createElement("li");
  // add class
  li.classList.add("user");
  console.log(li);

  //append li to listOfUsers
  userList.appendChild(li);

  //create div element
  const div = document.createElement("div");
  //add class to div
  div.classList.add("user-data");
  console.log(div);
  //add div to li
  li.appendChild(div);
  
  //create divName
  const divName = document.createElement("div");
  divName.classList.add("user-name");
  // add Text Node with input value
  divName.appendChild(document.createTextNode(newNameItem));
  //add divName to div
  div.appendChild(divName);

  //create divPhone
  const divPhone = document.createElement("div");
  //add class to divPhone
  divPhone.classList.add("user-phone");
  // add Text Node with input value
  divPhone.appendChild(document.createTextNode(newPhonneItem));
  //add divPhone to the div
  div.appendChild(divPhone);

  //create delete btn
  const btn = document.createElement("button");
  //add class to button
  btn.classList.add("btn", "user-delete");
  //add Text Node to delete btn
  btn.appendChild(document.createTextNode("Usun"));
  //add btn to the div
  div.appendChild(btn);
};

// form submit event
form.addEventListener("submit", addNewItem);

//delete event

const removeItem = function (event) {
  if (event.target.classList.contains("user-delete")) {
    const li = document.querySelector(".user");
    console.log(li);
    userList.removeChild(li);
  }
};

userList.addEventListener("click", removeItem);
