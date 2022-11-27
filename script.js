const con = document.getElementById('confirmPassword');
const pass = document.getElementById('password');

con.addEventListener('keyup', checkPass);

function checkPass(){
    console.log (con.value == pass.value);
}