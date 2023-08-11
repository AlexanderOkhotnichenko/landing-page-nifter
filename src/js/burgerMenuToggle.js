function burderMenuToggle() {
  const button = document.querySelector('.burger-menu');
  const contentMenu = document.querySelector('.header-content');
  const navigationItems = contentMenu.querySelectorAll('.navigation-link');


  button.addEventListener("click", function() {
    this.classList.toggle("active");
    contentMenu.classList.toggle("visible-menu");
    document.body.classList.toggle("hidden");
  });

  navigationItems.forEach((item) => {
    item.addEventListener("click", function() {
      contentMenu.classList.remove("visible-menu");
      button.classList.remove("active");
      document.body.classList.remove("hidden");
    });
  });
}

burderMenuToggle();