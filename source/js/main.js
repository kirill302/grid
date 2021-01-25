document.querySelector('.search > span').addEventListener('click', function() {
   document.querySelector('.search > input').classList.toggle('active');
   document.querySelector('.search > .search-icon').classList.toggle('dn');
});

function burger(burgerSelector, navSelector) {
   const body = document.body;

   let burger = document.querySelector(burgerSelector);
   let nav = document.querySelector(navSelector);

   burger.addEventListener('click', function(){
      body.classList.toggle('no-scroll');
      nav.classList.toggle('burger-active');
      burger.classList.toggle('active');
   });
}

burger('.burger', '.nav');