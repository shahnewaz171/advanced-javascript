// const numbers = [3, 4, 5, 6, 7, 8, 9];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


//=====map-[Inside the map, If we pass a function then it's can take a maximum of three parameters:(element, index, array and gives output always array type)]====//
const numbers = [3, 4, 5, 6, 7, 8, 9];

function square(element){
    return element * element;
}

const result =  numbers.map(function(element, index, array){
    console.log(element, index, array);
});
// console.log(result);


//another
/*const num = [3, 4, 5, 6, 7, 8, 9];

function square(element){
    return element * element;
}

const result2 =  num.map(function(element){
    return element * element;
});
console.log(result2);
*/

//another
const num = [3, 4, 5, 6, 7, 8, 9];

const result2 =  num.map(x => x * x);
console.log(result2);

//====End Map===//




//====Filter===//  [It can fullfil the users given conditions and gives output always array type]
const num1 = [3, 4, 5, 6, 7, 8, 9];

const output =  num.filter(x => x = 5);
console.log(output);

//====End Start Filter===//



//===Find===//     [It gives output only one element]

const num2 = [3, 4, 5, 6, 7, 8, 9];

const isThere =  num2.find(x => x < 5);
console.log(isThere);