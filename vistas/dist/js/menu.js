window.addEventListener('scroll',function(){
   var header = document.querySelector('.navbar');
   header.classList.toggle ('sticky', window.scrollY > 0 );

});

$(window).on('scroll', function(){
   
});

function toggleMune() {
   var menuToggle = document.querySelector('.toggle');
   var menu = document.querySelector('.menu-items');
   menuToggle.classList.toggle('active');
   menu.classList.toggle('menu');
}

