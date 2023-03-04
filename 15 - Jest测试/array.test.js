const cloneArray = require('./array')

test('properly clones array', ()=>{
    const array = [1,2,3]
    expect(cloneArray(array)).toEqual(array)
})