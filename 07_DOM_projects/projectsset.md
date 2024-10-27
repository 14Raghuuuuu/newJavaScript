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


## project 2 

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('.results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter a valid height ${height}`;
    results.style.color = 'red';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter a valid weight ${weight}`;
    results.style.color = 'red';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); //
    results.innerHTML = `<span> Your BMI is </br>
  ${bmi}</span>`;
    if (weight < 18.6) {
      results.innerHTML = ` Your BMI is </br> ${bmi} </br>
    you need to improve weight`;
      results.style.color = 'Orange';
    } else if (weight >= 18.6 && weight <= 24.9) {
      results.innerHTML = ` Your BMI is </br> ${bmi} </br> 
    you're weigth is normal`;
      results.style.color = 'blue';
    } 
  }
});

```