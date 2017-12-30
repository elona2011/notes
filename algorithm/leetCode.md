# Two Sum

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash = {}

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] !== undefined) {
      hash[nums[i] + 'a'] = i
    } else {
      hash[nums[i]] = i
    }

    let num0 = target - nums[i]
    if (hash[num0] !== undefined) {
      if (num0 === nums[i] && hash[num0 + 'a'] === undefined) {
        continue
      }
      return [hash[num0], i]
    }
  }
}
```
