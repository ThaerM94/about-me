'use strect'
var hiMe = prompt ('hi friend can you say hi to me ?');
// console.log(hiMe);
var name =prompt ('what is your name ?');
// console.log(name);
var likeMe = prompt ('do you think i love food ?');
// console.log(likeMe);

var born =  prompt('Am i borned in one of these years 1994 , 1995 , 1996 ?');
// console.log(born);

switch (born.toLowerCase()) {
    case 'yes' : 
    alert ('you goal it ');
    break;
    case 'y' : 
    alert ('you goal it ');
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
console.log(graduation);

switch (graduation.toLowerCase()) {
    case 'yes' :
    alert ('congartulat  me');
    break;
    case 'y' :
    alert ('congartulat me  ');
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
    break;
    case 'y' :
    alert ('i\'am vs you');
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
    break;
    case 'y' :
    alert ('i\'am an olympic champion ');
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
    break;
    case 'y' :
    alert ('thank you ');
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
alert ('Thank you ' + name + ' for your visiting my project')