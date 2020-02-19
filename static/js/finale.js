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
let wordInput = document.querySelector('.input');

actual_word1.innerHTML = random_word();
let checker = 0;


wordInput.addEventListener('input', (event)=> {
  if (actual_word1.innerHTML === event.target.value.toUpperCase()) {
      event.target.value = '';
      checker = checker + 1;
      actual_word1.innerHTML = random_word();
      let dog = document.querySelector('#second_enemy');
      let dog_div = document.querySelector('#ripdog');
      let rip = "http://0.0.0.0:8000/static/css/rip.png";
      if (dog.src === rip) {
          dog.src = "/static/css/bossdoggo.gif";
          dog_div.id = "enemy2";
          actual_word2.innerHTML = random_word();
      }
      if (checker % 2 === 0) {
          let zombie = document.querySelector('#third_enemy')
          let zombie_div = document.getElementById('zombiehand')
          let zombiehand_src = "http://0.0.0.0:8000/static/css/zombiehand.png"
          if (zombie.src === zombiehand_src) {
              zombie.src = "/static/css/zombie4.gif";
              zombie.id = 'kiszombie'
              zombie_div.id = 'enemy3';
              actual_word3.innerHTML = random_word();
          }
      }
      if (checker === 5) {
          alert('G ----> G');
          window.location.assign("/");
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
    let zombie = document.getElementById('third_enemy');
    zombie_div.id = ('zombiehand');
    zombie.src = "/static/css/zombiehand.png";
    }
  });

  function random_word() {
    let random_index = Math.floor(Math.random() * 112);
    return list[random_index]
  }


 function moveZombie1() {
  let zombie1 = document.getElementById("ripdog");
  let pos = 0;
  let zombie1IsDead = document.getElementById("second_enemy");
  let id = setInterval(frame, 5);
  function frame() {
      if (pos === 1600 ) {
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
function gameOver(){
   alert('GAME OVER')
 }