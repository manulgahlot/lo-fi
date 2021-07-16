
var images = ["1.gif", "2.gif", "3.gif", "4.gif"];
  $('.bg-change').css({'background-image': 'url(videos/' + images[Math.floor(Math.random() * images.length)] + ')'});


  $(document).ready(function(){
    $('#typewriteText').typewrite({
        actions: [
            {type: ' Welcome'},
            // {type: '<br>'},
            {delay: 2000},
            {remove: {num: 7, type: 'stepped'}},
            {type: 'Click on the play button to start!'},
            {delay: 1500},
            // {remove: {num: 1, type: 'stepped'}},
            // {select: {from: 14, to: 34}},
            {delay: 1500},
            {remove: {num: 21, type: 'stepped'}},
            {delay: 300},
            {type: 'pause button to stop'},
            // {type: '<br>'},
            // {type: 'It\'s just so easy to setup and use.'}
        ]
    });
});

//
// var elem = document.getElementById("#bg");
//
// $(".fa-arrows-alt").click(function openFullscreen() {
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.webkitRequestFullscreen) { /* Safari */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) { /* IE11 */
//     elem.msRequestFullscreen();
//   }
// });
//

// var study_loFI = new Audio("https://www.youtube.com/watch?v=pLcw3dK1yU0");



  $("#playB").click(function() {
       $("#playB").html(
       $("#playB").html() ==
       '<i onclick="pauseAudio()" class="fa fa-pause" aria-hidden="true"></i>' ?
       '<i onclick="playAudio()" class="fa fa-play" aria-hidden="true"></i>' :
       '<i onclick="pauseAudio()" class="fa fa-pause" aria-hidden="true"></i>');
  });



  var x = document.getElementById("myAudio");

  function playAudio() {
    x.play();
  }

  function pauseAudio() {
    x.pause();
  };


  $(document).on( 'keydown', function ( e ) {
    if ( e.keyCode === 32 ) {
        if (video.paused == true) {
            // Play the video
            x.play();
        }else{
            if(video.play == true){
            x.pause();
            }
        }
    }
});
     x.addEventListener('ended',function(){
    // x.pause();
     x.src = "music2.mp3";
     x.load();
     x.play();
    });



    var image = document.getElementById("bg"), 
    button = document.getElementById("pause");
    
if (image.classList && image && button) {
    button.onclick = function() {
        if (this.value == 'pause') {
            image.classList.add('pause');
            this.value = 'play';
        } else {
            image.classList.remove('pause');
            this.value = 'pause';
        }
    };
}

var click_sound = new Audio("click.mp3")
var bell = new Audio("bell.mp3");

function toast() {
  $('toastBtn').click(
    $('.toast').toast('show')
  );
}


var start_minutes = 25;
var start_seconds = "00";

function template() {
  document.getElementById('minutes').innerHTML = start_minutes;
  document.getElementById('seconds').innerHTML = start_seconds;
}

$("#playButton").click (function() {
  $("#playButton").animate({opacity: 0.1}).slideUp();
});

function timerStart() {
    start_minutes = 24;
    start_seconds = 59;

    click_sound.play();

  document.getElementById('minutes').innerHTML = start_minutes;
  document.getElementById('seconds').innerHTML = start_seconds;


  
  
  var minute_interval = setInterval(minuteTimer, 60000);
  var second_interval = setInterval(secondTimer, 1000);
  // document.getElementById('playButton').disabled = true;
  

  function minuteTimer() {
    start_minutes = start_minutes - 1;
    document.getElementById('minutes').innerHTML = start_minutes;
  };

  function secondTimer() {
    start_seconds = start_seconds - 1;
    document.getElementById('seconds').innerHTML = start_seconds;
    
    if(start_seconds <= 0) {
      if(start_minutes <= 0) {
        // $("#playButton").slideDown();
        clearInterval(minute_interval);
        clearInterval(second_interval);
        $('.modal').modal('show');
        // document.getElementById('mainButton').replaceWith(<a  onclick="index.html" id="playButton" class="btn btn-outline-success"><i class="fa fa-repeat" aria-hidden="true">Repeat</i></a>)
        bell.play();
      }
      start_seconds = 60;
  }
  };
   
};

function clear() {
  document.getElementById("toastBtn").innerHTML = "";
}

$(window).resize(function(){
  if(window.innerWidth < 600) {
      $("#toastBtn").clear();
  }
});
     // 
    // bedtime after a coffee by Barradeen | https://soundcloud.com/barradeen/
    // Creative Commons Attribution-ShareAlike 3.0 Unported
    // https://creativecommons.org/licenses/by-sa/3.0/deed.en_US
    // Music promoted by https://www.chosic.com/
