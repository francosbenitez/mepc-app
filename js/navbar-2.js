const navSlide = () => {
    const btn = document.querySelector('.nav-btn');
    const ul = document.querySelector('.nav-ul');

    btn.addEventListener('click', () => {
        ul.classList.toggle('nav-active');
        btn.classList.toggle('toggle');
    });
}

navSlide();