$(document).ready(function(){

  console.log( 'ready!' );

  $("p").click(function() {
    $(this).hide();
  });

  $('.snow').click(function() {
    $('.number1').toggleClass('align-left');
  });
});
