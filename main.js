// const b = [
//   {
//     name: "Afruz",
//     surname: "Oxunov",
//     address: {
//         city: 'Tashkent',
//         stree: 77,
//     }
//   },
// ];
// console.log(b[0]);

// for (let i = 0; i < colors.length; i++) {
//     console.log(`я люблю кушац`);
// }
// const color = ['red', 'green', 'blue', 'pink', 'black']
// console.log(`у меня ${color.length} элементов`);

// if (color.length == 1) {
//     console.log('у меня один элемент');

// } else if (color.length == 2) {
//     console.log('у меня два элемента');

// } else if (color.length == 3) {
//     console.log('у меня три элемента');

// } else if (color.length == 4) {
//     console.log('у меня четыре элемента');

// } else {
//     console.log('у меня пять элементов');

// }

// const colors = ["red", "green", "blue", "pink", "black"];
// colors.forEach(element => {
//     console.log(element);
    
// })
// console.log(colors.length);

const fruits = ['apple', 'banana', 'orange', 'mango', 'grape']

const list = document.querySelector('.list')

// list.append(fruits[0])
fruits.forEach((el, index) => {
    const text = document.createElement('h1')
    text.innerText = el
    text.classList.add(`color${index}`)
    list.append(text)
    text.onclick = () => {
        text.innerText = `вы кликнули на ${el}`
        
    }
})
