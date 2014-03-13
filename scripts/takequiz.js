function confirm(){
    window.location("http://pfmscode.github.io/quizapp/pages/finished.html");
}
function backToDashboard(){
    window.location("http://pfmscode.github.io/quizapp/pages/student-d.html");
}
// All of this is outdated
/* var minutesLabel = document.getElementById("minutes");
        var secondsLabel = document.getElementById("seconds");
        var totalSeconds = 0;
        setInterval(setTime, 1000);

        function setTime()
        {
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds%60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
        }

        function pad(val)
        {
            var valString = val + "";
            if(valString.length < 2)
            {
                return "0" + valString;
            }
            else
            {
                return valString;
            }
        }
        function clock(){ 
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
} */
