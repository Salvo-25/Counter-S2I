//Funzione che crea gli elementi e assegna le classi
function createTag(element, className){
    let tag = document.createElement(element);
    tag.className = className;
    switch (tag.className){
      case 'plusButton':
        tag.innerHTML = ('+');
        document.body.lastElementChild.append(tag);
        break
      case 'minusButton':
        tag.innerHTML = ('-');
        document.body.lastElementChild.append(tag);
        break
      case 'resetDisplay':
        tag.innerHTML = ('RESET');
        document.body.lastElementChild.append(tag);
        break
      case 'display':
        tag.innerHTML = (0);
        document.body.append(tag);
        break
      case 'container':
        document.body.append(tag);
        break
    }
}

//Funzione che aggiorna il counter
function counter(event){
  if (event.currentTarget.className == 'plusButton'){
    document.body.querySelector('.display').innerHTML = ++document.body.querySelector('.display').innerHTML;
  }else if (event.currentTarget.className == 'minusButton'){
    if (document.body.querySelector('.display').innerHTML == 0){
      return;
    }
    document.body.querySelector('.display').innerHTML = --document.body.querySelector('.display').innerHTML;
  }else{
    document.body.querySelector('.display').innerHTML = 0;
  }
}

createTag('p','display');
createTag('div', 'container');

createTag('button', 'plusButton');
createTag('button', 'resetDisplay');
createTag('button', 'minusButton');

const plus = document.body.querySelector('.plusButton');
const minus = document.body.querySelector('.minusButton');
const reset = document.body.querySelector('.resetDisplay');

plus.addEventListener("click", counter);
minus.addEventListener("click", counter);
reset.addEventListener("click", counter);

