//==break Method==//
const nums = [1,2,3,4,5,6,7,8];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    // console.log(element);
    if(element > 3){
        break;
    }
    console.log(element);
}
//==End break Method==//
const numbers = [1,-2,3,-4,5,-6,7,8];
for (let i = 0; i < numbers.length; i++) {
    const element2 = numbers[i];
    // console.log(element);
    if(element2 < 0){
        continue;
    }
    console.log(element2);
}
