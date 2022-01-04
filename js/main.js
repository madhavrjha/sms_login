

// Getting Another Form After Phone Number [Parent]

const staffLoginForm = document.querySelector('#staff-login-form');
const staffOTPForm = document.querySelector('#staff-otp-form');

const staffInputBox = document.querySelector('#staff-login-form input');
const staffOTPBox = document.querySelector('#staff-otp-form input');

const staffErrorBox = document.querySelector('#staff-login-form p.alert');
const staffOTPErrorBox = document.querySelector('#staff-otp-form p.alert');

const staffOTPSubmitBtn = document.querySelector('#staff-otp-form button');



staffLoginForm.addEventListener('submit', e => {
  e.preventDefault();
  // Validation Code 

  let userPhoneNumber = staffInputBox.value;
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
    staffErrorBox.innerHTML = `${errorMessage}`;
    staffErrorBox.classList.remove('hidden');

    // Disappear the Error Message after 5 seconds
    setTimeout(() => staffErrorBox.classList.add('hidden'), 5000);

  }
  else {
    // Hide Login Form
    staffLoginForm.classList.add('hidden');
    document.querySelector('article span').classList.add('hidden');

    // Show OTP Form
    staffOTPForm.classList.remove('hidden');

    staffOTPForm.addEventListener('submit', e => {
      e.preventDefault();

      let OTPByUser = staffOTPBox.value;
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
        staffOTPErrorBox.innerHTML = `${errorMessage}`;
        staffOTPErrorBox.classList.remove('hidden');

        // Disappear the Error Message after 5 seconds
      setTimeout(() => staffOTPErrorBox.classList.add('hidden'), 5000);
      }
      else {
        // Add Loading Icon in Submit Button
        staffOTPBox.setAttribute('readonly', true);
        staffOTPSubmitBtn.setAttribute('disabled', true);
        staffOTPSubmitBtn.innerHTML = `<i class="fa-solid fa-spinner rotate"></i>`;

        // Redirect to Home Page

          /*

            Write Login
            Validation Code Here
            ....
            ....
            ....

          */
      }
    });
  }
});

