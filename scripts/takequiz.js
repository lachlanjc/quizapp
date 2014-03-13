function confirm() {
    var ynsubmit = confirm("Are you ready to submit your answers?");
    if ynsubmit === true {
        sendResults();
        window.location("http://pfmscode.github.io/quizapp/pages/finished.html");
    }
    else {
        console.log("Not ready to sumbit yet")
    }
}
function backToDashboard() {
    window.location("http://pfmscode.github.io/quizapp/pages/student-d.html");
}
function sendResults() {
    // This function will actually send the results to the server
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
