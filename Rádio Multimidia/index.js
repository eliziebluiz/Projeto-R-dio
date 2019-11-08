inicio1();
inicio2();
inicio3();
inicio4();
inicio5();

var canvas;
var canvas2;
var canvasContext;
var canvasContext2;
var width;
var height;
var width2;
var height2;
var analyser;
var analyser2;
var bufferLength;
var dataArray;
var dataArray2;

window.onload = function(){
    var context = AudioContext || webkitAudioContext;
    var audioContext = new context();

    var audio = document.querySelector("#audio");

    audio.onplay=(e)=>{audioContext.resume();}

    canvas = document.querySelector("#canvas");
    canvasContext = canvas.getContext("2d");
        
    canvas2 = document.querySelector("#canvas2");
    canvasContext2 = canvas2.getContext("2d");
	
    width = canvas.width;
    height = canvas.height;
	
    width2 = canvas2.width;
    height2 = canvas2.height;

    var volume = document.querySelector("#volume");

    var balanco = document.querySelector("#balanco");

    var media = audioContext.createMediaElementSource(audio);

    var audioControle = audioContext.createGain();

    var balancoControle = audioContext.createStereoPanner();

    analyser = audioContext.createAnalyser();
	analyser.fftSize = 1024;
	bufferLength = analyser.frequencyBinCount;
	dataArray = new Uint8Array(bufferLength);
	
	analyser2 = audioContext.createAnalyser();
	analyser2.fftSize = 1024;
	bufferLength = analyser2.frequencyBinCount;
	dataArray2 = new Uint8Array(bufferLength);
	
    media.connect(audioControle);

    audioControle.connect(analyser2);

    analyser2.connect(analyser);

    analyser.connect(balancoControle);

    balancoControle.connect(audioContext.destination);

    volume.oninput=function(e){
        audioControle.gain.value=e.target.value;
    }

    balanco.oninput=function(e){
        balancoControle.pan.value=e.target.value;
    }

	requestAnimationFrame(visualize);
	
    requestAnimationFrame(visualize2);
}

function visualize(){
        canvasContext.fillStyle = "black";
        canvasContext.fillRect(0,0,width,height);
        
        analyser.getByteTimeDomainData(dataArray);
        
        canvasContext.lineWidth = 1;
        canvasContext.strokeStyle = "purple"
        
        canvasContext.beginPath();
        
        var sliceWidth = width / bufferLength;
        var x = 0;
        for(var i = 0; i < bufferLength; i++){
            var v = dataArray[i]/255;
            var y = v * height;
            if(i === 0){
                canvasContext.moveTo(x,y);
            }else{
                canvasContext.lineTo(x,y);
            }
            x += sliceWidth;
        }
        canvasContext.stroke();
        requestAnimationFrame(visualize);
    ;}
    
function visualize2(){
        canvasContext2.fillStyle = "black";
        var height2 = canvas2.height;
        var width2 = canvas2.width;
        canvasContext2.fillRect(0,0,width2,height2);
        
        analyser2.getByteFrequencyData(dataArray2);
        
        var x = 0;
        
        var barWidth = width2 / bufferLength;
        for(var i = 0; i < bufferLength; i++){
            var v = dataArray2[i]/255;
            var y = v * (height/2);
            canvasContext2.fillStyle="purple";
            canvasContext2.fillRect(x,height2/2,barWidth,-y);
            canvasContext2.fillRect(x,height2/2,barWidth,y);
            x+=barWidth + 2;
        }
        requestAnimationFrame(visualize2);
}

//Playlist1
function inicio1(){
    var corrente = 0;
    var audio = $("#audio");
    var playlist = $("#playlist1");
    var tracks= playlist.find("li a");
    var len= tracks.length-1;
    audio[0].play();
    playlist.find("a").click(function(e){ 
        e.preventDefault();
        link = $(this);
        corrente = link.parent().index();
        exe(link, audio[0]);
    });
    audio[0].addEventListener("ended", function(e){
        corrente++;
        if(corrente == len){
            corrente = 0;
            link = playlist.find("a")[0];
        }else{
            link = playlist.find("a")[corrente];
        }
        exe($(link), audio[0]);
    });
}

//Playlist2
function inicio2(){
    var corrente = 0;
    var audio = $("#audio");
    var playlist = $("#playlist2");
    var tracks= playlist.find("li a");
    var len= tracks.length-1;
    audio[0].play();

        playlist.find("a").click(function(e){ 
            e.preventDefault();
            link = $(this);
            corrente = link.parent().index();
            exe(link, audio[0]);
        });
        audio[0].addEventListener("ended", function(e){
            corrente++;
            if(corrente == len){
                corrente = 0;
                link = playlist.find("a")[0];
            }else{
                link = playlist.find("a")[corrente];
            }
            exe($(link), audio[0]);
        });
}

//Playlist3
function inicio3(){
    var corrente = 0;
    var audio = $("#audio");
    var playlist = $("#playlist3");
    var tracks= playlist.find("li a");
    var len= tracks.length-1;
    audio[0].play();
        playlist.find("a").click(function(e){ 
            e.preventDefault();
            link = $(this);
            corrente = link.parent().index();
            exe(link, audio[0]);
        });
        audio[0].addEventListener("ended", function(e){
            corrente++;
            if(corrente == len){
                corrente = 0;
                link = playlist.find("a")[0];
            }else{
                link = playlist.find("a")[corrente];
            }
            exe($(link), audio[0]);
        });
}

//Playlist4
function inicio4(){
    var corrente = 0;
    var audio = $("#audio");
    var playlist = $("#playlist4");
    var tracks= playlist.find("li a");
    var len= tracks.length-1;
    audio[0].play();
        playlist.find("a").click(function(e){ 
            e.preventDefault();
            link = $(this);
            corrente = link.parent().index();
            exe(link, audio[0]);
        });
        audio[0].addEventListener("ended", function(e){
            corrente++;
            if(corrente == len){
                corrente = 0;
                link = playlist.find("a")[0];
            }else{
                link = playlist.find("a")[corrente];
            }
            exe($(link), audio[0]);
        });
}

//Playlist5
function inicio5(){
    var corrente = 0;
    var audio = $("#audio");
    var playlist = $("#playlist5");
    var tracks= playlist.find("li a");
    var len= tracks.length-1;
    audio[0].play();
    playlist.find("a").click(function(e){ 
        e.preventDefault();
        link = $(this);
        corrente = link.parent().index();
        exe(link, audio[0]);
    });
    audio[0].addEventListener("ended", function(e){
        corrente++;
        if(corrente == len){
            corrente = 0;
            link = playlist.find("a")[0];
        }else{
            link = playlist.find("a")[corrente];
        }
        exe($(link), audio[0]);
    });
}

function exe(link, player){
    player.src=link.attr("href");
    par=link.parent();
    par.addClass("active").siblings.removeClasss("active");
    player.load();
    player.play();
}

