function test(){
//retriving the data
var uid= document.getElementById("name").value;
var mail=document.getElementById("email").value;
var dates=document.getElementById("date").value;
var clock=document.getElementById("time").value;

//storing the data
var user=localStorage.setItem("Name",uid);
var mailid=localStorage.setItem("Email",mail);
var day=localStorage.setItem("Date",dates);
var timing =localStorage.setItem("Time",clock);

}