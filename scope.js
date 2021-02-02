//===Scope===//
//[Local Scope]  //we can't call outside the function. Only we can call the variable inside the function. it's call local scope
function sum(first, second){
    let result = first + second;
    console.log(result);
    return result;
}
const output = sum(3, 7);
console.log(output);


//Global Scope //we can call outside the function
let bonus = 20;
function sum2(first, second){
    let result = first + second + bonus;
    console.log(bonus);
    return result;
}
const output2 = sum2(3, 7);
console.log(bonus);
console.log(output2);

//===End Scope===//



//===Block Scope===// [We can't call the variable outside the function for const and let]
let add = 20;
function sum3(first, second){
    let result = first + second + add;
    if(result > 9){
        let mood = 'happy';
        mood = 'fishy';
        mood = 'cranky';
        mood = 'funky';
        console.log(mood);
    }
    console.log(mood);
    return result;
}
const final= sum3(3, 7);
console.log(final);