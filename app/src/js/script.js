(function () {
    var toggle = document.querySelector('.header__hamburguer');
    var menu = document.querySelector('.header__menu')
    toggle.addEventListener('click', function(e) {
      this.classList.toggle('header__hamburguer--active');
      menu.classList.toggle('show');
    });
  })();