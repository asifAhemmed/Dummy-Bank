document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    if(email === 'asifahemmed0@gmail.com' && password === 'asifrahi'){
        console.log('Valid user');
    }else{
        console.log('Invalid User')
    }
});