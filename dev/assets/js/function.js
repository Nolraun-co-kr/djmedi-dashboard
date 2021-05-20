$(document).ready(function(){
  
  //main slide
  $('.main__slide').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  //datepicker
  $(".datepicker").datepicker({
    dateFormat: 'yy-mm-dd'
  });

  var fileTarget = $('#file');
  fileTarget.on('change', function(){
    var cur = $('.file-wrap input[type="file"]').val();
    $('.upload-name').val(cur);
  });

});