// const numbers = [3, 4, 5, 6, 7, 8, 9];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


//map-[Inside the map, If we pass a function then it's can take a maximum of three parameters:(element, index, array)]
const numbers = [3, 4, 5, 6, 7, 8, 9];

function square(element){
    return element * element;
}

numbers.map(function(element, index, array){
    console.log(element, index, array);
});
// console.log(output);
