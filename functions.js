function reverseString(str) {
  let reversedString;

  // TODO: reverse the string
  
  return reversedString;
}

function findLabradoodles(breed)  {
  /**
   * Test case:
   *   input: 'labradoodle'
   *   expected output: array containing objects for Muggles and Luna.
   */
  filteredDogs = [];

  const dogs = [
    {
      name: 'Fido',
      breed: 'Beagle',
    },
    {
      name: 'Muggles',
      breed: 'Labradoodle',
    },
    {
      name: 'Duke',
      breed: 'German Shepherd'
    },
    {
      name: 'Luna',
      breed: 'labradoodle',
    }
  ]

  // TODO: search dogs array for the requested breed and add results to filteredDgs

  return filteredDogs;
}

function testAll() {
  const results = [];
  results.push(
    reverseString('idempotent'),
    findLabradoodles('labradoodle'),
  );

  results.forEach(result => {
    const domList = document.getElementById('results');
    const liElement = document.createElement('li');
    resultTextNode = document.createTextNode(result);
    liElement.appendChild(resultTextNode);
    domList.appendChild(liElement);
  })
}