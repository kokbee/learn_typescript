interface DropdowonItem<T> {
  value: T,
  selected: boolean,
}

// 드롭다운 인터페이스의 제네릭을 스트링으로 사용
const emails: DropdowonItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
]

// 드롭다운 인터페이스의 제네릭을 넘버로 사용
const numberOfProducts: DropdowonItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
]

function createDropdownItem(item: DropdowonItem<string> | DropdowonItem<number> ) {
  const option = document.createElement('option')
  option.value = item.value.toString()
  option.innerText = item.value.toString()
  option.selected = item.selected
  return option
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email)
  const selectTag = document.querySelector('#email-dropdown')
  selectTag.appendChild(item)
})
