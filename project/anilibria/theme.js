window.onload = function() {
  if (!$.cookie('PHPSESSID')) {
    document.getElementById('form_logout').setAttribute("style", "display:none;");
    document.getElementById('relise_block').setAttribute("style", "display:none;");
    document.getElementById('form_login').setAttribute("style", "");
  } else {
    document.getElementById('form_logout').setAttribute("style", "");
    document.getElementById('relise_block').setAttribute("style", "");
    document.getElementById('form_login').setAttribute("style", "display:none;");
  }

  if ($.cookie('Theme') == 'theme1') {
    document.getElementById('b_theme2').setAttribute("style", "display:none;");
    document.getElementById('b_theme1').setAttribute("style", "");
    $('link[href="theme2.css"]').attr('href', 'theme1.css');
  } else if ($.cookie('Theme') == 'theme2') {
    document.getElementById('b_theme1').setAttribute("style", "display:none;");
    document.getElementById('b_theme2').setAttribute("style", "");
    $('link[href="theme2.css"]').attr('href', 'theme2.css');
  } else {
    $.cookie('Theme', 'theme2');
    document.getElementById('b_theme1').setAttribute("style", "display:none;");
    document.getElementById('b_theme2').setAttribute("style", "");
    $('link[href="theme2.css"]').attr('href', 'theme2.css');
  }
};
function theme1() {
  $.cookie('Theme', 'theme2');
  document.getElementById('b_theme1').setAttribute("style", "display:none;");
  document.getElementById('b_theme2').setAttribute("style", "");
  $('link[href="theme1.css"]').attr('href', 'theme2.css');
}
function theme2() {
  $.cookie('Theme', 'theme1');
  document.getElementById('b_theme2').setAttribute("style", "display:none;");
  document.getElementById('b_theme1').setAttribute("style", "");
  $('link[href="theme2.css"]').attr('href', 'theme1.css');
}
