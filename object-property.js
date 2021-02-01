//Using simple for loop
/*const students = [
    {id:21, name: 'Muhammad'},
    {id:22, name: 'Shahnewaz'},
    {id:23, name: 'Moon'},
    {id:24, name: 'Newaz'}
];
const output = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    output.push(element.id);
}
console.log(output);
//End simple for loop
*/


//Another example using map method and filter method
const students = [
    {id:21, name: 'Muhammad'},
    {id:31, name: 'Shahnewaz'},
    {id:41, name: 'Moon'},
    {id:71, name: 'Newaz'}
];
const names = students.map( s => s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);

const bigger = students.filter(s => s.id > 40);  //Using filter method for condition.
console.log(bigger);

const biggerOne = students.find(s => s.id > 40);  //It gives output only one first element
console.log(biggerOne);