let doggo = document.querySelector('.Dogmenu');
let think = document.querySelector(".tbubble");

think.style.visibility = 'hidden';

doggo.addEventListener('click', (event)=>{
    console.log('kutya');
    think.style.visibility = 'visible'

});

