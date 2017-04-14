// Globals
const exercises = document.querySelectorAll('li');

// ## Array Cardio Day 1
// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
  'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
  'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter',
  'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd',
  'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving',
  'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
  'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk',
  'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
function showInventorsOfThe1500s(inventorsList, exercise) {
  const ul = document.createElement('ul');
  const inventorsOf1500s = inventorsList.filter(inventor =>
  inventor.year >= 1500 && inventor.year < 1600);

  exercise.appendChild(ul);

  inventorsOf1500s.forEach((inventor) => {
    const li = document.createElement('li');
    li.textContent = `${inventor.first} ${inventor.last}`;
    ul.appendChild(li);
  });
}
showInventorsOfThe1500s(inventors, exercises[0]);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
 function showInventorFullNames(inventorsList, exercise) {
   const ul = document.createElement('ul');
   const li = document.createElement('li');
   const inventorFullNames = inventorsList.map(inventor => `${inventor.first} ${inventor.last}`);

   li.textContent = `[${inventorFullNames.toString()}]`;
   exercise.appendChild(ul);
   ul.appendChild(li);
 }
showInventorFullNames(inventors, exercises[1]);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
function sortInventorsByAge(inventorsList, exercise) {
  const ul = document.createElement('ul');
  const sortedByAge = inventorsList.sort((a, b) => a.year - b.year);

  exercise.appendChild(ul);

  sortedByAge.forEach((inventor) => {
    const li = document.createElement('li');
    li.textContent = `${inventor.first} ${inventor.last} was born in ${inventor.year}.`;
    ul.appendChild(li);
  });
}
sortInventorsByAge(inventors, exercises[2]);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
function displayYearsOfLife(inventorsList, exercise) {
  const ul = document.createElement('ul');
  const li = document.createElement('li');

  const yearsOfLife = inventorsList.reduce((years, inventor) =>
  years + (inventor.passed - inventor.year), 0);

  exercise.appendChild(ul);
  li.textContent = `The inventors, in total, lived ${yearsOfLife} years.`;
  ul.appendChild(li);
}
displayYearsOfLife(inventors, exercises[3]);

// 5. Sort the inventors by years lived
function sortByYearsLive(inventorsList, exercise) {
  const ul = document.createElement('ul');

  const sorted = inventorsList.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));

  exercise.appendChild(ul);

  sorted.forEach((inventor) => {
    const li = document.createElement('li');
    const years = inventor.passed - inventor.year;

    li.textContent = `${inventor.first} ${inventor.last} lived ${years} years.`;
    ul.appendChild(li);
  });
}
sortByYearsLive(inventors, exercises[4]);

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. Sort Exercise
// Sort the people alphabetically by last name
function sortLastNamesAlphabetically(persons, exercise) {
  const ul = document.createElement('ul');

  const sorted = persons.sort((a, b) => {
  //  console.log(`a: ${a}, b: ${b}`);
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  exercise.appendChild(ul);

  sorted.forEach((person) => {
    const li = document.createElement('li');
    li.textContent = person;
    ul.appendChild(li);
  });
}

sortLastNamesAlphabetically(people, exercises[6]);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

function sumInstances(list, exercise) {
  const ul = document.createElement('ul');

  const numCars = list.reduce((sum, modeOfTransport) => {
    if (modeOfTransport === 'car') {
      return sum + 1;
    }
    return sum;
  }, 0);

  const numTrucks = list.reduce((sum, modeOfTransport) => {
    if (modeOfTransport === 'truck') {
      return sum + 1;
    }
    return sum;
  }, 0);

  const numBikes = list.reduce((sum, modeOfTransport) => {
    if (modeOfTransport === 'bike') {
      return sum + 1;
    }
    return sum;
  }, 0);

  const numWalks = list.reduce((sum, modeOfTransport) => {
    if (modeOfTransport === 'walk') {
      return sum + 1;
    }
    return sum;
  }, 0);
  const numVans = list.reduce((sum, modeOfTransport) => {
    if (modeOfTransport === 'van') {
      return sum + 1;
    }
    return sum;
  }, 0);

  console.log(`There are ${numCars} cars.`);
  console.log(`There are ${numTrucks} trucks.`);
  console.log(`There are ${numBikes} bikes.`);
  console.log(`There are ${numWalks} ways to walk.`);
  console.log(`There are ${numVans} vans.`);
  console.log(list.length);
  console.log(numCars + numTrucks + numBikes + numWalks + numVans);
}

sumInstances(data, exercises[7]);
