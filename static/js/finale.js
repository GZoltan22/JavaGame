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
let wordInput = document.querySelector('.input');

actual_word1.innerHTML = random_word();
console.log(actual_word1.innerHTML)
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
      if (checker === 5) {
          alert('G--->G tesó');
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
    enemy.id = ('second_enemy');
    enemy.src = "/static/css/rip.png";
    }
  });


  function random_word() {
    let random_index = Math.floor(Math.random() * 112);
    return list[random_index]
  }
