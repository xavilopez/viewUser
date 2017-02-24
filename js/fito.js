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
      console.log(str);

    }else if (str == "curvylegcurls") {
      link = "https://xavilopez.github.io/curvybenchpress/";
      console.log(str);

    }else if (str == "curvywomenbackexercises") {
      link = "https://xavilopez.github.io/curvywomenback/";
      console.log(str);

    }else if (str == "declinebenchpress") {
      link = "https://xavilopez.github.io/declinebenchpress/";
      console.log(str);

    }else if (str == "dumbbell") {
      link = "https://xavilopez.github.io/dumbbell/";
      console.log(str);

    }
    $('.viewImageFrame').attr('src', link);
    $('#flipFlop').modal('show');
  }

});
