function theBeatlesPlay(musicians, instruments) {
  var a = [];
  for(i = 0; i < musicians.length; i++ ){
    a.push(musicians[i] + "plays" + instruments[i]);
  }
  return a;
}

function johnLennonFacts(facts) {
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];
  var updatedFacts = [];
  var i = 0;
  while(i< facts.length){
    updatedFacts.push(facts[i] + "!!!")
    i++
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var a = [];
  do {
    a.push("I love the Beatles!")
    n++
  } while(n < 15)
  return a;
}
