const section2 = window.document.querySelector('.section2');
const section3 = window.document.querySelector('.section3');

const typeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.count = 0;
  this.wait = parseInt(wait, 10);
  this.isDeleting = false;
  this.type();
}

// type method
  typeWriter.prototype.type = function() {
    //current index of words
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
    // check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // insert txt into Element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    // initial type speed
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /=2;
    }
    // if word is complete
    if (this.count === 2){
      section2.style.animation = 'up 1s ease forwards';
      section3.style.animation = 'goIn 1s ease forwards';
    }

      if(!this.isDeleting && this.txt === fullTxt) {
        //make pause at the end
          typeSpeed = this.wait;
          // set delete to true
          this.isDeleting = true;
          // add count
          this.count++;
      } else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        // move to next word
        this.wordIndex++;
        // pause before start typing
        typeSpeed = 500;
      }

    setTimeout(() => this.type(), typeSpeed);
  }

function init(name) {
  const txtElement = document.querySelector('.typing');
  const words = [`Knock knock ${name}`, "Follow the White Rabbit"]
  const wait = txtElement.getAttribute('data-wait')
  //init typeWriter
  new typeWriter(txtElement, words, wait);
}


export { init };
