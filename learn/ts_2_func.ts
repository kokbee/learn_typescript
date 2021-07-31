// 함수 파라미터에 타입 정의, 반환값의 타입을 정의할 수 있다. (파라미터 또한 제한시켜준다)
function sum(a: number, b: number): number {
  return a + b
}

// 함수에 파라미터를 선택적으로 하는법 (옵셔널 파라미터)
function string2(a: string, b?: string, c?: string): string {
  return a + b + c
}
