window.onload = function() {

  var paramsURL = document.location.pathname;
  if (paramsURL=="/favorites.html") {
    if (!$.cookie('PHPSESSID')) {
      document.getElementById('form_logout').setAttribute("style", "display:none;");
      document.getElementById('relise_block').setAttribute("style", "display:none;");
      document.getElementById('form_login').setAttribute("style", "");
    } else {
      document.getElementById('form_logout').setAttribute("style", "");
      document.getElementById('relise_block').setAttribute("style", "");
      document.getElementById('form_login').setAttribute("style", "display:none;");
    }
  }

  if ($.cookie('Theme') == 'theme1') {
    document.getElementById('b_theme2').setAttribute("style", "display:none;");
    document.getElementById('preloader_preload').setAttribute("style", "background: url('2.gif');");
    document.getElementById('b_theme1').setAttribute("style", "");
    $('link[href="theme2.css"]').attr('href', 'theme1.css');
  } else if ($.cookie('Theme') == 'theme2') {
    document.getElementById('b_theme1').setAttribute("style", "display:none;");
    document.getElementById('preloader_preload').setAttribute("style", "background: url('1.gif');");
    document.getElementById('b_theme2').setAttribute("style", "");
    $('link[href="theme2.css"]').attr('href', 'theme2.css');
  } else {
    $.cookie('Theme', 'theme2');
    document.getElementById('b_theme1').setAttribute("style", "display:none;");
    document.getElementById('preloader_preload').setAttribute("style", "background: url('2.gif');");
    document.getElementById('b_theme2').setAttribute("style", "");
    $('link[href="theme2.css"]').attr('href', 'theme2.css');
  }
  var preloader = document.getElementById("preloader");
  var preloader_preload = document.getElementById("preloader_preload");
  function fadeOutnojquery(el){
    el.style.opacity = 1;
    var interpreloader = setInterval(
      function(){
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <=0.05){
          clearInterval(interpreloader);
          preloader_preload.style.display = "none";
          preloader.style.display = "none";
        }
      },16
    );
  }
  setTimeout(function(){
    fadeOutnojquery(preloader_preload);
    fadeOutnojquery(preloader_preload);
  },1000);
};
function theme1() {
  $.cookie('Theme', 'theme2');
  document.getElementById('b_theme1').setAttribute("style", "display:none;");
  document.getElementById('b_theme2').setAttribute("style", "");
  $('link[href="theme1.css"]').attr('href', 'theme2.css');
};
function theme2() {
  $.cookie('Theme', 'theme1');
  document.getElementById('b_theme2').setAttribute("style", "display:none;");
  document.getElementById('b_theme1').setAttribute("style", "");
  $('link[href="theme2.css"]').attr('href', 'theme1.css');
};
