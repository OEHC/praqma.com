//jQuery(function($) {
  //jQuery.cookie("example", ["foo1", "foo2"]);
  //alert( jQuery.cookie("example") );
//});
//document.cookie = "username=John Doe";

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function getPathname(url) {
    var a = document.createElement('a');
    a.href = url;

    return a.pathname;
}

// getting comma separated list of relative post urls
var postsVisitedString = getCookie("postsVisited");
// converting it to a array
var postsVisited = postsVisitedString.split(",");
if (postsVisitedString != "") {
  // removing visited posts
  for(i in postsVisited){
    $('*[data-url="' + postsVisited[i] + '"]').remove();
    //$('*[data-url="' + postsVisited[i] + '"]').css("transform", "rotate(10deg)");
    //console.log('*[data-url="' + postsVisited[i] + '"]');
    // if no posts left, we'll hide the h2 element
    if($('.related-post').length == 0){
      $('.include-related-posts h2').remove();
    }
  }
} else {
}
// adding current post to cookies, if it's not there already
var pathname = getPathname(window.location.href);
console.log(pathname);
console.log(postsVisited.indexOf(pathname));
if (postsVisited.indexOf(pathname) == -1){
  if(postsVisitedString != ""){
    postsVisitedString += ",";
  }
  setCookie("postsVisited", postsVisitedString + pathname, 90);
}
