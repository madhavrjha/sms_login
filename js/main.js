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