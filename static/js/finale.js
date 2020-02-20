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
let wordInput = document.querySelector('.input');

let enemy_divs = document.querySelectorAll('div')
actual_word1.innerHTML = random_word();
let checker = 0;

let fireball_div = document.querySelector('#fireball-do-nothing');
let fireball_gif = document.querySelector('#fireball_no');


wordInput.addEventListener('input', (event)=> {
  if (actual_word1.innerHTML === event.target.value.toUpperCase()) {
      event.target.value = '';
      checker = checker + 1;
      actual_word1.innerHTML = random_word();
      let dog = document.querySelector('#second_enemy');
      let dog_div = document.querySelector('#ripdog');
      let rip = "http://0.0.0.0:8000/static/css/rip.png";
      fireball_gif.id = "fireball_gif";
      fireball_div.id = "fireball-do-thing";
      actual_word4.innerHTML = random_word();
      if (dog.src === rip) {
          dog.src = "/static/css/bossdoggo.gif";
          dog_div.id = "enemy2";
          actual_word2.innerHTML = random_word();
      };
      if (checker / 2 === 1 || checker / 2 === 2) {
          let zombie = document.querySelector('#third_enemy')
          let zombie_div = document.getElementById('zombiehand')
          let zombiehand_src = "http://0.0.0.0:8000/static/css/zombiehand.png"
          if (zombie.src === zombiehand_src) {
              zombie.src = "/static/css/zombie4.gif";
              zombie.id = 'kiszombie'
              zombie_div.id = 'enemy3';
              actual_word3.innerHTML = random_word();
          };
      };
      if (checker === 5) {
          alert('G ----> G');
          window.location.assign("/end");
      }
  }
});

wordInput.addEventListener('input', (event) => {
    if (actual_word2.innerHTML === event.target.value.toUpperCase()) {
      event.target.value = '';
      actual_word2.innerHTML = '';
    let enemy = document.getElementById('second_enemy');
    let enemy_div = document.getElementById('enemy2');
    enemy_div.id = ('ripdog');
    // enemy.id = ('second_enemy');
    enemy.src = "/static/css/rip.png";
    }
  });

wordInput.addEventListener('input', (event) => {
    if (actual_word3.innerHTML === event.target.value.toUpperCase()) {
      event.target.value = '';
      actual_word3.innerHTML = '';
      let zombie_div = document.getElementById('enemy3');
      let zombie = document.getElementById('kiszombie');
      zombie_div.id = ('zombiehand');
      zombie.src = "/static/css/zombiehand.png";
    }
  });

wordInput.addEventListener('input', (event) => {
    if (actual_word4.innerHTML === event.target.value.toUpperCase()) {
      event.target.value = '';
      actual_word4.innerHTML = '';
      let fireball_div_moving = document.querySelector('#fireball-do-thing');
      let fireball_gif_moving = document.querySelector('#fireball_gif');
      fireball_div_moving.id = "fireball-do-nothing";
      fireball_gif_moving.id = "fireball_no";
    }
  });


for (var i = 0; i < enemy_divs.length; i++) {
    enemy_divs[i].addEventListener('animationend', (ev)=>{
      alert('Game Over!')
      window.location.assign("/");
    });
  };


  function random_word() {
    let random_index = Math.floor(Math.random() * 112);
    return list[random_index]
  };

document.querySelector(".input").focus();
document.querySelector(".input").select();