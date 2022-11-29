
//  navbar

$(window).scroll(() => {
  if($(window).scrollTop() > 590) { 
    $('nav').removeClass('pt-4').addClass('sticky-top bg-dark')
  } else {
    $('nav').removeClass('sticky-top bg-dark').addClass('pt-4')
  }
})

$('#INavbarBtn').on('click', () => {
  console.log('lol')
  if($('#INavSocial').hasClass('flex-column')) {
    $('#INavSocial').removeClass('flex-column align-items-start').addClass('align-items-center')
  } else {
    $('#INavSocial').removeClass('align-items-center').addClass('flex-column align-items-start')
  }
})

// button up scroll top

$('#btnUp').on('click', () => {
  $('html, body').animate({scrollTop:(0),}, 500)
  return false;
})

