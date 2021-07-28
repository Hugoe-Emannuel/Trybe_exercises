const assert = require('assert');
// escreva a função addOne aqui
const addOne = (array) => {
    let output = [];
    for (let i = 0; i < array.length; i +=1) {
        if (array[i] === unchanged ) {
            array[i] -= 1;
            output = array[i]
            return output
        } else {
             array[i] += 1
        output.push(array[i])
        }
    }
    return output
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);