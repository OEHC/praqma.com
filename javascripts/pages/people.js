  var squareUsualSize = 160;
  var squareExpadnedSize = 400;
  var people = $(".people .people-person");
  if ($(document).width() > 500 ){
    squareExpadnedSize = 500;
  }
  var wall = new Freewall(".people");

  function openPeoplePerson($person){
    location.hash = '#' + $person.data("id");
    //
    people.removeAttr("data-position");
    people.find(".content").perfectScrollbar("destroy"); // removing all custom scrollbars
    wall.fixSize({
      block: people,
      width:  squareUsualSize,
      height: squareUsualSize
    });
    $person.attr("data-position", "0-0");
    $person.find(".content").perfectScrollbar({  // adding custom scrollbar to clicked item
      suppressScrollX: true,
    });
    wall.fixSize({
      block: $person,
      width:  squareExpadnedSize,
      height: squareExpadnedSize
    });
    wall.refresh();
    // Scroll to top after clicking a person it the list
    var body = $("html, body");
    var scrollTo = $(".page-people h1").offset().top;
    body.stop().animate({scrollTop: scrollTo }, '200', 'swing');
  }

$(function() {

  wall.reset({
    selector: '.people-person',
    animate: true,
    cellW: squareUsualSize,
    cellH: squareUsualSize,
    gutterX: 10,
    gutterY: 10,
    delay: 0,
    onResize: function() {
      wall.refresh();
    }
  });

  $(".people .people-person").click(function() {
    openPeoplePerson($(this));
  });

  wall.fitWidth();
});


function updatePeopleByHash(){
  var personId = unescape(window.location.hash.slice(1));
  console.log("currentTag = " + personId);
  if(personId){
    $(".people *[data-id="+personId+"]").first().each(function(){
      openPeoplePerson($(this));
    });
  }
}


$(window).on("load", function() {
  updatePeopleByHash();
});   

$(window).on('hashchange', function() {
  updatePeopleByHash();
});
