'use strect'
var hiMe = prompt ('hi friend can you say hi to me ?');
console.log(hiMe);
var name =prompt ('what is your name ?');
console.log(name);
var likeMe = prompt ('do you think iam 25 years old ?');
console.log(likeMe);

var born =  prompt('Are you born in one of these years 1994 , 1995 , 1996 ?');
console.log(born);

switch (born.toLowerCase()) {
    case 'yes' : 
    alert ('nice to meet you ');
    console.log('nice to meet you ');
    break;
    case 'y' : 
    alert ('nice to meet you ');
    console.log('nice to meet you ');
    break;
    case  'no' : 
    alert (' you should try again')
    console.log(' you should try again');
    break;
    case 'n': 
    alert ('you should try again')
    console.log(' you should try again');
    break;
    default : 
    alert ('your answer is incorrect repeat please')
}

var graduation = prompt ('Are you graduated from your university ?');
console.log(graduation);

switch (graduation.toLowerCase()) {
    case 'yes' :
    alert ('congartulations');
    console.log('congartulations ');
    break;
    case 'y' :
    alert ('congartulations ');
    console.log('congartulations ');
    break;
    case  'no' :
    alert (' i wish a good luck to you');
    console.log('i wish a good luck to you');
    break;
    case 'n' :
    alert ('i wish a good luck to you');
    console.log('i wish a good luck to you');
    break;
    default : 
    alert ('you should repeat')
}

var games = prompt ('Are you a good in playstation games ?');
console.log(games);

switch (games.toLowerCase()) {
    case 'yes' :
    alert ('i am vs you');
    console.log('i am vs you');
    break;
    case 'y' :
    alert ('i am vs you');
    console.log('i am vs you');
    break;
    case 'no' :
    alert ('go home');
    console.log('go home');
    break;
    case 'n' :
    alert ('go home');
    console.log('go home');
    break;
    default : 
    alert ('answer please')
}


var sport = prompt ('do you love swimming ?');
console.log(sport);

switch (sport.toLowerCase()) {
    case 'yes' :
    alert ('you are an olympic champion ');
    console.log('you are an olympic champion ');
    break;
    case 'y' :
    alert ('you are an olympic champion ');
    console.log('you are an olympic champion ');
    break;
    case 'no' :
    alert (' you should love it')
    console.log(' you should love it');
    break; 
    case 'n' :
    alert (' you should love it')
    console.log(' you should love it');
    break;
    default : 
    alert ('your answer is incorrect repeat please')
}

var funny = prompt (' Are you think the quastions is funny ?');
console.log(funny);

switch (funny.toLowerCase()) {
    case 'yes' :
    alert ('thank you ');
    console.log('thank you ');
    break;
    case 'y' :
    alert ('thank you ');
    console.log('thank you ');
    break;
    case 'no' :
    alert ('i will edit it')
    console.log('i will edit it');
    break;
    case 'n' :
    alert ('i will edit it')
    console.log('i will edit it');
    break;
    default : 
    alert ('your answer is incorrect repeat please')
}
alert ('Thank you ' + name + ' for your visiting my project')