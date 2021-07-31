// 인터페이스
interface User {
  name: string
  age: number
}

// 변수에 사용하는 경우
const minsu: User = { name: 'hi', age: 28 }

// 함수의 매개변수에 사용하는 경우
function getUser(user: User) {
  console.log(user)
}
getUser(minsu)

// 함수의 전체 타입에 사용하는 경우
interface SumFunction {
  (a: number, b: number): number
}
let sus: SumFunction
sus = function (num1: number, num2: number): number {
  return num1 + num2
}

// 배열의 인덱싱에 사용하는 경우 -> 1번째,2번째 파이썬 딕셔너리 처럼 구현해줌
interface StringArray {
  [index: number]: string
}
let arr: StringArray
arr[0] = 'hi'
arr[1] = 10

// 인터페이스 확장
interface Person {
  name: string
  age: number // 옵셔널 선택자 ? 동일하게 적용 가능
}

// 인터페이스값이 중복이기에 Person 인터페이스를 상속(extends)받음 = {name: string, age: number, language: string} ㅇㅣ됨
interface Developer extends Person {
  language: string
}
const kokbee: Developer = { name: 'minsu', age: 20, language: 'ts' }
