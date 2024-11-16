const {isValidTriangle} = require("./is-valid-triangle")

test("It should return true, if sum of two sides of the trianglt is greater than the third side",()=>{
    expect(isValidTriangle(3, 2, 4)).toEqual(true);
})



