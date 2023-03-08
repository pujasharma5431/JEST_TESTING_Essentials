const functions = require('./functions');
test('Add 2+2 to equal 4',()=>{
    expect(functions.add(2,2)).toBe(5);
});
test('Add 2+2 to equal not equals to 5',()=>{
    expect(functions.add(2,2)).not.toBe(6);
});
