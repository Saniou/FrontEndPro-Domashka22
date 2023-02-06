'use strict';
// function* Foo() {
//     console.log('start')
//     yield 1
//     yield 2
//     yield 3
//     console.log('finish')
//   }
  
//   const iterator = Foo()
//   iterator.next().value // 1
//   iterator.next().done // false
  
// *******
  
function Boo() {
    let count = 0;
    return {
        next: function () {
            count++
            if (count == 1) {
                console.log('start!');
                return {value: count, done: false}
            } else if (count <= 3 && count >= 2) {
                return {value: count, done: false};
            } else {
                console.log('finish')
                return {value: undefined, done: true}
            }
        }
    }
}

const booFunc = Boo();
// booFunc.next() // 1 
// booFunc.next() // 2 
// booFunc.next() // 3 
// booFunc.next() // finish
