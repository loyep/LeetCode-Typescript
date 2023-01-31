function twoSum(nums: number[], target: number): number[] {
  const valueIndexMap = {};

  let result: number[] | null = null;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - nums[i];
    const x = valueIndexMap[complement];

    if (x !== undefined) {
      result = [x, i];
      break;
    }

    valueIndexMap[num] = i;
  }

  return result!;
}

export default twoSum;
