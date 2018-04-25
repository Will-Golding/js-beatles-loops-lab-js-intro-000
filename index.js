function theBeatlesPlay(musicians, instruments){
  var a = [];
  for(i = 0; i < musicians.length; i++ ){
    a.push(musicians[i] + "plays" + instruments[i]);
  }
  return a;
}