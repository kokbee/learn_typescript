https://github.com/kokbee/learn_typescript.git/*function logMaessage(value: any) {
  console.log(value)
}*/

// union type: 하나이상의 값으로 받을 수 있음
function logMessage(value: string | number) {
  console.log(value)
}

// 타입 추론, 타입 가드도 할 수 있다.
function logMessage2(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number')
}

logMessage('hello')
logMessage(100)

// # Intersection 타입 문법
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}
// 두개의 인터페이스에 있는 속성을 사용할 수 있을것 같지만, 둘다 공통적으로 사용해야하기에 공통적인 속성으로 만 가능하다.
function askSomeone(someone: Developer | Person) {
  someone.name; // O
  someone.age; // X
}
