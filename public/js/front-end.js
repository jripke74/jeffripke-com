'use strict'

document.querySelector('#year').innerHTML = new Date().getFullYear()

Smooth scrolling
$('#main-nav a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault()

    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 800, () => {
      window.location.hash = this.hash
    })
  }
})

$('.port-item').click(function() {
  $('.collapse').collapse('hide');
})

$(document).on('click', '[data-toggle="lightbox"]', function (e) {
  e.preventDefault();
  $(this).ekkoLightbox();
})