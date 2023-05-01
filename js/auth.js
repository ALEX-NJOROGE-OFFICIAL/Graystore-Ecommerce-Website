const signupForm = document.querySelector('#regForm');
signupForm.addEventListener('submit' , (e) => {
    e.preventDefault();

    //getting user info

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    //signing the user in

   auth.createUserWithEmailAndPassword(email,password).then(cred => {
    console.log(cred.user)
    
   })
})

//logging in

const signupform = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

//getting user info

const email = loginForm['login-email'].value;
 const password = loginForm['login-password'].value;

 auth.loginInWithEmailAndPassword(email, password).then(cred =>{
     console.log(cred.user)
 })

})