$(document).ready(function(){
  var $article__alpha = $('.article__alpha').text();
  var $writing__heading = $('.writing__heading').text();
  var $writing__subhead = $('.writing__subheading');
  if ($article__alpha.length < 27) {
    $writing__subhead.addClass('subheading--marginA');
  }
  if ($article__alpha.length > 54 ) {
    $writing__subhead.addClass('subheading--marginB');
  }
})