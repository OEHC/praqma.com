$('.filters-href-button').on('click', function(){
  var height = 10, elem = $('#filters-href');
  if(!elem.hasClass('filters-href_open')){
    height += 10 + elem.children('.filters-href-list').children('ul').height();
  }
  elem.toggleClass('filters-href_open').children('.filters-href-list').css('height', height);
});
