$(document).ready(function(){
  console.log( 'ready!' );

$("p").click(function() {
  $(this).hide();
});

$( ".content1" )
  .filter( ":odd" )
    .hide()
  .end()
  .filter( ":even" )
    .hover(function() {
      $( this )
        .toggleClass( "active" )
        .next()
          .stop( true, true )
          .slideToggle();
});

$( ".content2" )
  .filter( ":odd" )
    .hide()
  .end()
  .filter( ":even" )
    .hover(function() {
      $( this )
        .toggleClass( "active" )
        .next()
          .stop( true, true )
          .slideToggle();
});

$( ".content3" )
  .filter( ":odd" )
    .hide()
.end()
  .filter( ":even" )
  .hover(function() {
        $( this )
        .toggleClass( "active" )
        .next()
          .stop( true, true )
          .slideToggle();
});

$( ".content4" )
  .filter( ":odd" )
    .hide()
  .end()
  .filter( ":even" )
    .hover(function() {
      $( this )
      .toggleClass( "active" )
        .next()
          .stop( true, true )
          .slideToggle();
});

$( ".content5" )
  .filter( ":odd" )
    .hide()
  .end()
  .filter( ":even" )
  .hover(function() {
      $( this )
      .toggleClass( "active" )
        .next()
          .stop( true, true )
          .slideToggle();
});
});
