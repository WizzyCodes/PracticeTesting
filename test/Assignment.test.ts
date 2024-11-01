import {
  booleanTest,
  nullTest,
  numberTest,
  stringTest,
  undefinedTest,
  ArrayTest,
  ArrayTTest2,
  increaseAge,
} from "../Assignment";

describe("Testing function with their datatypes", () => {
  test("to return boolean", () => {
    let res = booleanTest(false);
    expect(res).toBe(true);
    expect(res).toBeTruthy();
    expect(res).not.toBeFalsy();
    expect(res).toBeDefined();
    expect(res).not.toBeUndefined();
  });
  test("to return null", () => {
    let res = nullTest(null);
    expect(res).toBe(null);
    expect(res).toBeNull();
    expect(res).not.toBeUndefined();
    expect(res).toBeDefined();
    expect(res).toBeFalsy();
    expect(res).not.toBeTruthy();
  });
  test("to return string", () => {
    let res = stringTest("hello");
    expect(res).toBe("hello");
    expect(res).toBeTruthy();
    expect(res).not.toBeFalsy();
    expect(res).toBeDefined();
    expect(res).not.toBeUndefined();
    expect(res).toMatch(/o/);
  });
  test("to always return positive number", () => {
    let res = numberTest(5, 2);
    expect(res).toBe(3);
    expect(res).toBeTruthy();
    expect(res).not.toBeFalsy();
    expect(res).toBeDefined();
    expect(res).not.toBeUndefined();
  });
  it("to be undefined", () => {
    let res = undefinedTest(undefined);
    expect(res).toBe(undefined);
    expect(res).toBeUndefined();
    expect(res).not.toBeNull();
    expect(res).not.toBeDefined();
    expect(res).not.toBeTruthy();
    expect(res).toBeFalsy();
  });

  test("to return an array and double it", () => {
    let res = ArrayTest([1, 2, 3]);
    expect(res).toEqual([2, 4, 6]);
    expect(res).not.toBeUndefined();
    expect(res).not.toBeNull();
    expect(res).toBeDefined();
    expect(res).toBeTruthy();
    expect(res).not.toBeFalsy();
  });
  test("the shopping list array has milk on it", () => {
    let res = ArrayTTest2("milk");
    let value = res.length;
    expect(res).toContain("milk");
    expect(new Set(res)).toContain("milk");
    expect(value).toBeGreaterThan(value - 1);
  });
  test("should return a new object with the age incremented by 1", () => {
    let input = increaseAge({ name: "Alice", age: 30 });
    expect(input).toEqual({ name: "Alice", age: 31 });
  });
});
