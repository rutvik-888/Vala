$(document).ready(function(){
  // Cache commonly accessed elements
  const $container = $('.container');
  const $title = $('.title');
  const $close = $('.close');

  // Handle click on title
  $title.click(function() {
    $container.addClass('open');
  });

  // Handle click on close button
  $close.click(function() {
    $container.removeClass('open');
  });
});
