
function signUp(e){
event.preventDefault();
//console.log("working");

var userName=document.getElementById("Username").value;
var mail=document.getElementById("email").value;
var dates=document.getElementById("date").value;
var times=document.getElementById("time").value;

var User ={
    UserName : userName ,
    Email : mail ,
    Date : dates ,
    Time : times ,
  
};

var json= JSON.stringify(User);
localStorage.setItem(User,json);
console.log('user added');
}