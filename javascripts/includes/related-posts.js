$(document).scroll(function(){
  if (document.documentElement.clientWidth < 768) {
    var scrollPercent = $(document).scrollTop() / ($(document).height() - $(window).height());
    //console.log("scrollPercent = " + scrollPercent);
    var isShown = [false, false]
    var showIntervals = [[0.4, 0.6],
                         [0.7, 0.9]];
    $(".include-related-posts .related-post").each(function(index){
      if (index <= 1){
        if (scrollPercent > showIntervals[index][0] && 
              scrollPercent < showIntervals[index][1] && 
              isShown[index] == false){
          $(this).fadeIn("fast");
          isShown[index] = true;
        } else {
          $(this).fadeOut("fast");
          isShown[index] = false;
        }
      }
    });
  }
});
