
if (screen.width > 991){
    document.querySelector('.sub-menu').classList.remove('dropdown-menu');
    }
    

document.querySelector('.dropdown_toggle').addEventListener('click', function(){
    document.querySelector('.sub-menu').classList.toggle('open-dropdown');
})


for(i=0; i<document.querySelectorAll('.tab-item').length;i++){
document.querySelectorAll('.tab-item')[i].addEventListener('click', function(){
    removeactive();
    this.classList.add('active');
})
}


function removeactive(){
    for(i=0; i<document.querySelectorAll('.tab-item').length;i++){
        document.querySelectorAll('.tab-item')[i].classList.remove('active');
    }
}

 
$(function(){
    // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
    didScroll = true;
  });

  setInterval(function() { // wait for it... wait for it... wait for it
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 200);

  function hasScrolled() {
        var scrolltop = $(this).scrollTop();
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - scrolltop) <= delta)	return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (scrolltop > lastScrollTop && scrolltop > navbarHeight){
          // On scroll down we add nav-up
         
          $('header').removeClass('header-sticky').addClass('nav-up');
        
        } else {
          // On scroll up we add header-sticky
          if(scrolltop + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('header-sticky');
          }
          if(scrolltop <200){
            $('header').removeClass('header-sticky')
          }
        }

        lastScrollTop = scrolltop;
  }
});