enum test {
  test1,
  test2,
  test3
}

let mytest = test.test1
console.log(mytest)


enum Answer {
  Yes = 'Y',
  No = 'N',
}

function question(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('Yes!')
  }
  if (answer === Answer.No) {
    console.log('Noooooooo!!!!')
  }
}
