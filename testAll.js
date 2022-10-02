
const results = [];

function testAll() {
  testFunction('reverseString', () => reverseString('idempotent'));
  testFunction('findLabradoodles', () => findLabradoodles('labradoodle'));
}

function testFunction(title, callback) {
  const result = callback();
  const domList = document.getElementById('results');
  const liElement = document.createElement('li');
  resultTextNode = document.createTextNode(`${title}: ${result}`);
  liElement.appendChild(resultTextNode);
  domList.appendChild(liElement);
}