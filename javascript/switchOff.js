const content = document.querySelector('.intro');
const button = document.querySelector('.submit');

const switchOff = () => {

    button.addEventListener('focus', () =>{
      button.classList.add('disable');
      content.style.animation = 'turn-off 0.5s ease-in forwards';
  }, true);
  }

export { switchOff };

