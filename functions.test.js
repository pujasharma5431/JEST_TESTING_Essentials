const functions = require('./functions');
test('Add 2+2 to equal 4',()=>{
    expect(functions.add(2,2)).toBe(5);
});

// Not to be

test('Add 2+2 to equal not equals to 5',()=>{
    expect(functions.add(2,2)).not.toBe(6);
});


// toBeNull matches only null
test('Should be nulll',()=>{
    expect(functions.isNull()).toBeNull();
});
 
// Check Values
test('Should be falsy',()=>{
    expect(functions.checkValue(0)).toBeFalsy();
});

