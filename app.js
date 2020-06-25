import { init } from '/javascript/typing.js';
import { switchOff } from '/javascript/switchOff.js';
// import { onTick } from '/javascript/pills.js';

const button = document.querySelector('.submit');
const redPill = document.querySelector('.red-pill');
const bluePill = document.querySelector('.blue-pill');

  button.addEventListener('click', function(){
  const name = document.querySelector('input').value;
  init(name);
});

  bluePill.addEventListener('click', function(){
    window.location.href='https://www.google.com/search?q=Hello+Mr+Anderson&oq=Hello+Mr+Anderson&aqs=chrome..69i57j0l7.8398j0j8&sourceid=chrome&ie=UTF-8';
});

  redPill.addEventListener('click', function(){
    window.location.href='https://hugues-delab.github.io/profile';
});

switchOff();
