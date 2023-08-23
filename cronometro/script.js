window.onload =  function(){
    var segundos = 00;
    var centesimos = 00;

    var appendSeconds = document.getElementById('seconds');
    var appendTens = document.getElementById('tens')

    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var interval;

    buttonStart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function(){
        clearInterval(interval);
    }
    
    buttonReset.onclick = function(){
        clearInterval(interval);
        segundos = "00";
        centesimos = "00";
        appendSeconds.innerHTML = segundos;
        appendTens.innerHTML = centesimos;
    }

    function startTimer(){
        centesimos ++;

        if(centesimos <= 9){
            appendTens.innerHTML = "0" + centesimos; 
        }

        if(centesimos > 9){
            appendTens.innerHTML = centesimos;
        }

        if(centesimos > 99) {
            console.log("seconds");
            segundos++;
            appendSeconds.innerHTML = "0" + segundos;
            centesimos = 0;
            appendTens.innerHTML = "0" + 0;
          }
        
        if(segundos > 9){
            appendSeconds.innerHTML = segundos;
        }
    }

}

    
