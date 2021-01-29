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



var readme_btn = document.querySelectorAll('.read-me-btn');
var readme_txt = document.querySelectorAll('.read-me');


for (var k = 0; k < readme_txt.length; k++) {

  readme_txt[k].style.display = "none";
}

for (var i = 0; i < readme_btn.length; i++) {

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






var navBar = document.querySelector("#nav-bar");
var toggle = document.querySelector(".toggler");
var toggler = document.querySelector(".toggler .fa");

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




var nav_items = document.querySelectorAll("ul li");

for (var i = 0; i < nav_items.length; i++) {
  const a = nav_items[i].querySelector("a");
  a.addEventListener("click", function() {
    for (let j = 0; j < nav_items.length; j++) {
      navBar.style.left = "-270px";

      toggler.style.left = "2%";
      toggler.style.color = "#ec1869";

    }

  })
}



AOS.init({
  easing: 'ease',
  duration: 1800
});


// jquery
// var read_me = $(".read-me");


// $(".read-me-btn").click(function(event){

//    console.log(this);
//   $(this.nextElementSibling).slideToggle("slow");
//      if (this.nextElementSibling.style.display === "none"){
//           this.nextElementSibling.style.display = "block";
//           this.innerHTML = "Read me";
//      }else if (this.nextElementSibling.style.display === "block"){
//                this.nextElementSibling.style.display = "none";
//               this.innerHTML = "Close me";
//      }
//     // read_me.stopPropagation();
//     // read_me.stopImmediatePropagation();



// })


//   const nav = document.querySelector(".nav"),
//   navList = nav.querySelectorAll("li"),
//   totalNavList = navList.length;
//   allSection = document.querySelectorAll(".section"),
//   totalSection = allSection.length;


//   for(let i = 0 ; i <totalNavList ; i++){
//   	const a=navList[i].querySelector("a");
//   	a.addEventListener("click",function(){
//   		for(let j = 0 ; j < totalNavList; j++){
//   			navList[j].querySelector("a").classList.remove("active");
//   		}
//   		this.classList.add("active");
//   		showSection(this);

//   	})
//   }


//          function showSection(element){
//          	for(let i = 0 ; i<totalSection;i++){
//          		allSection[i].classList.remove("active");
//          	}

//          	const target = element.getAttribute("href").split("#")[1];
//          	document.querySelector("#"+target).classList.add("active")
//          }


//      const navTogglerBtn = document.querySelector(".nav-toggler"),
//      aside=document.querySelector(".aside");

//      navTogglerBtn.addEventListener("click",()=>{
//      	asideSectionTogglerBtn();
//      })

// function asideSectionTogglerBtn(){
// 	aside.classList.toggle("open");
// 	navTogglerBtn.classList.toggle("open");

// }


// $(document).ready(function () {

//     $("#sidebar").mCustomScrollbar({
//          theme: "minimal"
//     });

//     $('#sidebarCollapse').on('click', function () {
//         // open or close navbar
//         $('#sidebar').toggleClass('active');
//         // close dropdowns
//         $('.collapse.in').toggleClass('in');
//         // and also adjust aria-expanded attributes we use for the open/closed arrows
//         // in our CSS
//         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//     });

// });
