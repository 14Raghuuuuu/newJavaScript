## DOM related javasctript projects 

## projects link 

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-zmueqp?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

## project 1 
### solution code 
``` javascsript code1 
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```