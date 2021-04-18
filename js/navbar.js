const navSlide = () => {
    const button = document.querySelector('.button');
    const nav = document.querySelector('.nav-ul');

    button.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        button.classList.toggle('toggle');
    });
}

navSlide();