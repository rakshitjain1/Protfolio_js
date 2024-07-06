var typed = new Typed(".typing", {
  strings: ["Web Designer", "Front-end-develeoper", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalsection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function ()
  
  { 
    removeBacksection();
    for (let j = 0; j < totalNavList; j++) 
    {
      if (navList[j].querySelector("a").classList.contains("active")) 
      {
        // allSection[j].classList.add("back-section");
        addbackfun(j);
      }

      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if(window.innerWidth<1200)
    {
        asideSectiontogglebar()
    }
  });
}
function addbackfun(num)
{
  allSection[num].classList.add("back-section");
}
function removeBacksection()
{
  for (let i = 0; i < totalsection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function showSection(element) {
 
  for (let i = 0; i < totalsection; i++) {
    allSection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNAv(element)
{
  for(let i= 0; i<totalNavList ; i++)
  {
    navList[i].querySelector("a").classList.remove("active")
    const target = element.getAttribute("href").split("#")[1];
    if(target === navList[i].querySelector("a").getAttribute('href').split("#")[1])
    {
      navList[i].querySelector("a").classList.add("active")
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function(e) {
  const sectionIndex = this.getAttribute("data-section-index")
  // console.log(sectionIndex);
  showSection(this);
  updateNAv(this)
  removeBacksection();
  addbackfun(sectionIndex);
});













const navtogglebtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");




navtogglebtn.addEventListener("click",()=>
{
    asideSectiontogglebar();
})

function asideSectiontogglebar()
{
   aside.classList.toggle("open");
   navtogglebtn.classList.toggle("open")

   for(let i=0 ; i<totalsection ; i++)
   {
    allSection[i].classList.toggle("open")
   }
}
