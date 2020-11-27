const tabsDiv = document.querySelector('.tabs');

const tabLinks = document.querySelectorAll('.tab-link');



for (let element of tabLinks) {
    element.addEventListener("click", e => {
        e.preventDefault();
        
        tabLinks.forEach(element => element.parentElement.classList.remove("tab-el-active"));
  
            const href = el.getAttribute("href");
            const targetDiv = document.querySelector(href);

          
            const divs = [...targetDiv.parentElement.children];


            divs.forEach(el => el.classList.remove("tab-content-active"));
            targetDiv.classList.add("tab-content-active");     element.parentElement.classList.add("tab-el-active");

         
          const href = element.getAttribute("href");
          const targetDiv = document.querySelector('href');



  
  const divs = [...targetDiv.parentElement.children];

  
  divs.forEach(element => element.classList.remove("tab-content-active"));
  targetDiv.classList.add("tab-content-active");
         
          divs.forEach(element => element.classList.remove("tab-content-active"));
          targetDiv.classList.add("tab-content-active");
    })

}