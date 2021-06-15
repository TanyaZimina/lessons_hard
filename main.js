let num = 266219;

let array = num.toString().split('');

let result = 1;
for(let i = 0; i < array.length; i++){
    result = array[i]*result;
}
result = result**3;

console.log(result.toString().slice(0, 2));