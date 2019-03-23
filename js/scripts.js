$(document).ready(function() {

  $('#about').click(function() {
    $('.selected').removeClass('selected');
    $('#about').addClass('selected');
    $('[id^=section]').addClass('invisible');
    $('#section-about').removeClass('invisible');
  })

  $('#made').click(function() {
    $('.selected').removeClass('selected');
    $('#made').addClass('selected');
    $('[id^=section]').addClass('invisible');
    $('#section-made').removeClass('invisible');
  })

  $('#played').click(function() {
    $('.selected').removeClass('selected');
    $('#played').addClass('selected');
    $('[id^=section]').addClass('invisible');
    $('#section-played').removeClass('invisible');
  })

  $('#hmu').click(function() {
    $('.selected').removeClass('selected');
    $('#hmu').addClass('selected');
    $('[id^=section]').addClass('invisible');
    $('#section-hmu').removeClass('invisible');
  })

  $('#hmu2').click(function() {
    $('.selected').removeClass('selected');
    $('#hmu').addClass('selected');
    $('[id^=section]').addClass('invisible');
    $('#section-hmu').removeClass('invisible');
  })

//glitter cursor starts below

});
