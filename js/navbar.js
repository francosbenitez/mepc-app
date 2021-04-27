// Navbar button


const navSlide = () => {
    const btn = document.querySelector('.nav-btn');
    const ul = document.querySelector('.nav-ul');

    btn.addEventListener('click', () => {
        ul.classList.toggle('nav-active');
        btn.classList.toggle('toggle');
    });
}

navSlide();


// Navbar is-active


(function () {
  var current = location.pathname.split('/mepc/')[1];
  if (current === "") return;
  var menuItems = document.querySelectorAll('.nav-ul a');
  for (var i = 0, len = menuItems.length; i < len; i++) {
      if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
          menuItems[i].className += "is-active";
      }
  }
})();


// Documentos active


let header = document.getElementById("nav");
let links = header.getElementsByClassName("link");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}