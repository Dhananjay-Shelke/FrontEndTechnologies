alert("alert xxxxxx")

var ans = confirm("select Ok or Cancel")
if(ans){
    document.write("<h2>You selected ok</h2>")
}
else{
    document.write("<h2>You selected cancel</h2>")
}

var name = prompt("Enter Name")
var surname = prompt("Enter Surname")
document.write("name: " + name + "<br>"+"surname: " +surname)