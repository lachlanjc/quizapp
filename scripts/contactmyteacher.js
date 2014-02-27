function openGrades() {
    window.open("https://hac.scasd.org/HomeAccess/");
}
function openContacter() {
    document.getElementById("contacter").style.opacity=1;
}
function closeContacter() {
    document.getElementById("contacter").style.opacity=0;
}
function showConfirmation() {
    document.getElementById("content").style.display="none";
    document.getElementById("mail_sent").style.display="block";
}


var studentName = "Jake";

var subject = "My grade in your class is a 0";
var assembledSubject = studentName + " has a message for you: " + subject;

var body = "Please raise it to 100% for me. I'll even give you a candy bar to do it.";
var assembledBody = "One of your students, " + studentName + ", has sent you the following message:" + body;

var m = new mandrill.Mandrill('h0Px_zEi1J-qKIpu8q4TlA');
function sendTheMail() {
    m. messages.send(params, function(res) {
        console.log(res);
    }, function(err) {
        console.log(err);
    });
}
var params = {
    "message": {
        "from_email": "quizapp@icloud.com",
        "tag": "test",
        "to":[
            {"email": "lachlan.campbell527@gmail.com"},
            ],
        "subject": "New message from *|NAME|*",
        "html": "<p>One of your students, *|NAME|* has sent you the following message:</p><br /><blockquote>*|BODY|*</blockquote>",
    }
};
