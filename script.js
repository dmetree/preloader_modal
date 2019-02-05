$(document).ready(function(){
  $('#modal, #bg_layer').hide();
  $('.section__info_btn').on('click', function(){

    $('#bg_layer').show();
    $('.loader').css('display', 'block');
    $('.loader').delay(3500).fadeOut('slow');

    function loaderTimer() {
      $('#modal').show(1000);
    }
    setTimeout(loaderTimer, 3500);

      $('#bg_layer').animate({
          opacity: 0.5
      });
  });
  $('.modal_btn').on('click', function(){
      $('#modal, #bg_layer').fadeOut(1000);
      $('.section__info_text').text('New text');
      $('.section__info_view').attr('src', 'https://www.notigatos.es/wp-content/uploads/2018/02/gato-atigrado-830x554.jpeg');
      $('.section__info_btn').addClass('btn_disabled').prop('disabled', true).text('Готово');
      $('.loader').css('display', 'none');

  });
});
