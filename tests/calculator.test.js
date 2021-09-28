var calculator = require("../calculator");

// beforeAll(() => {
//   console.log("Before All");
// });

// afterAll(() => {
//   console.log("After All");
// });

// beforeEach(() => {
//   console.log("Before Each");
// });

// afterEach(() => {
//   console.log("After Each");
// });

// describe("testgroup 1", () => {
//   test("returns word count 3", () => {
//     console.log("Test 1");
//   });

//   test("returns word count 3", () => {
//     console.log("Test 2");
//   });

//   test("returns word count 3", () => {
//     console.log("Test 3");
//   });
// });

test("add 1 and 2 and return 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract 2 and 1 and return 1", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("multiply 1 and 2 and return 2", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
test("divide 4 by 2 and return 2", () => {
  expect(calculator.division(4, 2)).toBe(2);
});
