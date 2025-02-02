const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll("nav a");
function toggleMenu() {
    // const menu = document.querySelector(".menu");

    navLinks.forEach(link => {
      link.classList.toggle("hide")
    });
    // menu.classList.toggle("hide");
}
menuButton.addEventListener("click", toggleMenu);


function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}
handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="Renoir_-_Mouling_de_la_Galette_-_1920-1080.jpg" alt="picture">
      </div>`;
}
function viewHandler(event) {
	const clickedElement = event.target;  
  const src = clickedElement.getAttribute("src"); 
  if (!src) return; 

  const srcParts = src.split("-"); 
  const fullImageSrc = `${srcParts[0]}-full.jpeg`; 
  const altText = clickedElement.getAttribute("alt");

  document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImageSrc, altText))

  const closeButton = document.querySelector(".close-viewer");
  closeButton.addEventListener("click", closeViewer)
}

const gallery = document.querySelector(".gallery"); 
gallery.addEventListener("click", viewHandler);

function closeViewer(){
  const viewer = document.querySelector(".viewer");
  viewer.remove();
}
