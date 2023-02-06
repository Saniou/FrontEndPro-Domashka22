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
  
function Boo(){
    let count = 0;
    return function () {
        count++
        if(count == 1){
            console.log('start!');
            return(count)
        } else if(count <= 3 && count >= 2){
            return (count);
        } else {
            return ('finish!')
        }
    }   
}
const next = Boo();
// next() //1 
// next() //2
// next() //3
// next() //'finish!'