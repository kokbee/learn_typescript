// type script 선언방식

// 문자, 숫자
const str: string = 'hello'
const num: number = 10

// 배열
const arr: Array<number> = [1,2,3]
const arr2: Array<string> = ['test', 'test2', 'test3']
const items: number[] = [1,2,3]
const items2: string[] = ['test', 'test2', 'test3']

// 튜플
const tuple: [string, number] = ['test', 1000]

// 객체: 기본
const obj: object = {}
// 객체: type 선언 없이 생성
const person: object = {
  name: 'test',
  age: 25,
}
// 객체: type 선언
const person2: { name: string, age: number } = {
  name: 'test',
  age: 25,
}

// 진위값
const bool = true
const bool2: boolean = false
