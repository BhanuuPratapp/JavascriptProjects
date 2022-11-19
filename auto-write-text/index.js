const text = "I do not know what to do"

let index = 0;

function autowrite(){
  document.body.innerText = text.slice(0, index);

  index++;
   if(index > text.length){
    index = 0;
   }
}

setInterval(autowrite, 100);