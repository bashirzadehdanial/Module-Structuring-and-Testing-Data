const { getAngleType } = require("./get-angle-type");

test("Returns Right angle if angle is equal 90 degree", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test("Returns Acute angle if angle is equal less than 90 degree", () => {
  expect(getAngleType(70)).toEqual("Acute angle");
});

test("Returns Obtuse angle if angle is greater than 90 and also less than 180 degree", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

test("Returns Straight angle if angle is equal to 180 degree", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("Returns Reflex angle if angle is greater than 180 and also less than 360 degree", () => {
  expect(getAngleType(220)).toEqual("Reflex angle");
});

test("Returns Invalid angle if angle is out of the valid degrees", () => {
  expect(getAngleType(450)).toEqual("Invalid angle");
});
