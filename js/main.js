window.$ = require('jquery.min.js')

$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('nav').toggleClass('active')
  })
})
