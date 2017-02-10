$(function() {
  $('.recordCard').on('click', (e)=>{
    var eTarget =  $(e.target).find('.recordDetail');
    var context = $(eTarget).context;
    var parent = $(context).closest('.recordCard');
    var str = $(parent).find('small').text();

    _openModal(str);
  })

  function _openModal(str){
    $('#flipFlop').modal('show');
  }

  


});
