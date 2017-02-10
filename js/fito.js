$(function() {
  $('.recordCard').on('click', (e)=>{
    var eTarget =  $(e.target).find('.recordDetail');
    var context = $(eTarget).context;
    var parent = $(context).closest('.recordCard');
    console.log($(parent).find('small').text());

  })

});
