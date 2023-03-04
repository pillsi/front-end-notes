const subtract = require('./subtract')

test('properly substracting two nums', ()=>{
    expect(subtract(1,2)).toBe(-1)
})