console.log('it works');
function debounce(func, wait) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      return func.apply(this, args);
    }, wait);
  };
}

const debouncFunction = debounce(() => {
  console.log('debounce');
}, 5000);

window.addEventListener('resize', debouncFunction);

function hello(params = 'jhon') {
  // console.log(params);
  const greet = `${this.name} : ${this.age}`;
  return greet;
}

const person = {
  name: 'John',
  age: 30,
};

// direct call and return the output
const grt = hello.call(person);
// console.log(grt);

// console.log(hello.apply(person, ['Jhon Deo']));

const sayHello = hello.bind(person);

// const res = sayHello('Jhon Sina');

// console.log(res);
// Provide some examples of non-boolean value corrcion to a boolean one
const data = undefined;

function check() {
  if (!data) {
    // when value is ''(empty string), 0 , -0, NaN, null, undefined
    console.log('data is required');
    return; // stop execution after false
  }
  // when value is 'hello', true, [], {}, {a:43}
  console.log(data);
}
check(data);

const hello = () => {
  console.log('hello');
};

// ==
// comment !=
// &&
