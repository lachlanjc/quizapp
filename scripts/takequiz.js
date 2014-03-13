function confirm(){
    window.location("http://pfmscode.github.io/quizapp/pages/finished.html")
}
function backToDashboard(){
    window.location("http://pfmscode.github.io/quizapp/pages/student-d.html")
}
var time = 0,
    elapsed = '0.0';

window.setInterval(function()
{
    time += 100;

    elapsed = Math.floor(time / 100) / 10;
    if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }

    document.title = elapsed;

}, 100);

var start=document.getElementById('buttonpressed').value;
if (start=='Start Quiz'){
   sec++; 
  if (sec == 60) { 
   sec = 0; 
   mins = mins + 1; 
}  
  else {
   mins = mins; 
} 
  if (mins == 60) {  
   mins = 0; 
   hour += 1; 
}
if (sec<=9) { 
sec = "0" + sec; 
}  
if (min<=9) {
min = "0" + min
}
if (hour<=9) {
hour = "0" + hour
}
