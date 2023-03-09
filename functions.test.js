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

// Check Values
test('Should be Puja Sharma',()=>{
    expect(functions.createUser()).toEqual({
        firstName: 'Puja',
        lastName: 'Sharma'
    });
});
// Less than abd Freater than

test("should be less than 1600",()=>{
    const load1= 800;
    const load2=600;
    expect(load1+load2).toBeLessThan(1600);
})

//  Regular expression

test('There is no I team',()=>{
    expect('teami').not.toMatch(/I/)
})

// Arrays
test("Admin should be in usernames",()=>{
    usernames=['PP','AG','PS']
    expect(usernames).toContain('PP')
})