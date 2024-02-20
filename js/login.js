document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    if(email === 'asifahemmed0@gmail.com' && password === 'asifrahi'){
        window.location.href = 'dashboard.html';
    }else{
        alert('Invalid User')
    }
});