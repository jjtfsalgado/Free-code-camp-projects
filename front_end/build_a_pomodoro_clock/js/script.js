// http://api.jquery.com/jquery.getjson/#jsonp
window.onload = function() {
  var countdown=false;
  var pause = false;
  var interval, timer, percent, totalPercent,sessionTime;
  $("#visor").html("Session");

  $("#breakPLus").click(function(){
    var number = $('#breakNumber').html();
    if(number ==60){return;}
    $('#breakNumber').html(+number+1);
  })

  $("#breakMinus").click(function(){
    var number = $('#breakNumber').html();
    if(number <2){return;}
    $('#breakNumber').html(+number-1);
  })

  $("#sessionPlus").click(function(){
    var number = $('#sessionNumber').html();
    if(number ==60){return;}
    $('#sessionNumber').html(+number+1);
  })

  $("#sessionMinus").click(function(){
    var number = $('#sessionNumber').html();
    if(number <2){return;}
    $('#sessionNumber').html(+number-1);
  })

  $("#pomodoroBtn").click(function(){
    if (countdown == false){
      if ($("#visor").html() == "Session"){
        sessionTime = $('#sessionNumber').html();
      }else{
        sessionTime = $('#breakNumber').html()
      }
      timer = +sessionTime * 60;
      percent = (1/timer)*100;
      totalPercent = percent;
      start();
    }else if (pause==true) {
      for (var i = 1; i < 99999; i++) {
        window.clearInterval(i);
        window.clearTimeout(i);
      }
      start();
    }else if(countdown==true){
      for (var i = 1; i < 99999; i++) {
        window.clearInterval(i);
        window.clearTimeout(i);
      }
      pause=true;
    }

    if((+sessionTime != $('#sessionNumber').html()) && $("#visor").html() == "Session"){
      for (var i = 1; i < 99999; i++) {
        window.clearInterval(i);
        window.clearTimeout(i);
      }
      sessionTime = $('#sessionNumber').html();
      timer = +sessionTime * 60;
      percent = (1/timer)*100;
      totalPercent = percent;
      start();
    }else if((+sessionTime != $('#breakNumber').html()) && $("#visor").html() == "Break!!"){
      for (var i = 1; i < 99999; i++) {
        window.clearInterval(i);
        window.clearTimeout(i);
      }
      sessionTime = $('#breakNumber').html();
      timer = +sessionTime * 60;
      percent = (1/timer)*100;
      totalPercent = percent;
      start();
    }
  })

  function start(){
    interval = setInterval(function () {
      minutes = parseInt(timer/60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      --timer;
      $("#time").html((minutes + ":" + seconds));
      countdown = true;
      pause = false;
      totalPercent+=percent;
      if(totalPercent <= 105){
        $('#pomodoroBtn').css({background: "linear-gradient(to top, #ff3019 "+totalPercent+"%,transparent "+totalPercent+"%,transparent 100%)"});
      }
      if($("#visor").html() == "Session" && timer <0){
        $("#visor").html("Break!!");
        sessionTime = $('#breakNumber').html();
        timer = +sessionTime * 60;
        percent = (1/timer)*100;
        totalPercent = percent;
        for (var i = 1; i < 99999; i++) {
          window.clearInterval(i);
          window.clearTimeout(i);
        }
        start();
      }else if($("#visor").html() == "Break!!" && timer <0){
        $("#visor").html("Session");
        sessionTime = $('#sessionNumber').html();
        timer = +sessionTime * 60;
        percent = (1/timer)*100;
        totalPercent = percent;
        for (var i = 1; i < 99999; i++) {
          window.clearInterval(i);
          window.clearTimeout(i);
        }
        start();
      }

    }, 1000);
  }


};
