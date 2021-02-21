function eyetoggle(){
  if ($("#password-input").attr("type") == "password") {
    $("#password-input").attr("type", "text");
    document.getElementById('eyes').style.color = 'black';
  } else {
    $("#password-input").attr("type", "password");
    document.getElementById('eyes').style.color = 'lightgrey';
  }
}

// jeffownslinda
function unlock(){
  if(document.getElementById('password-input').value == 'jeffandlinda'){
    document.getElementById('lock-page').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.getElementById('navheader').style.display = 'flex';
    timeFunction();
    shuffle(quoteSource).slice();
    shuffleQuote();
  }else{
    alert('Wrong Password babe, go ask your bf...');
  }
}

function chooseHome(){
  document.getElementById('home').style.display = 'block';
  document.getElementById('page1').style.display = 'none';
  document.getElementById('time').style.display = 'none';

  document.getElementById("btnhome").classList.add("active");
  document.getElementById("btnquiz").classList.remove("active");
  document.getElementById("btntime").classList.remove("active");
}

function choosePage1(){
  document.getElementById('home').style.display = 'none';
  document.getElementById('page1').style.display = 'block';
  document.getElementById('time').style.display = 'none';

  document.getElementById("btnhome").classList.remove("active");
  document.getElementById("btnquiz").classList.add("active");
  document.getElementById("btntime").classList.remove("active");
}

function chooseTime(){
  document.getElementById('home').style.display = 'none';
  document.getElementById('page1').style.display = 'none';
  document.getElementById('time').style.display = 'block';

  document.getElementById("btnhome").classList.remove("active");
  document.getElementById("btnquiz").classList.remove("active");
  document.getElementById("btntime").classList.add("active");

  document.getElementById('container1').style.display = 'none';
  document.getElementById('container2').style.display = 'none';
  document.getElementById('container3').style.display = 'none';

  document.getElementById('container4').style.display = 'none';
  document.getElementById('container5').style.display = 'none';
  document.getElementById('container6').style.display = 'none';

  document.getElementById('container7').style.display = 'none';
  document.getElementById('container8').style.display = 'none';
  document.getElementById('container9').style.display = 'none';

  document.getElementById('container10').style.display = 'none';
  document.getElementById('container11').style.display = 'none';
  document.getElementById('container12').style.display = 'none';

  document.getElementById('container13').style.display = 'none';
  document.getElementById('container14').style.display = 'none';
  document.getElementById('container15').style.display = 'none';

  document.getElementById('container16').style.display = 'none';
  document.getElementById('container17').style.display = 'none';
  document.getElementById('container18').style.display = 'none';

  document.getElementById('container19').style.display = 'none';
  document.getElementById('container20').style.display = 'none';
  document.getElementById('container21').style.display = 'none';

  document.getElementById('container22').style.display = 'none';
  document.getElementById('container23').style.display = 'none';
  document.getElementById('container24').style.display = 'none';

  document.getElementById('container25').style.display = 'none';
  document.getElementById('container26').style.display = 'none';
  document.getElementById('container27').style.display = 'none';

  document.getElementById('container28').style.display = 'none';
  document.getElementById('container29').style.display = 'none';
  document.getElementById('container30').style.display = 'none';

  document.getElementById('container31').style.display = 'none';
  document.getElementById('container32').style.display = 'none';
  document.getElementById('container33').style.display = 'none';

  document.getElementById('container34').style.display = 'none';
  document.getElementById('container35').style.display = 'none';
  document.getElementById('container36').style.display = 'none';

  document.getElementById('container37').style.display = 'none';
  document.getElementById('container38').style.display = 'none';
  document.getElementById('container39').style.display = 'none';
}

// 02/22/2019
function unlock1(){
  if(document.getElementById('page1-input').value == '02/22/2019'){
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
    document.getElementById('navheader').style.display = 'none';
  }else{
    alert('How could you forget our anniversary 🥺');
  }
}

// mcdonalds
function unlock2(){
  if(document.getElementById('page2-input').value.toLowerCase() == 'mcdonalds'){
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
  }else{
    alert("Its cheap, and I'm loving it MMM 🍟🍦🐔🐤");
  }
}

// Into the Spider-Verse
function unlock3(){
  if(document.querySelector('input[name="page3-radio"]:checked').value === '1'){
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page4').style.display = 'block';
  }else{
    alert('You hate this creature 🕷️');
  }
}

// Jeff Wang is:
function unlock4(){
  if( document.getElementById("page4-check1").checked == true && 
      document.getElementById("page4-check2").checked == false &&
      document.getElementById("page4-check3").checked == true &&
      document.getElementById("page4-check4").checked == true){
    document.getElementById('page4').style.display = 'none';
    document.getElementById('page5').style.display = 'block';
  }else{
    alert('HELLO, I am NOT ANNOYING 😠');
  }
}

// theo
function unlock5(){
  if(document.getElementById('page5-input').value.toLowerCase() == 'theo'){
    document.getElementById('page5').style.display = 'none';
    document.getElementById('page6').style.display = 'block';
  }else{
    alert('How you forget our cute aloe 🌱');
  }
}

// Vancouver Fish Company
function unlock6(){
  if(document.querySelector('input[name="page6-radio"]:checked').value === '1'){
    document.getElementById('page6').style.display = 'none';
    document.getElementById('page7').style.display = 'block';
  }else{
    alert('Rip wallet on all these 💸🐟🦞');
  }
}

// What was the cutest date we went to together?
function unlock7(){
  if( document.getElementById("page7-check1").checked == true && 
      document.getElementById("page7-check2").checked == true &&
      document.getElementById("page7-check3").checked == true &&
      document.getElementById("page7-check4").checked == true){
    document.getElementById('page7').style.display = 'none';
    document.getElementById('page8').style.display = 'block';
  }else{
    alert('They are all the right answer 💕');
  }
}

// Jeff Wang is the best boyfriend.
function unlock8(){
  if(document.querySelector('input[name="page8-radio"]:checked').value === '1'){
    document.getElementById('page8').style.display = 'none';
    document.getElementById('page9').style.display = 'block';
  }else{
    alert("BRUH how can you choose no... I'm out 😠");
  }
}

// I, Linda La will be _____ to my boyfriend, Jeff Wang
function unlock9(){
  if( document.getElementById("page9-check1").checked == true && 
      document.getElementById("page9-check2").checked == true &&
      document.getElementById("page9-check3").checked == true &&
      document.getElementById("page9-check4").checked == true){
    document.getElementById('page9').style.display = 'none';
    document.getElementById('page10').style.display = 'block';
  }else{
    alert('SLUTTY isa MUST 💦');
  }
}

// yes
function unlock10(){
  if(document.getElementById('page10-input').value.toLowerCase() == 'yes'){
    document.getElementById('page10').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.getElementById('navheader').style.display = 'flex';

    document.getElementById("btnhome").classList.add("active");
    document.getElementById("btnquiz").classList.remove("active");
    document.getElementById("btntime").classList.remove("active");
  }else{
    alert('Type yes for a good time 😏');
  }
}


// Local time function
function timeFunction() {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var d = new Date();

  var day = days[d.getDay()];
  var date = d.getDate();
  var month = months[d.getMonth()];
  var year = d.getFullYear();

  document.getElementById("day").innerHTML = day + ", " + month + " " + date + ", " + year;
}


function toggleid(id){
  if(document.getElementById(id).style.display == 'none'){
    document.getElementById(id).style.display = 'block';
  } else {
    document.getElementById(id).style.display = 'none';
  }
}

function toggle1(a, b, c){
  toggleid(a);
  toggleid(b);
  toggleid(c);
}


// Shuffle quotes function
var quoteNum = -1;
function shuffleQuote(){
  quoteNum += 1
  document.getElementById("quote").innerHTML = '"' + quoteSource[quoteNum].quote + '"';
  document.getElementById("name").innerHTML = '- ' + quoteSource[quoteNum].name;
}


/*
 * Javascript implementation of Fisher-Yates shuffle algorithm
 * http://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array
 */
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}

var quoteSource = [{
  quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
  name:"Francis of Assisi" 
}, {
  quote: "Only ugly people have to style. If you look good naked you will look good in anything.",
  name: "Jeff Wang" 
}, {
  quote:"Believe you can and you're halfway there.",
  name:"Theodore Roosevelt"
}, {
  quote: "It's easy to make money, just buy and sell houses. ALSO BUY GAMESTOP AND HOLD",
  name: "Jeff Wang" 
}, {
  quote:"It does not matter how slowly you go as long as you do not stop.",
  name:"Confucius"
}, {
  quote: "A dick a day, keeps the depression away",
  name: "Jeff Wang" 
}, {
  quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  name:"Thomas A. Edison"
}, {
  quote: "A wise man once said, my name is Jeff Wang",
  name: "Jeff Wang" 
}, {
  quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
  name:"Confucius"
}, {
  quote: "Take that frown and turn it upside down, it's a 'uʍoɹɟ' now.",
  name: "Jeff Wang" 
}, {
  quote:"Don't watch the clock; do what it does. Keep going.",
  name:"Sam Levenson"
}, {
  quote: "Why cry when you are upset, when you can cry from throating a dick?",
  name: "Jeff Wang" 
}, {
  quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
  name:"Ayn Rand"
}, {
  quote: "Don't let your memes be dreams, act now and live it out. DIAMOND HANDS",
  name: "Jeff Wang" 
}, {
  quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
  name:"Ayn Rand"
}, {
  quote: "If I had a dollar for the number of times I wanted to fuck my girl, I would be richer than Bezos.",
  name: "Jeff Wang" 
}, {
  quote:"Expect problems and eat them for breakfast.",
  name:"Alfred A. Montapert"
}, {
  quote: "Sometimes in life you just need to be tied up, spanked and dicked down.",
  name: "Jeff Wang" 
}, {
  quote:"Start where you are. Use what you have. Do what you can.",
  name:"Arthur Ashe"
}, {
  quote: "Life is meaningless without Jeff Wang.",
  name: "Jeff Wang" 
}, {
  quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
  name:"Samuel Beckett"
}, {
  quote: "Your time is limited, so don't waste it living someone else's life. Go fuck JEFF WANG.",
  name: "Jeff Wang" 
}, {
  quote:"Be yourself; everyone else is already taken.",
  name:"Oscar Wilde"
}, {
  quote: "Throw the stone of life into the pond of happiness, splash splash.",
  name: "Jeff Wang" 
}, {
  quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  name:"Albert Einstein"
}, {
  quote: "Life is like a desert, getting wet will ease all the pain of thirst.",
  name: "Jeff Wang" 
}, {
  quote:"Always remember that you are absolutely unique. Just like everyone else.",
  name:"Margaret Mead"
}, {
  quote: "Life is painful, getting that pussy pounded isn't.",
  name: "Jeff Wang" 
}, {
  quote:"Do not take life too seriously. You will never get out of it alive.",
  name:"Elbert Hubbard"
}, {
  quote: "Sometimes life will really fuck you up, prepare yourself with some experience and lube.",
  name: "Jeff Wang" 
}, {
  quote:"People who think they know everything are a great annoyance to those of us who do.",
  name:"Isaac Asimov"
}, {
  quote: "Four things cannot be long hidden: the sun, the moon, the truth, and this boner.",
  name: "Jeff Wang" 
}, {
  quote:"Procrastination is the art of keeping up with yesterday.",
  name:"Don Marquis"
}, {
  quote: "Stand on the giant's shoulders to see far and stuff yeah...",
  name: "Jeff Wang" 
}, {
  quote:"Get your facts first, then you can distort them as you please.",
  name:"Mark Twain"
}, {
  quote: "DIAMOND HANDS HOLD THE LINE, APES TOGETHER STRONG!!!",
  name: "Jeff Wang" 
}, {
  quote:"A day without sunshine is like, you know, night.",
  name:"Steve Martin"
}, {
  quote: "It may seem impossible at first, but if you really put your hardwork into it, you can deepthroat that dick!",
  name: "Jeff Wang" 
}, {
  quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
  name:"Ellen DeGeneres"
}, {
  quote: "If you arent laughing, crying and moaning in life, you are living it wrong.",
  name: "Jeff Wang" 
}, {
  quote:"Don't sweat the petty things and don't pet the sweaty things.",
  name:"George Carlin"
}, {
  quote: "Don't just talk the talk and walk the walk. Suck the suck and fuck the fuck.",
  name: "Jeff Wang" 
}, {
  quote:"Always do whatever's next.",
  name:"George Carlin"
}, {
  quote: "Slow and steady win the race also applies in bed and blowjobs.",
  name: "Jeff Wang" 
}, {
  quote:"Atheism is a non-prophet organization.",
  name:"George Carlin"
}, {
  quote: "There are two types of people in this world, the bottom type and the top type.",
  name: "Jeff Wang" 
}, {
  quote: "Nothing feels better than taking the weights of your shoulder and taking the clothes off your body.",
  name: "Jeff Wang" 
}, {
  quote:"Hapiness is not something ready made. It comes from your own actions.",
  name:"Dalai Lama"
}];




