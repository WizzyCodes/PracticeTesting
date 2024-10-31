let third: number = 5 - 2;
let stat1 = third === 1;

export const booleanTest = (test: boolean): boolean => {
  return test === stat1;
};

export const nullTest = (test: null): null => {
  return test;
};
console.log(nullTest(null));

export const stringTest = (test: string): string => {
  return test;
};

export const numberTest = (a: number, b: number): number => {
  return a - b;
};

export const undefinedTest = (test: undefined): undefined => {
  return test;
};
