// Switching Tab from Registration and LogIn

const parentRegisterBtn = document.querySelector('#parent-register-btn');
const parentLoginBtn = document.querySelector('#parent-login-btn');
const parentRegisterBox = document.querySelector('#parent-register-box');
const parentLoginBox = document.querySelector('#parent-login-box');
const headerTitle = document.querySelector('header h2');


parentRegisterBtn.addEventListener('click', e => {
  e.preventDefault();
  parentLoginBox.classList.add('hidden');
  parentRegisterBox.classList.remove('hidden');
  headerTitle.innerHTML = `<i class="fa-solid fa-child fa-2x"></i> Register Your Child`;
});


parentLoginBtn.addEventListener('click', e => {
  e.preventDefault();
  parentRegisterBox.classList.add('hidden');
  parentLoginBox.classList.remove('hidden');
  headerTitle.innerHTML = `<i class="fa-solid fa-child fa-2x"></i> Login as Parent`;
});


// Getting Another Form After Phone Number [Parent]

const parentLoginForm = document.querySelector('#parent-login-form');
const parentOTPForm = document.querySelector('#parent-otp-form');

const inputBox = document.querySelector('#parent-login-form input');
const OTPBox = document.querySelector('#parent-otp-form input');

const errorBox = document.querySelector('#parent-login-form p.alert');
const OTPErrorBox = document.querySelector('#parent-otp-form p.alert');

const OTPSubmitBtn = document.querySelector('#parent-otp-form button');


parentLoginForm.addEventListener('submit', e => {
  e.preventDefault();
  // Validation Code 

  let userPhoneNumber = inputBox.value;
  console.log(userPhoneNumber);

  /*

    Write Phone Number
    Validation Code Here
    ....
    ....
    ....

  */

  let hasError = false;           
  let errorMessage = 'This is Dynamic Error Message';

  if(hasError) {
    errorBox.innerHTML = `${errorMessage}`;
    errorBox.classList.remove('hidden');

    // Disappear the Error Message after 5 seconds
    setTimeout(() => errorBox.classList.add('hidden'), 5000);

  }
  else {
    // Hide Login Form
    parentLoginForm.classList.add('hidden');
    document.querySelector('article span').classList.add('hidden');

    // Show OTP Form
    parentOTPForm.classList.remove('hidden');

    parentOTPForm.addEventListener('submit', e => {
      e.preventDefault();

      let OTPByUser = OTPBox.value;
      console.log(OTPByUser);

        /*

          Write OTP
          Validation Code Here
          ....
          ....
          ....

        */

      let hasError = false;
      let errorMessage = 'Invalid OTP';

      if(hasError) {
        OTPErrorBox.innerHTML = `${errorMessage}`;
        OTPErrorBox.classList.remove('hidden');

        // Disappear the Error Message after 5 seconds
      setTimeout(() => OTPErrorBox.classList.add('hidden'), 5000);
      }
      else {
        // Add Loading Icon in Submit Button
        OTPBox.setAttribute('readonly', true);
        OTPSubmitBtn.setAttribute('disabled', true);
        OTPSubmitBtn.innerHTML = `<i class="fa-solid fa-spinner rotate"></i>`;

        // Redirect to Home Page

          /*

            Write Login
            Validation Code Here
            ....
            ....
            ....

          */
      }
    })
  }
})