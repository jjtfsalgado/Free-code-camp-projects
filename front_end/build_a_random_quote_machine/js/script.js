// http://api.jquery.com/jquery.getjson/#jsonp

window.onload = function() {
  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };

    return t;
  }(document, "script", "twitter-wjs"));

  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
  .done(update)
  .fail(handleErr);

  $('#getQuote').click(function() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(update)
    .fail(handleErr);

    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    var color = colors[Math.floor(Math.random()*(colors.length))];

      $("body").css("background-color",color)
      $("body").css("color",color)
      $("button").css("background-color",color)

  });

  function update(response) {
    $('#quote').prepend('<p>' +response['quoteText'] + '</p>');
    $('#quote').html(response['quoteText']);

    var codeUrl = encodeURI(['\"',response['quoteText'],'\" - ', response['quoteAuthor']].join(''));
    var baseUrl = "https://twitter.com/intent/tweet?text=";
    var fullUrl = [baseUrl,codeUrl].join('');

    // $('#tweet').setAttribute('href', fullUrl);
    document.getElementById('tweet').setAttribute('href', fullUrl);


    $('#author').prepend('<footer>' + response['quoteAuthor'] + '</footer>');
    if(response['quoteAuthor']==''){
      response['quoteAuthor']='Anonymous';
    }
    $('#author').html(response['quoteAuthor']);
  }

  function handleErr(jqxhr, textStatus, err) {
    console.log("Request Failed: " + textStatus + ", " + err);
  }
  function randomRGB() {
    return Math.floor(Math.random() * 256);
  }

};
