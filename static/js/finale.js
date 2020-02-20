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
  'BALLOON','BAND','BANK','BAR','BARE','BARK','BARN','BASE','BEAN',
  'BEAR','BEAT','BEAUTIFUL','BEAUTY','BECAME','BECAUSE','BECOME','BECOMING',
  'BEE','BEEN','BEFORE','BEGAN','BEGINNING','BEGUN','BEHAVIOR','BEHIND',
  'BEING','BELIEVED','BELL','BELONG','BELOW','BELT','BEND','BENEATH',
  'BENT','BESIDE','BEST','BET','BETTER','BETWEEN','BEYOND','BICYCLE',
  'BIGGER','BIGGEST','BILL','BIRDS','BIRTH','BIRTHDAY','BIT','BITE',
  'BLACK','BLANK','BLANKET','BLEW','BLIND','BLOCK','BLOOD','BLOW',
  'BLUE','BOARD','BOAT','BODY','BONE','BOOK','BORDER','BORN',
  'BOTH','BOTTLE','BOTTOM','BOUND','BOW','BOWL','BOX','BOY',
  'BRAIN','BRANCH','BRASS','BRAVE','BREAD','BREAK','BREAKFAST','BREATH',
  'BREATHE','BREATHING','BREEZE','BRICK','BRIDGE','BRIEF','BRIGHT','BRING',
  'BROAD','BROKE','BROKEN','BROTHER','BROUGHT','BROWN','BRUSH','BUFFALO',
  'BUILD','BUILDING','BUILT','BURIED','BURN','BURST','BUS','BUSH',
  'BUSINESS','BUSY','BUT','BUTTER','BUY','BY','CABIN','CAGE',
  'CAKE','CALL','CALM','CAME','CAMERA','CAMP','CAN','CANAL',
  'CANNOT','CAP','CAPITAL','CAPTAIN','CAPTURED','CAR','CARBON','CARD',
  'CARE','CAREFUL','CAREFULLY','CARRIED','CARRY','CASE','CAST','CASTLE',
  'CAT','CATCH','CATTLE','CAUGHT','CAUSE','CAVE','CELL','CENT',
  'CENTER','CENTRAL','CENTURY','CERTAIN','CERTAINLY','CHAIN','CHAIR','CHAMBER',
  'CHANCE','CHANGE','CHANGING','CHAPTER','CHARACTER','CHARACTERISTIC','CHARGE','CHART',
  'CHECK','CHEESE','CHEMICAL','CHEST','CHICKEN','CHIEF','CHILD','CHILDREN',
  'CHOICE','CHOOSE','CHOSE','CHOSEN','CHURCH','CIRCLE','CIRCUS','CITIZEN',
  'CITY','CLASS','CLASSROOM','CLAWS','CLAY','CLEAN','CLEAR','CLEARLY',
  'CLIMATE','CLIMB','CLOCK','CLOSE', 'CLOSET', 'CLOSELY','CLOSER','CLOTH','CLOTHES',
  'CLOTHING','CLOUD','CLUB','COACH','COAL','COAST','COAT','CODEPEN','COFFEE',
  'COLD','COLLECT','COLLEGE','COLONY','COLOR','COLUMN','COMBINATION','COMBINE',
  'COME','COMFORTABLE','COMING','COMMAND','COMMON','COMMUNITY','COMPANY','COMPARE',
  'COMPASS','COMPLETE','COMPLETELY','COMPLEX','COMPOSED','COMPOSITION','COMPOUND','CONCERNED',
  'CONDITION','CONGRESS','CONNECTED','CONSIDER','CONSIST','CONSONANT','CONSTANTLY','CONSTRUCTION',
  'CONTAIN','CONTINENT','CONTINUED','CONTRAST','CONTROL','CONVERSATION','COOK','COOKIES', 'EDGE','EDUCATION','EFFECT','EFFORT','EGG','EIGHT','EITHER','ELECTRIC',
  'ELECTRICITY','ELEMENT','ELEPHANT','ELEVEN','ELSE','EMPTY','END','ENEMY',
  'ENERGY','ENGINE','ENGINEER','ENJOY','ENOUGH','ENTER','ENTIRE','ENTIRELY',
  'ENVIRONMENT','EQUAL','EQUALLY','EQUATOR','EQUIPMENT','ESCAPE','ESPECIALLY','ESSENTIAL',
  'ESTABLISH','EVEN','EVENING','EVENT','EVENTUALLY','EVER','EVERY','EVERYBODY',
  'EVERYONE','EVERYTHING','EVERYWHERE','EVIDENCE','EXACT','EXACTLY','EXAMINE','EXAMPLE',
  'EXCELLENT','EXCEPT','EXCHANGE','EXCITED','EXCITEMENT','EXCITING','EXCLAIMED','EXERCISE',
  'EXIST','EXPECT','EXPERIENCE','EXPERIMENT','EXPLAIN','EXPLANATION','EXPLORE','EXPRESS',
  'EXPRESSION','EXTRA','EYE','FACE','FACING','FACT','FACTOR','FACTORY',
  'FAILED','FAIR','FAIRLY','FALL','FALLEN','FAMILIAR','FAMILY','FAMOUS',
  'FAR','FARM','FARMER','FARTHER','FAST','FASTENED','FASTER','FAT',
  'FATHER','FAVORITE','FEAR','FEATHERS','FEATURE','FED','FEED','FEEL',
  'FEET','FELL','FELLOW','FELT','FENCE','FEW','FEWER','FIELD',
  'FIERCE','FIFTEEN','FIFTH','FIFTY','FIGHT','FIGHTING','FIGURE','FILL',
  'FILM','FINAL','FINALLY','FIND','FINE','FINEST','FINGER','FINISH',
  'FIRE','FIREPLACE','FIRM','FIRST','FISH','FIVE','FIX','FLAG',
  'FLAME','FLAT','FLEW','FLIES','FLIGHT','FLOATING','FLOOR','FLOW',
  'FLOWER','FLY','FOG','FOLKS','FOLLOW','FOOD','FOOT','FOOTBALL',
  'FOR','FORCE','FOREIGN','FOREST','FORGET','FORGOT','FORGOTTEN','FORM',
  'FORMER','FORT','FORTH','FORTY','FORWARD','FOUGHT','FOUND','FOUR',
  'FOURTH','FOX','FRAME','FREE','FREEDOM','FREQUENTLY','FRESH','FRIEND',
  'FRIENDLY','FRIGHTEN','FROG','FROM','FRONT','FROZEN','FRUIT','FUEL',
  'FULL','FULLY','FUN','FUNCTION','FUNNY','FUR','FURNITURE','FURTHER',
  'FUTURE','GAIN','GAME','GARAGE','GARDEN','GAS','GASOLINE','GATE','HELPFUL','HER','HERD','HERE','HERSELF','HIDDEN','HIDE','HIGH',
  'HIGHER','HIGHEST','HIGHWAY','HILL','HIM','HIMSELF','HIS','HISTORY',
  'HIT','HOLD','HOLE','HOLLOW','HOME','HONOR','HOPE','HORN',
  'HORSE','HOSPITAL','HOT','HOUR','HOUSE','HOW','HOWEVER','HUGE',
  'HUMAN','HUNDRED','HUNG','HUNGRY','HUNT','HUNTER','HURRIED','HURRY',
  'HURT','HUSBAND','ICE','IDEA','IDENTITY','IF','ILL','IMAGE',
  'IMAGINE','IMMEDIATELY','IMPORTANCE','IMPORTANT','IMPOSSIBLE','IMPROVE','IN','INCH',
  'INCLUDE','INCLUDING','INCOME','INCREASE','INDEED','INDEPENDENT','INDICATE','INDIVIDUAL',
  'INDUSTRIAL','INDUSTRY','INFLUENCE','INFORMATION','INSIDE','INSTANCE','INSTANT','INSTEAD',
  'INSTRUMENT','INTEREST','INTERIOR','INTO','INTRODUCED','INVENTED','INVOLVED','IRON',
  'IS','ISLAND','IT','ITS','ITSELF','JACK','JAR','JET',
  'JOB','JOIN','JOINED','JOURNEY','JOY','JUDGE','JUMP','JUNGLE',
  'JUST','KEEP','KEPT','KEY','KIDS','KILL','KIND','KITCHEN',
  'KNEW','KNIFE','KNOW','KNOWLEDGE','KNOWN','LABEL','LABOR','LACK',
  'LADY','LAID','LAKE','LAMP','LAND','LANGUAGE','LARGE','LARGER',
  'LARGEST','LAST','LATE','LATER','LAUGH','LAW','LAY','LAYERS',
  'LEAD','LEADER','LEAF','LEARN','LEAST','LEATHER','LEAVE','LEAVING',
  'LED','LEFT','LEG','LENGTH','LESSON','LET','LETTER','LEVEL',
  'LIBRARY','LIE','LIFE','LIFT','LIGHT','LIKE','LIKELY','LIMITED',
  'LINE','LION','LIPS','LIQUID','LIST','LISTEN','LITTLE','LIVE',
  'LIVING','LOAD','LOCAL','LOCATE','LOCATION','LOG','LONELY','LONG',
  'LONGER','LOOK','LOOSE','LOSE','LOSS','LOST','LOT','LOUD',
  'LOVE','LOVELY','LOW','LOWER','LUCK','LUCKY','LUNCH','LUNGS',
  'LYING','MACHINE','MACHINERY','MAD','MADE','MAGIC','MAGNET','MAIL',
  'MAIN','MAINLY','MAJOR','MAKE','MAKING','MAN','MANAGED','MANNER',
  'MANUFACTURING','MANY','MAP','MARK','MARKET','MARRIED','MASS','MASSAGE',
  'MASTER','MATERIAL','MATHEMATICS','MATTER','MAY','MAYBE','ME','MEAL',
  'MEAN','MEANS','MEANT','MEASURE','MEAT','MEDICINE','MEET','MELTED',
  'MEMBER','MEMORY','MEN','MENTAL','MERELY','MET','METAL','METHOD', 'MYSTERIOUS','NAILS','NAME','NATION','NATIONAL','NATIVE','NATURAL','NATURALLY',
  'NATURE','NEAR','NEARBY','NEARER','NEAREST','NEARLY','NECESSARY','NECK',
  'NEEDED','NEEDLE','NEEDS','NEGATIVE','NEIGHBOR','NEIGHBORHOOD','NERVOUS','NEST',
  'NEVER','NEW','NEWS','NEWSPAPER','NEXT','NICE','NIGHT','NINE',
  'NO','NOBODY','NODDED','NOISE','NONE','NOON','NOR','NORTH',
  'NOSE','NOT','NOTE','NOTED','NOTHING','NOTICE','NOUN','NOW',
  'NUMBER','NUMERAL','NUTS','OBJECT','OBSERVE','OBTAIN','OCCASIONALLY','OCCUR',
  'OCEAN','OF','OFF','OFFER','OFFICE','OFFICER','OFFICIAL','OIL',
  'OLD','OLDER','OLDEST','ON','ONCE','ONE','ONLY','ONTO',
  'OPEN','OPERATION','OPINION','OPPORTUNITY','OPPOSITE','OR','ORANGE','ORBIT',
  'ORDER','ORDINARY','ORGANIZATION','ORGANIZED','ORIGIN','ORIGINAL','OTHER','OUGHT',
  'OUR','OURSELVES','OUT','OUTER','OUTLINE','OUTSIDE','OVER','OWN',
  'OWNER','OXYGEN','PACK','PACKAGE','PAGE','PAID','PAIN','PAINT',
  'PAIR','PALACE','PALE','PAN','PAPER','PARAGRAPH','PARALLEL','PARENT',
  'PARK','PART','PARTICLES','PARTICULAR','PARTICULARLY','PARTLY','PARTS','PARTY',
  'PASS','PASSAGE','PAST','PATH','PATTERN','PAY','PEACE','PEN',
  'PENCIL','PEOPLE','PER','PERCENT','PERFECT','PERFECTLY','PERHAPS','PERIOD',
  'PERSON','PERSONAL','PET','PHRASE','PHYSICAL','PIANO','PICK','PICTURE',
  'PICTURED','PIE','PIECE','PIG','PILE','PILOT','PINE','PINK',
  'PIPE','PITCH','PLACE','PLAIN','PLAN','PLANE','PLANET','PLANNED',
  'PLANNING','PLANT','PLASTIC','PLATE','PLATES','PLAY','PLEASANT','PLEASE',
  'PLEASURE','PLENTY','PLURAL','PLUS','POCKET','POEM','POET','POETRY',
  'POINT','POLE','POLICE','POLICEMAN','POLITICAL','POND','PONY','POOL',
  'POOR','POPULAR','POPULATION','PORCH','PORT','POSITION','POSITIVE','POSSIBLE',
  'POSSIBLY','POST','POT','POTATOES','POUND','POUR','POWDER','POWER',
  'POWERFUL','PRACTICAL','PRACTICE','PREPARE','PRESENT','PRESIDENT','PRESS','PRESSURE',
  'PRETTY','PREVENT','PREVIOUS','PRICE','PRIDE','PRIMITIVE','PRINCIPAL','PRINCIPLE',
  'PRINTED','PRIVATE','PRIZE','PROBABLY','PROBLEM','PROCESS','PRODUCE','PRODUCT',
  'PRODUCTION','PROGRAM','PROGRESS','PROMISED','PROPER','PROPERLY','PROPERTY','PROTECTION',
  'PROUD','PROVE','PROVIDE','PUBLIC','PULL','PUPIL','PURE','PURPLE',
  'PURPOSE','PUSH','PUT','PUTTING','QUARTER','QUEEN','QUESTION','QUICK',
  'QUICKLY','QUIET','QUIETLY','QUITE','RABBIT','RACE','RADIO','RAILROAD',
  'RAIN','RAISE','RAN','RANCH','RANGE','RAPIDLY','RATE','RATHER',
  'RAW','RAYS','REACH','READ','READER','READY','REAL','REALIZE',
  'REAR','REASON','RECALL','RECEIVE','RECENT','RECENTLY','RECOGNIZE','RECORD',
  'RED','REFER','REFUSED','REGION','REGULAR','RELATED','RELATIONSHIP','RELIGIOUS',
  'REMAIN','REMARKABLE','REMEMBER','REMOVE','REPEAT','REPLACE','REPLIED','REPORT',
  'REPRESENT','REQUIRE','RESEARCH','RESPECT','REST','RESULT','RETURN','REVIEW',
  'RHYME','RHYTHM','RICE','RICH','RIDE','RIDING','RIGHT','RING',
  'RISE','RISING','RIVER','ROAD','ROAR','ROCK','ROCKET','ROCKY',
  'ROD','ROLL','ROOF','ROOM','ROOT','ROPE','ROSE','ROUGH',
  'ROUND','ROUTE','ROW','RUBBED','RUBBER','RULE','RULER','RUN',
  'RUNNING','RUSH','SAD','SADDLE','SAFE','SAFETY','SAID','SAIL','TRACK','TRADE','TRAFFIC','TRAIL','TRAIN','TRANSPORTATION','TRAP','TRAVEL',
  'TREATED','TREE','TRIANGLE','TRIBE','TRICK','TRIED','TRIP','TROOPS',
  'TROPICAL','TROUBLE','TRUCK','TRUNK','TRUTH','TRY','TUBE','TUNE',
  'TURN','TWELVE','TWENTY','TWICE','TWO','TYPE','TYPICAL','UNCLE',
  'UNDER','UNDERLINE','UNDERSTANDING','UNHAPPY','UNION','UNIT','UNIVERSE','UNKNOWN',
  'UNLESS','UNTIL','UNUSUAL','UP','UPON','UPPER','UPWARD','US',
  'USE','USEFUL','USING','USUAL','USUALLY','VALLEY','VALUABLE','VALUE',
  'VAPOR','VARIETY','VARIOUS','VAST','VEGETABLE','VERB','VERTICAL','VERY',
  'VESSELS','VICTORY','VIEW','VILLAGE','VISIT','VISITOR','VOICE','VOLUME',
  'VOTE','VOWEL','VOYAGE','WAGON','WAIT','WALK','WALL','WANT',
  'WAR','WARM','WARN','WAS','WASH','WASTE','WATCH','WATER',
  'WAVE','WAY','WE','WEAK','WEALTH','WEAR','WEATHER','WEEK',
  'WEIGH','WEIGHT','WELCOME','WELL','WENT','WERE','WEST','WESTERN',
  'WET','WHALE','WHAT','WHATEVER','WHEAT','WHEEL','WHEN','WHENEVER',
  'WHERE','WHEREVER','WHETHER','WHICH','WHILE','WHISPERED','WHISTLE','WHITE',
  'WHO','WHOLE','WHOM','WHOSE','WHY','WIDE','WIDELY','WIFE',
  'WILD','WILL','WILLING','WIN','WIND','WINDOW','WING','WINTER',
  'WIRE','WISE','WISH','WITH','WITHIN','WITHOUT','WOLF','WOMEN',
  'WON','WONDER','WONDERFUL','WOOD','WOODEN','WOOL','WORD','WORE',
  'WORK','WORKER','WORLD','WORRIED','WORRY','WORSE','WORTH','WOULD',
  'WRAPPED','WRITE','WRITER','WRITING','WRITTEN','WRONG','WROTE','YARD',
  'YEAR','YELLOW','YES','YESTERDAY','YET','YOU','YOUNG','YOUNGER',
  'YOUR','YOURSELF','YOUTH','ZERO','ZOO'];

console.log(list.length())

let actual_word1 = document.querySelector('.words1');
let actual_word2 = document.querySelector('.words2');
let actual_word3 = document.querySelector('.words3');
let actual_word4 = document.querySelector('.words4');
let wordInput = document.querySelector('.input');

let enemy_divs = document.querySelectorAll('div');
actual_word1.innerHTML = random_word();
let checker = 0;

let fireball_div = document.querySelector('#fireball-do-nothing');
let fireball_gif = document.querySelector('#fireball_no');
let full_globe = document.querySelector('full_health');
let half_globe = document.querySelector('half_health');
let empty = document.querySelector('died');

let finish_him = new Audio('/static/css/finish_him.mp3');
let audio = new Audio('/static/css/Evil_laugh_sound_effect.mp3');

wordInput.addEventListener('input', (event)=> {
  if (actual_word1.innerHTML === event.target.value.toUpperCase()) {
      event.target.value = '';
      checker = checker + 1;
      actual_word1.innerHTML = random_word();
      let dog = document.querySelector('#second_enemy');
      let dog_div = document.querySelector('#ripdog');
      let rip = "http://0.0.0.0:8000/static/css/rip.png";
      // fireball_gif.id = "fireball_gif";
      // fireball_div.id = "fireball-do-thing";
      // actual_word4.innerHTML = random_word();
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
      if (checker === 4) {
      finish_him.play();
      }

      if (checker === 5) {
          alert('You can rest now, champion!');
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

half_globe.style.visibility = 'hidden';
empty.style.visibility = 'hidden';

let health_checker = 0;

for (var i = 0; i < enemy_divs.length; i++) {
    enemy_divs[i].addEventListener('animationend', (ev)=>{
    audio.play();
      alert('Game Over!');
      window.location.assign("/");
        health_checker++;
      if (health_checker === 1) {
          full_globe.style.visibility = 'hidden';
          half_globe.style.visibility = 'visible';
      }
      if (health_checker === 2) {
          half_globe.style.visibility = 'hidden';
          empty.style.visibility = 'visible';
          alert('Game Over!');
          window.location.assign("/");
      }
    });
  }


  function random_word() {
    let random_index = Math.floor(Math.random() * 1296);
    return list[random_index]
  };

setInterval(function fire(){
    fireball_gif.id = "fireball_gif";
    fireball_div.id = "fireball-do-thing";
    actual_word4.innerHTML = random_word();
    }, 6000);

document.querySelector(".input").focus();
document.querySelector(".input").select();