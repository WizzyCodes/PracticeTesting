import {
  booleanTest,
  nullTest,
  numberTest,
  stringTest,
  undefinedTest,
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
  });
  test("to return string", () => {
    let res = stringTest("hello");
    expect(res).toBe("hello");
    expect(res).toBeTruthy();
    expect(res).not.toBeFalsy();
    expect(res).toBeDefined();
    expect(res).not.toBeUndefined();
  });
  test("to always return positive number", () => {
    let res = numberTest(5, 2);
    expect(res).toBe(3);
    expect(res).toBeTruthy();
    expect(res).not.toBeFalsy();
    expect(res).toBeDefined();
    expect(res).not.toBeUndefined();
  });
  test("", () => {
    let res = undefinedTest(undefined);
    expect(res).toBe(undefined);
    expect(res).toBeUndefined();
    expect(res).not.toBeDefined();
    expect(res).not.toBeTruthy();
    expect(res).not.toBeFalsy();
  });
});
