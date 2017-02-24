$(function() {
  $(document).on('click','.recordCard', (e)=>{
    var eTarget =  $(e.target).find('.recordDetail');
    var context = $(eTarget).context;
    var parent = $(context).closest('.recordCard');
    var str = $(parent).find('small').text();
    console.log($(str).toLowerCase().replace(/ /g,''));
    _openModal(str);
  })

  function _openModal(str){

    $('#flipFlop').modal('show');
  }

});
