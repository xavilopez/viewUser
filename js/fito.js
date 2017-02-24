$(function() {
  $(document).on('click','.recordCard', (e)=>{
    var eTarget =  $(e.target).find('.recordDetail');
    var context = $(eTarget).context;
    var parent = $(context).closest('.recordCard');
    var str = $(parent).find('small').text().toLowerCase().replace(/ /g,'');
    console.log(str);
    _openModal(str);
  })

  function _openModal(str){
    var link;
    if (str == "curvybenchpress") {
      link = "https://xavilopez.github.io/curvybenchpress/";
    }else if (str == "curvylegcurls") {
      link = "https://xavilopez.github.io/curvybenchpress/";
    }else if (str == "curvywomenbackexercises") {
      link = "https://xavilopez.github.io/curvywomenback/";
    }else if (str == "declinebenchpress") {
      link = "https://xavilopez.github.io/declinebenchpress/";
    }else if (str == "dumbbell") {
      link = "https://xavilopez.github.io/dumbbell/";
    }
    $('.viewImageFrame').attr('src', link);
    $('#flipFlop').modal('show');
  }

});
