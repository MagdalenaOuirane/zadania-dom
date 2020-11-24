// 1.
const ulList = document.querySelector('ul');

ulList.classList.add("menu");

//2.

liFirstChild = document.querySelector('li:first-child');

liFirstChild.classList.add('first');

//3.

const liLastChild= document.querySelector('li:last-child');

liLastChild.classList.add('last');

//4. i 5

const liThirdChild = document.querySelector('li:nth-child(3)');

liThirdChild.classList.add('active');

liThirdChild.style.color = "#fff";

// 6.

let links = document.querySelectorAll("a");

links.forEach(link => link.setAttribute('title', 'Przejdź na stronę ..." gdzie ... '));

//7.
links.forEach(link => link.setAttribute('href', '#'));


//8. i 9.

const alertClick = function() {
    alert('click start');
}

const LiItems = document.querySelectorAll('li');

LiItems.forEach((item) => item.addEventListener("click", alertClick))

//10.

liThirdChild.removeEventListener("click",alertClick );