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

// ==
// comment !=
// &&

function Person() {
  this.age = 0;

  // using arrow function
  // setInterval(() => {
  //   // console.log(this.age);
  //   console.log(this);
  //   // this.age++;
  // }, 1000);
  // print global scope of this : window
  setInterval(function () {
    /**
     * log global object window
     */
    // console.log(this);
  }, 1000);
}

const p = new Person();
// console.log(p);

/**
 *
 * @author saroj8455
 * make multiple API requests in parallel using promise
 */
async function parallelAPICall() {
  const postAPI = await fetch('https://jsonplaceholder.typicode.com/posts');
  const commentsAPI = await fetch(
    'https://jsonplaceholder.typicode.com/comments'
  );

  // handel error using try catch
  try {
    const [postResponse, commentResponse] = await Promise.all([
      postAPI,
      commentsAPI,
    ]);
    const post = await postResponse.json();
    const comments = await commentResponse.json();
    // console.log(post);
  } catch (error) {
    console.warn(error);
  }
}

parallelAPICall();

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  console.log(posts);
}

async function getComments() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await response.json();
  console.log(comments);
}
// getPosts();
// getComments();

function pagination(pageSize, pageNumber) {
  const posts = [
    { id: 1, title: 'post 1' },
    { id: 2, title: 'post 2' },
    { id: 3, title: 'post 3' },
    { id: 4, title: 'post 4' },
    { id: 5, title: 'post 5' },
    { id: 6, title: 'post 6' },
    { id: 7, title: 'post 7' },
    { id: 8, title: 'post 8' },
    { id: 9, title: 'post 9' },
    { id: 10, title: 'post 10' },
  ];
  const start = (pageNumber - 1) * pageSize;
  const end = pageNumber * pageSize;
  console.log('start', start);
  console.log('end', end);
  return posts.slice(start, end);

  // console.log('start', pageSize * pageNumber);
  // console.log('end', pageSize * pageNumber + pageSize);
  // const res = posts.slice(2, 4);
  // console.log(res);
}

console.log(pagination(2, 1));

// Event Delegation Example
const parent = document.querySelector('.pagination');

parent.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    handelButton(e.target);
  }
});

function handelButton(button) {
  // extract the textContent
  const text = button.textContent;
  console.log('button clicked', text);
  // get data  pagination method
  const data = pagination(2, text);
  console.log(data);
}
