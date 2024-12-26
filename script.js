function myfunction(){
var a = 6;
document.getElementById("demo").innerHTML = "The Sqr Of 6 Is " + a*a;
//alert("The Sqr Of 6 Is " + a * a);
}

function validate(e){
e.preventDefault();

const email= document.getElementById('email').value ;
const pass = document.getElementById('password').value;
const age = document.getElementById('age').value;
const msgBox = document.getElementById('message');
let message = '';
if (email===''){
message= 'Please Enter An Email.';
msgBox.style.color='red';
} else if (pass === '') {
message = 'Password Must Be At Least 8 Characters.';
msgBox.style.color = 'red';
} else if (age === ''){
message = 'Age Must Be Between 12 And 50.';
msgBox.style.color = 'red';
}

else {
message = 'Login Successful!';
msgBox.style.color = 'Green'
}

{
msgBox.innerText= message;
}
