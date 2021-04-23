const navSlide = () => {
    const btn = document.querySelector('.nav-btn');
    const ul = document.querySelector('.nav-ul');

    btn.addEventListener('click', () => {
        ul.classList.toggle('nav-active');
        btn.classList.toggle('toggle');
    });
}

navSlide();

let header = document.getElementById("nav");
let links = header.getElementsByClassName("link");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}