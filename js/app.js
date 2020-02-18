'use strict';

var hiMe = prompt ('hi friend can you say hi to me ?');
// console.log(hiMe);
var name =prompt ('what is your name ?');
// console.log(name);
var likeMe = prompt ('do you think i love food ?');
// console.log(likeMe);

var born =  prompt('Am i borned in one of these years 1994 , 1995 , 1996 ?');
// console.log(born);
var score = 0;

switch (born.toLowerCase()) {
    case 'yes' : 
    alert ('you goal it ');
    score = score +1;
    break;
    case 'y' : 
    alert ('you goal it ');
    score = score +1;
    break;
    case  'no' : 
    alert (' you should try again')
    break;
    case 'n': 
    alert ('you should try again')
    break;
    default : 
    alert ('your answer is incorrect repeat please')
}

var graduation = prompt ('Am i  graduated from my university ?');
// console.log(graduation);

switch (graduation.toLowerCase()) {
    case 'yes' :
    alert ('congartulat  me');
    score = score +1;
    break;
    case 'y' :
    alert ('congartulat me  ');
    score = score +1;
    break;
    case  'no' :
    alert (' no i\'am finish it');
    break;
    case 'n' :
    alert (' no i\'am finish it');
    break;
    default : 
    alert ('you should repeat')
}

var games = prompt ('Am i a good player of playstation games ?');
// console.log(games);

switch (games.toLowerCase()) {
    case 'yes' :
    alert ('i\'am vs you');
    score = score +1;
    break;
    case 'y' :
    alert ('i\'am vs you');
    score = score +1;
    break;
    case 'no' :
    alert ('go home');
    break;
    case 'n' :
    alert ('go home');
    break;
    default : 
    alert ('answer please')
}


var sport = prompt ('do you think i love swimming ?');
// console.log(sport);

switch (sport.toLowerCase()) {
    case 'yes' :
    alert ('i\'am an olympic champion ');
    score = score +1;
    break;
    case 'y' :
    alert ('i\'am an olympic champion ');
    score = score +1;
    break;
    case 'no' :
    alert (' no i\'am love it')
    break; 
    case 'n' :
    alert (' no i\'am love it')
    break;
    default : 
    alert ('your answer is incorrect repeat please')
}

var funny = prompt (' do you think i\'am a quait person ?');
// console.log(funny);

switch (funny.toLowerCase()) {
    case 'yes' :
    alert ('thank you ');
    score = score +1;
    break;
    case 'y' :
    alert ('thank you ');
    score = score +1;
    break;
    case 'no' :
    alert ('i will edit it')
    break;
    case 'n' :
    alert ('i will edit it')
    break;
    default : 
    alert ('your answer is incorrect repeat please')
}

var myNum = 99;
var guessing = prompt('can you guess my number ? , it\'s between 95 to 99');
// console.log("whaaat?", guessing);

for (var i=1;i<4; i++) {
    if (myNum == guessing) {
        score = score+1;
        alert ('GOOOOOOAL');
        break;
    }
    else if (guessing<myNum) {
        // console.log(guessing)
        alert ('your guessing is lower than My number');
        guessing = prompt('you have another chance'  )

    }
    else if (guessing>myNum) {
        console.log(guessing)
        alert ('your guessing is higher than My number'  )
    }

}
var myCars =['ford','lincolin','jeep','tesla','bugati','bmw','chevrolet'];
var guessMyCar = prompt ('what do you think my favorit american cars ?  ');
for (var i =0; i<6; i++) {
    for (var x=0; x<guessMyCar.length; x++){
        if (guessMyCar == myCars[x]) {
            score = score+1;
            alert ('yes this is american car so i love it ');
            var yes =0;
            break;
        }
    }
    x =0;
    if (yes == 0){
        break;
    }
    guessMyCar = prompt ('what do you think my favorit american cars ?  ');
}
alert ('Thank you ' + name +  ' for your visiting my project' + ' and your score is ' + score)