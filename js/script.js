//Portfolio item filter

const filterContainer = document.querySelector(".portfolio-filter"),
  filterBtns = filterContainer.children,
  totalFilterBtn = filterBtns.length,
  portfolioItems = document.querySelectorAll(".portfolio-item"),
  totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function() {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    for (let k = 0; k < totalPortfolioItem; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-category")) {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      } else {
        portfolioItems[k].classList.add("hide");
        portfolioItems[k].classList.remove("show");

      }
      if (filterValue === "all") {

        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");

      }
    }


  })
}



let readme_btn = document.querySelectorAll('.read-me-btn');
let readme_txt = document.querySelectorAll('.read-me');


for (let k = 0; k < readme_txt.length; k++) {

  readme_txt[k].style.display = "none";
}

for (let i = 0; i < readme_btn.length; i++) {

  readme_btn[i].addEventListener("click", function() {



    if (this.nextElementSibling.style.display === "none") {

      this.nextElementSibling.style.display = "block";
      this.nextElementSibling.style.webkitTransition = "display 2s";
      this.innerHTML = "Close Me";
    } else {

      this.nextElementSibling.style.display = "none";
      this.nextElementSibling.style.webkitTransition = "display 1s";
      this.innerHTML = "Read Me";
    }







  });
}

let navBar = document.querySelector("#nav-bar");
let toggle = document.querySelector(".toggler");
let toggler = document.querySelector(".toggler .fa");

navBar.style.left = "-270px";
toggle.addEventListener("click", function() {
  if (navBar.style.left === "-270px") {
    navBar.style.left = "0";
    toggler.style.left = "15%";
    toggler.style.color = "white";
    toggler.style.webkitAnimationPlayState = "paused";
  } else {
    navBar.style.left = "-270px";
    toggler.style.left = "2%";
    toggler.style.color = "#ec1869";
    toggler.style.webkitAnimationPlayState = "running";

  }
});




let nav_items = document.querySelectorAll("ul li");

for (let i = 0; i < nav_items.length; i++) {
  const a = nav_items[i].querySelector("a");
  a.addEventListener("click", function(){
    for (let j = 0; j < nav_items.length; j++); {
      navBar.style.left = "-270px";

      toggler.style.left = "2%";
      toggler.style.color = "#ec1869";

    }

  });
}
AOS.init({
  easing: 'ease',
  duration: 1800
});

 let scroll = new SmoothScroll('a[href*="#"]', {
      speed: 300,
      speedAsDuration: true
    });
