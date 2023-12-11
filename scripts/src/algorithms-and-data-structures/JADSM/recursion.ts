function countDown(num: number): void {
  if (num <= 0) {
    console.log("done");
    return;
  }

  console.log("num", num);
  countDown(num - 1);
}

function sumRange(num: number): number {
  if (num === 1) return 1;

  return num + sumRange(num - 1);
}

function factorial(num: number): number {
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}

function collectOddValues(arr: number[]): number[] {
  let result: number[] = [];

  function helper(helperInput: number[]) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

const odds = collectOddValues([0, 1, 2, 3, 4, 5, 6, 7]);

function fib(n: number): number {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

// console.log("fib(5)", fib(5));

function power(base: number, exponent: number): number {
  if (exponent <= 0) return 1;

  return base * power(base, exponent - 1);
}

// console.log("power(2, 4)", power(2, 4));

function productOfArray(nums: number[]): number | null {
  if (nums.length === 0) return null;

  function helper(arr: number[]): number {
    if (arr.length === 0) return 1;

    return arr[0] * helper(arr.slice(1));
  }

  return helper(nums);
}

// console.log("productOfArray([1,2,3])", productOfArray([1, 2, 3]));

function recursiveRange(num: number): number {
  if (num <= 0) return 0;

  return num + recursiveRange(num - 1);
}

console.log("recursiveRange(5)", recursiveRange(5));
