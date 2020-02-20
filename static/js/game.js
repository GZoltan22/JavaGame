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
let enemy_divs = document.querySelectorAll('div');
console.log(enemy_divs)
let wordInput = document.querySelector('.input');


actual_word1.innerHTML = random_word();
actual_word2.innerHTML = random_word();
actual_word3.innerHTML = random_word();


wordInput.addEventListener('input', (event)=> {
  if (actual_word1.innerHTML === event.target.value.toUpperCase() || event.target.value === 'killall') {
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

  wordInput.addEventListener('input', (event) => {
    if (actual_word2.innerHTML === event.target.value.toUpperCase() || event.target.value === 'killall') {
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
    if (actual_word3.innerHTML === event.target.value.toUpperCase() || event.target.value === 'killall') {
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
  for (var i = 0; i < enemy_divs.length; i++) {
    enemy_divs[i].addEventListener('animationend', (ev)=>{
      alert('Game Over!')
      window.location.assign("/");
    });
  };

  function win_check() {
    let rips = document.querySelectorAll('#dead');
    console.log(rips);
    if (rips.length / 2 === 3) {
      alert('You may proceed to the next level!');
      window.location.assign("/game_medium");
    }
  }

  function random_word() {
    let random_index = Math.floor(Math.random() * 112);
    return list[random_index]
  }


document.getElementById("player").focus();
document.getElementById("player").select();

 function moveEnemy() {
  moveZombie1();
  setTimeout(function () {
    moveZombie2();
  },2000)
  setTimeout(function () {
    moveZombie3();
  },4000)
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
 function gameOver(){
   alert('GAME OVER')
 }