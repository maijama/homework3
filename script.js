document.getElementById('end').addEventListener('input', function () {
  const endInput = this;
  const endValue = parseInt(endInput.value);

  if (endValue > 100) {
    alert("End value cannot exceed 100 !!");
    endInput.value = 100;
  }
});


function generateDivs() {
  const main = document.querySelector('main');
  main.innerHTML = '';

  const start = parseInt(document.getElementById('start').value);
  const end = parseInt(document.getElementById('end').value);
  const fizz = parseInt(document.getElementById('fizz').value);
  const buzz = parseInt(document.getElementById('buzz').value);

  for (let i = start; i <= end; i++) {
    const div = document.createElement('div');
    div.id = `myid${i}`;
    if (i % fizz === 0 && i % buzz === 0) {
      div.className = 'fizzbuzz';
      div.innerText = `FizzBuzz = ${i}`;
    } else if (i % fizz === 0) {
      div.className = 'fizz';
      div.innerText = `Fizz = ${i}`;
    } else if (i % buzz === 0) {
      div.className = 'buzz';
      div.innerText = `Buzz = ${i}`;
    } else {
      div.className = 'number';
      div.innerText = i.toString();
    }
    main.appendChild(div);
  }
}


function clearDivs() {
  document.querySelector('main').innerHTML = '';
}
