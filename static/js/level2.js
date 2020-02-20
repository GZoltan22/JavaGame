const list = ['ACCOUNT','ACCURATE','ACRES','ACROSS','ACT','ACTION','ACTIVE','ACTIVITY',
  'ACTUAL','ACTUALLY','ADD','ADDITION','ADDITIONAL','ADJECTIVE','ADULT','ADVENTURE',
  'ADVICE','AFFECT','AFRAID','AFTER','AFTERNOON','AGAIN','AGAINST','AGE',
  'AGO','AGREE','AHEAD','AID','AIR','AIRPLANE','ALIKE','ALIVE',
  'ALL','ALLOW','ALMOST','ALONE','ALONG','ALOUD','ALPHABET','ALREADY',
  'ALSO','ALTHOUGH','AM','AMONG','AMOUNT','ANCIENT','ANGLE','ANGRY',
  'ANIMAL','ANNOUNCED','ANOTHER','ANSWER','ANTS','ANY','ANYBODY','ANYONE',
  'ANYTHING','ANYWAY','ANYWHERE','APART','APARTMENT','APPEARANCE','APPLE','APPLIED',
  'APPROPRIATE','ARE','AREA','ARM','ARMY','AROUND','ARRANGE','ARRANGEMENT',
  'ARRIVE','ARROW','ART','ARTICLE','AS','ASIDE','ASK','ASLEEP',
  'AT','ATE','ATMOSPHERE','ATOM','ATOMIC','ATTACHED','ATTACK','ATTEMPT',
  'ATTENTION','AUDIENCE','AUTHOR','AUTOMOBILE','AVAILABLE','AVERAGE','AVOID','AWARE',
  'AWAY','BABY','BACK','BAD','BADLY','BAG','BALANCE','BALL',
  'BALLOON','BAND','BANK','BAR','BARE','BARK','BARN','BASE'];

let actual_word1 = document.querySelector('.words1');
let actual_word2 = document.querySelector('.words2');
let actual_word3 = document.querySelector('.words3');
let actual_word4 = document.querySelector('.words4');
let actual_word5 = document.querySelector('.words5');

let wordInput = document.querySelector('.input');
let enemy_divs = document.querySelectorAll('div');

actual_word1.innerHTML = random_word();
actual_word2.innerHTML = random_word();
actual_word3.innerHTML = random_word();
actual_word4.innerHTML = random_word();
actual_word5.innerHTML = random_word();

wordInput.addEventListener('input', (event)=> {
  if (actual_word1.innerHTML === event.target.value.toUpperCase()) {
    event.target.value = '';
    actual_word1.innerHTML = '';
    let enemy = document.getElementById('first_enemy');
    let enemy_div = document.getElementById('enemy1');
    enemy_div.id = ('dead');
    enemy.id = ('dead');
    enemy.src = "/static/css/rip.png";
    win_check()
  }
});
document.querySelector(".input").focus();
document.querySelector(".input").select();
  wordInput.addEventListener('input', (event) => {
    if (actual_word2.innerHTML === event.target.value.toUpperCase()) {
      event.target.value = '';
    actual_word2.innerHTML = '';
    let enemy = document.getElementById('second_enemy');
    let enemy_div = document.getElementById('enemy2');
    enemy_div.id = ('dead');
    enemy.id = ('dead');
    enemy.src = "/static/css/rip.png";
    win_check()
    }
  });

  wordInput.addEventListener('input', (event) => {
    if (actual_word3.innerHTML === event.target.value.toUpperCase()) {
      event.target.value = '';
    actual_word3.innerHTML = '';
    let enemy = document.getElementById('third_enemy');
    let enemy_div = document.getElementById('enemy3');
    enemy_div.id = ('dead');
    enemy.id = ('dead');
    enemy.src = "/static/css/rip.png";
    win_check()
    }
  });

  wordInput.addEventListener('input', (event) => {
    if (actual_word4.innerHTML === event.target.value.toUpperCase()) {
      event.target.value = '';
    actual_word4.innerHTML = '';
    let enemy = document.getElementById('fourth_enemy');
    let enemy_div = document.getElementById('enemy4');
    enemy_div.id = ('dead');
    enemy.id = ('dead');
    enemy.src = "/static/css/rip.png";
    win_check()
    }
  });

  wordInput.addEventListener('input', (event) => {
    if (actual_word5.innerHTML === event.target.value.toUpperCase()) {
      event.target.value = '';
    actual_word5.innerHTML = '';
    let enemy = document.getElementById('fifth_enemy');
    let enemy_div = document.getElementById('enemy5');
    enemy_div.id = ('dead');
    enemy.id = ('dead');
    enemy.src = "/static/css/rip.png";
    win_check()
    }
  });

 for (var i = 0; i < enemy_divs.length; i++) {
    enemy_divs[i].addEventListener('animationend', (ev)=>{
      alert('Game Over!')
      window.location.assign("/");
    });
  };

  function win_check() {
    let rips = document.querySelectorAll('#dead');
    console.log(rips);
    if (rips.length / 2 === 5) {
      alert('Beware Champion, the Final Boss is coming!!');
      window.location.assign("/final_level");
    }
  }

  function random_word() {
    let random_index = Math.floor(Math.random() * 112);
    return list[random_index]
  }

  function moveEnemy() {
  moveZombie1();
  setTimeout(function () {
    moveZombie2();
  },2000)
  setTimeout(function () {
    moveZombie3();
  },4000)
   setTimeout(function () {
    moveZombie4();
  },6000)
    setTimeout(function () {
    moveZombie5();
  },7000)
 }


 function moveZombie1() {
  let zombie1 = document.getElementById("enemy1");
  let pos = 0;
  let zombie1IsDead = document.getElementById("first_enemy");
  let id = setInterval(frame, 5);
  function frame() {
      if (pos === 1600) {
        gameOver();
      }
      else if (zombie1IsDead.id === ('dead')) {
        clearInterval(frame);
      }
      else {
        pos = pos + 2;
        zombie1.style.right = pos + "px";
      }
    }
 }

 function moveZombie2() {
    let zombie2 = document.getElementById("enemy2");
    let zombie2IsDead = document.getElementById("second_enemy");
    let pos = 0;
    let id = setInterval(frame,5);
    function frame() {
      if (pos === 1600) {
        gameOver();
      }
      else if (zombie2IsDead.id === ('dead')) {
        clearInterval(frame);
      }
      else {
        pos = pos + 1;
        zombie2.style.right = pos + "px";
      }
    }
 }
 function moveZombie3() {
    let zombie3 = document.getElementById("enemy3");
    let zombie3IsDead = document.getElementById("third_enemy");
    let pos = 0;
    let id = setInterval(frame,5);
    function frame() {
      if (pos === 1600) {
        gameOver();
      }
      else if (zombie3IsDead.id === ('dead')) {
        clearInterval(frame);
      }
      else {
        pos = pos + 1;
        zombie3.style.right = pos + "px";
      }
    }
 }
 function moveZombie4() {
    let zombie4 = document.getElementById("enemy4");
    let zombie4IsDead = document.getElementById("fourth_enemy");
    let pos = 0;
    let id = setInterval(frame,5);
    function frame() {
      if (pos === 1600) {
        gameOver();
      }
      else if (zombie4IsDead.id === ('dead')) {
        clearInterval(frame);
      }
      else {
        pos = pos + 1;
        zombie4.style.right = pos + "px";
      }
    }
 }
 function moveZombie5() {
    let zombie5 = document.getElementById("enemy5");
    let zombie5IsDead = document.getElementById("fifth_enemy");
    let pos = 0;
    let id = setInterval(frame,5);
    function frame() {
      if (pos === 1600) {
        gameOver();
      }
      else if (zombie5IsDead.id === ('dead')) {
        clearInterval(frame);
      }
      else {
        pos = pos + 1;
        zombie5.style.right = pos + "px";
      }
    }
 }
 function gameOver(){
   alert('GAME OVER')
 }