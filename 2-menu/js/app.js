const liItems = document.querySelectorAll('.nav-el');

for ( let item of liItems) {
    item.addEventListener('click', event => {
        event.preventDefault();



        liItems.forEach(item => item.parentElement.classList.remove("nav-el-active"));
        item.parentElement.classList.add("nav-el-active");
    })
}