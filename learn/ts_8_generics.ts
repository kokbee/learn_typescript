// 함수 시작전에 값의 타입을 정하는것으로 코드 중복 감소 및 코드의 재사용이 용이해짐
function logText<T>(value: T):T {
  console.log(value)
  return value
}

const str = logText<string>('abc')


// 인터페이스 제네릭 사용 방법

interface test<T> {
  value: T,
  bool: boolean,
}

// 제네릭 인터페이스에 한곳에 선언을 하였기에 기본적으로 타입 하나를 넣어줘야함
// 여기선 스트링을 기본 타입값으로 선언함
const obj: test<string> = {value: 'abc', bool: true}
