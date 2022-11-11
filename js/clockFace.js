function colorClock(){

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hexColor = '#' + hours + minutes + seconds;
    var color1 ='#' + seconds + minutes + seconds;
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }
    
    var clockFace = hours + ':' + minutes + ':' + seconds;
    
    document.getElementById('clock').innerHTML = clockFace;
    document.body.style.backgroundColor = hexColor;
    document.getElementById('clock').style.backgroundColor=color1;
    document.getElementById('clock').style.color=hexColor;
    
      setTimeout(function() {
      colorClock();
    }, 1000);
    
    }
    
    colorClock();