alert =( "JAVASCRIPT ES6 ASSIGNMENT")
// LET, VAR & CONST:
const pi = 3.14159;

function sumOfSquares(numbers) {
    let sum = 0;
    for (const num of numbers) {
      const square = num * num;
      sum += square;
    }
    return sum;
  }


  const strings = ["apple", "banana", "cherry"];
for (let str of strings) {
  const firstLetter = str.charAt(0);
  console.log(firstLetter);
}

function createAsterisks(n) {
    const asterisk = "*";
    return asterisk.repeat(n);
  }

  function greet(person) {
    var message = "Hello, " + person.name + "! You are " + person.age + " years old.";
    return message;
  }

  function findMaxValue(numbers) {
    const maxValue = Math.max(...numbers);
    return maxValue;
  }

//   TEMPLATE STRINGS:
function greetPerson(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
  }

  function calculateStats(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return `Sum: ${sum}, Average: ${average}`;
  }
  
  function createHTMLElement(tag, text) {
    return `<${tag}>${text}</${tag}>`;
  }

  function getProductInfo(product) {
    return `Product: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}`;
  }
  
  function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  
//   DESTRUCTING:
const sumArray = ([num1, num2]) => num1 + num2;

const personInfo = ({ name, age, occupation }) => `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;

const highestScorer = (people) => {
    const [firstPerson, ...restOfPeople] = people;
    let highestScore = firstPerson.score;
    let highestScorerName = firstPerson.name;
  
    for (const person of restOfPeople) {
      if (person.score > highestScore) {
        highestScore = person.score;
        highestScorerName = person.name;
      }
    }
  
    return highestScorerName;
  };
  
  const getInitials = ({ firstName, middleName = '', lastName }) => `${firstName[0]}${middleName[0]}${lastName[0]}`;

  const firstAndLast = (strings) => {
    const [first, ...rest] = strings;
    const last = rest.pop();
    return { first, last };
  };
  

//   DEFAULT, REST & SPREAD:
  const sum = (a = 0, b = 0) => a + b;

  const gatherArguments = (...args) => args;

  const findMax = (numbers) => Math.max(...numbers);

  const concatenateArrays = (array1, array2) => [...array1, ...array2];

  const addIdProperty = (person) => ({ ...person, id: generateUniqueId() });

//   ARROW FUNCTIONS:
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2); // Prints double of each number
});

const getStringLength = (str) => str.length;

const multiply = (a, b) => a * b;

const calculateAverage = (numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  };

  const greet = (name) => `Hello, ${name}!`;

  const getRandomNumber = () => Math.random();

//           PROMISES:
const calculateSquareAsync = (number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number * number);
      }, 1000);
    });
  };

  const resolveAll = (promises) => Promise.all(promises);

  const fetchDataFromURL = (url) => {
    return fetch(url).then((response) => response.json());
  };

  const sumOfResolvedValues = (promise1, promise2) => {
    return Promise.all([promise1, promise2]).then(([value1, value2]) => value1 + value2);
  };

  const timeoutPromise = (promise, timeout) => {
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(`Promise timed out after ${timeout} ms`));
      }, timeout);
    });
  
    return Promise.race([promise, timeoutPromise]);
  };

  const startPromise = Promise.resolve("Start Counting");

const counter = (value) => {
  console.log(value);
  return value + 1;
};

startPromise
  .then((value) => counter(value))
  .then((value) => counter(value))
  .then((value) => counter(value))
  .then((value) => counter(value));

//       MAP:
const mapToSquares = (numbers) => {
    const resultMap = new Map();
    for (const number of numbers) {
      resultMap.set(number, number * number);
    }
    return resultMap;
  };

  const mapNamesToAges = (people) => {
    const resultMap = new Map();
    for (const person of people) {
      resultMap.set(person.name, person.age);
    }
    return resultMap;
  };

  const containsKey = (map, key) => map.has(key);

  const filterMap = (originalMap, callback) => {
    const resultMap = new Map();
    for (const [key, value] of originalMap) {
      if (callback(key, value)) {
        resultMap.set(key, value);
      }
    }
    return resultMap;
  };

  const mergeMaps = (map1, map2) => new Map([...map1, ...map2]);

    // CLASSES:
    class Person {
        constructor(firstName, lastName) {
          this.firstName = firstName;
          this.lastName = lastName;
        }
      }
      
      const friend1 = new Person("John", "Doe");
      const friend2 = new Person("Jane", "Smith");
      
      console.log(`Hello, ${friend1.firstName} ${friend1.lastName}!`);
      console.log(`Hello, ${friend2.firstName} ${friend2.lastName}!`);

      class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
      
        introduction() {
          return `Hi, I'm ${this.name} and I am ${this.age} years old.`;
        }
      }

      class Rectangle {
        constructor(width, height) {
          this.width = width;
          this.height = height;
        }
      
        area() {
          return this.width * this.height;
        }
      
        perimeter() {
          return 2 * (this.width + this.height);
        }
      }

      class Circle {
        constructor(radius) {
          this.radius = radius;
        }
      
        diameter() {
          return 2 * this.radius;
        }
      
        circumference() {
          return 2 * Math.PI * this.radius;
        }
      
        area() {
          return Math.PI * this.radius ** 2;
        }
      }

      class Student extends Person {
        constructor(name, age, course) {
          super(name, age);
          this.course = course;
        }
      
        introduction() {
          return `${super.introduction()} I'm a student taking ${this.course}.`;
        }
      }

      class Square extends Rectangle {
        constructor(side) {
          super(side, side);
          this.side = side;
        }
      
        area() {
          return this.side ** 2;
        }
      
        perimeter() {
          return 4 * this.side;
        }
      }

    //   HOISTING:
    function example1() {
      console.log(myVar);
      var myVar = 5;
    }
    example1();

    function example2() {
      console.log(myVar);
      let myVar = 5;
    }
    example2();

    function example3() {
      console.log(myVar);
      const myVar = 5;
    }
    example3();

    function example4() {
      console.log(myVar);
      anotherVar = 10;
    }
    example4();

    function example5() {
      myFunction();
      function myFunction() {
        console.log("Hello from myFunction");
      }
    }
    example5();
    
    // THIS KEYWORD:
    const personOne = {
      name: "John",
      greet() {
        console.log(`Hello, my name is ${this.name}.`);
      }
    };
    
    function Car(brand) {
      this.brand = brand;
      this.speed = 0;
      this.accelerate = function(value) {
        this.speed += value;
      };
      this.printSpeed = function() {
        console.log(`Current speed: ${this.speed} km/h`);
      };
    }

    const calculator1 = {
      value: 0,
      add(num) {
        this.value += num;
      },
      subtract(num) {
        this.value -= num;
      },
      multiply(num) {
        this.value *= num;
      },
      printValue() {
        console.log(`Current value: ${this.value}`);
      }
    };

    const book = {
      title: "The Great Book",
      author: "Jane Doe",
      pages: 200,
      printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
      }
    };

    function Person(name, age) {
      this.name = name;
      this.age = age;
      this.introduce = function() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
      };
    }

    const counter1 = {
      count: 0,
      increment() {
        this.count += 1;
      },
      reset() {
        this.count = 0;
      }
    };

      //  FOR OF LOOP:
      const fruits = ["apple", "banana", "orange", "grape"];

      for (const fruit of fruits) {
        console.log(fruit);
      }

      const messageTo = "Hello, world!";

for (const char of message) {
  console.log(char);
}

const person1 = {
  name: "John",
  age: 30,
  country: "USA"
};

for (const value of Object.values(person)) {
  console.log(value);
}

const person2 = {
  name: "John",
  age: 30,
  country: "USA"
};

for (const property in person) {
  console.log(person[property]);
}

const colors = new Set(["red", "green", "blue"]);

for (const color of colors) {
  console.log(color);
}


const numbersArray = [];

for (let i = 1; i <= 10; i++) {
  numbersArray.push(i);
}

console.log(numbersArray);

for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}

for (const num of numbersArray) {
  console.log(num);
}


//       FOR IN LOOP:
// a.
const myObject = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3"
};

// b.
for (const property in myObject) {
  console.log(`Property: ${property}, Value: ${myObject[property]}`);
}

// c.
const myArray = ["item1", "item2", "item3"];

// d.
for (const item of myArray) {
  console.log(item);
}

const person = {
  name: "John",
  age: 30,
  country: "USA"
};

for (const property in person) {
  console.log(property);
}

const numbersNumber = [1, 2, 3, 4, 5];

for (const index in numbers) {
  console.log(index);
}

const message = "Hello, world!";

for (const index in message) {
  console.log(message[index]);
}

const scores = new Map([
  ["John", 95],
  ["Jane", 85],
  ["Doe", 70]
]);

for (const key in scores) {
  console.log(`Name: ${key}, Score: ${scores[key]}`);
}

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022
};

for (const property in car) {
  console.log(car[property]);
}

  //  ASYNC/AWAIT:
  async function delayedGreeting(name) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(`Hello, ${name}!`);
  }
  
  delayedGreeting("John");

  async function fetchData() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return { data: "Some data" };
  }
  
  async function getData() {
    const result = await fetchData();
    console.log(result);
  }
  
  getData();

  async function fetchUsers() {
    await new Promise(resolve => setTimeout(resolve, 4000));
    return ["User1", "User2", "User3"];
  }
  
  async function getUsers() {
    const users = await fetchUsers();
    console.log(users);
  }
  
  getUsers();

  async function fetchData(id) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    return `Data for ID ${id}`;
  }
  
  async function getDataById(id) {
    const data = await fetchData(id);
    console.log(data);
  }
  
  getDataById(123);

  let globalCounter = 0;

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function incrementCounter(value) {
  await timeout(1000);
  globalCounter += 1;
  return { globalCounter, value };
}

async function main() {
  for (let i = 0; i < 10; i++) {
    const result = await incrementCounter(i);
    console.log(result);
  }
}

main();

// CLOSURES (WITH SCOPE & ITS BENEFITS’S):
function counter() {
  let count = 0;

  return function() {
    count++;
    console.log(`Count: ${count}`);
  };
}

const incrementCounter = counter();
incrementCounter(); // Output: Count: 1
incrementCounter(); // Output: Count: 2


function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10
const triple = createMultiplier(3);
console.log(triple(5)); // Output: 15

function secretMessage(secret) {
  return function(message) {
    console.log(`Secret: ${secret}, Message: ${message}`);
  };
}

const revealSecret = secretMessage("Hidden");
revealSecret("Hello!"); // Output: Secret: Hidden, Message: Hello!

function calculate(a, b) {
  return {
    add: function() {
      return a + b;
    },
    multiply: function() {
      return a * b;
    }
  };
}

const calculator = calculate(3, 4);
console.log(calculator.add()); // Output: 7
console.log(calculator.multiply()); // Output: 12


  
  
  
  