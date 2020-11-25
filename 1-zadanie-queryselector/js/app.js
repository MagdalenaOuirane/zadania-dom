//1.
const elFirstAttempt = document.querySelectorAll('.el.first-attempt');

for ( const element of elFirstAttempt ) {
   element.classList.add('active');
}


//2.

const elDataBorder = document.querySelectorAll('div.el[data-border]');

for (let el of elDataBorder) {
    el.setAttribute('data-el-active', "");
}

//3.

const hackElements = document.querySelectorAll('.el.hack');

hackElements.forEach(element => element.setAttribute('title', 'hacking'));

//4.

const hijackElements = document.querySelectorAll('.hijack');

hijackElements.forEach(el => el.removeAttribute('title','hijack'));

//5.

const matches = document.querySelectorAll('.st1, .st2');
for (let element of matches) {
    element.style.color = "red";
    element.style.fontSize = '15px';
}


//6.

const attribElements = document.querySelectorAll('.el.attrib');

for (let element of attribElements) {
    element.setAttribute('data-hack-active', '');
    element.removeAttribute('data-hack-inactive', '');
}


//7.

const lastElements = document.querySelectorAll('.last-attempt');

for (let span of lastElements) {
  span.style.display = 'none';
}