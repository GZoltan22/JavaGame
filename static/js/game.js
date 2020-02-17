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
actual_word2.innerHTML = random_word();
actual_word3.innerHTML = random_word();


wordInput.addEventListener('input', (event)=> {
  if (actual_word1.innerHTML === event.target.value.toUpperCase()) {
    console.log('kutya');
    event.target.value = '';
    actual_word1.innerHTML = random_word();
    random_word()
  }
});

  wordInput.addEventListener('input', (event) => {
    if (actual_word2.innerHTML === event.target.value.toUpperCase()) {
      console.log('kutya');
      event.target.value = '';
      actual_word2.innerHTML = random_word()
    }
  });

  wordInput.addEventListener('input', (event) => {
    if (actual_word3.innerHTML === event.target.value.toUpperCase()) {
      console.log('kutya');
      event.target.value = '';
      actual_word2.innerHTML = random_word()
    }
  });


  function random_word() {
    let random_index = Math.floor(Math.random() * 112);
    let chosen_word = list[random_index];
    return chosen_word;
  }

