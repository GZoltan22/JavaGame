let doggo = document.querySelector('.Dogmenu');
let think = document.querySelector(".tbubble");

think.style.visibility = 'hidden';

doggo.addEventListener('click', (event)=>{
    console.log('kutya');
    think.style.visibility = 'visible';
    setTimeout(function(){ think.style.visibility = 'hidden' }, 3000);

});

var barking = document.getElementById("myAudio");
function playaudio() {
    console.log('barking');
    barking.play();
}

