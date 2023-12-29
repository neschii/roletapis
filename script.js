/* eslint-disable linebreak-style */
const wheel = document.querySelector('.container');
const spin = document.querySelector('#girar');


spin.addEventListener('click', () => {
  console.log('NAO TA FUNCIONANDO');
  const deg = Math.floor(5000 + Math.random() * 2000);
  wheel.style.transition = 'all 4s ease-out';
  wheel.style.transform = `rotate(${deg}deg)`;
});
