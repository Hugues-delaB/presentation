const text = document.querySelector(".wise");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span class=\"mooving\">" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
  const span = text.querySelectorAll('.mooving')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.lenght){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}

// export { onTick };