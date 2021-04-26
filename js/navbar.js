const navSlide = () => {
    const btn = document.querySelector('.nav-btn');
    const ul = document.querySelector('.nav-ul');

    btn.addEventListener('click', () => {
        ul.classList.toggle('nav-active');
        btn.classList.toggle('toggle');
    });
}

navSlide();

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