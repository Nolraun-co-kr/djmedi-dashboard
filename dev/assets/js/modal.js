function showModal (id) {
  $('.dim').show();
  $('#'+id).show();
}

function hideModal (id) {
  $('.dim').hide();
  $('#'+id).hide();
}

$(document).ready(function(){
  $('.dim').on('click', function(){
    $('.modal').hide();
    $(this).hide();
  });
  $('.modal__close').on('click', function(){
    $('.modal').hide();
    $('.dim').hide();
    $(this).hide();
  });
})