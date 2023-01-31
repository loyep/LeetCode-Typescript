import twoSum from '.';
import { expect, describe, it } from 'vitest';

describe('Two Sum', () => {
  it('Example 1', () => {
    const nums = [2, 7, 11, 15],
      target = 9;
    const result = twoSum(nums, target);

    expect(result).toStrictEqual([0, 1]);
  });

  it('Example 2', () => {
    const nums = [3, 2, 4],
      target = 6;
    const result = twoSum(nums, target);

    expect(result).toStrictEqual([1, 2]);
  });

  it('Example 3', () => {
    const nums = [3, 3],
      target = 6;
    const result = twoSum(nums, target);

    expect(result).toStrictEqual([0, 1]);
  });
});
