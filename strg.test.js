const strg=require('./strg');

test("string test case", ()=>{
    expect(strg()).toMatch('Hello')
})