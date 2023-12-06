export default function productExceptSelf(nums: number[]): number[] {
  let product = 1;
  let answers: number[] = new Array<number>(nums.length);

  for (let i = 0; i < nums.length; i += 1) {
    answers[i] = product;
    product *= nums[i];
  }

  product = 1;

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    answers[i] *= product;
    product *= nums[i];
  }

  return answers;
}
