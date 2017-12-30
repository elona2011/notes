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

# 2.Add Two Numbers

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum = l1.val + l2.val,
        more=0,
        origin,
        last
    
    if(sum>9){
        more = 1
        origin = new ListNode(sum -10)
    }else{
        origin = new ListNode(sum)
    }
    last = origin
    
    while(l1&&l1.next || l2&&l2.next || more){
        l1 = l1?l1.next:null
        l2 = l2?l2.next:null
        sum = (l1 && l1.val)+(l2&&l2.val)+more
        if(sum>9){
            more = 1
            last = last.next = new ListNode(sum-10)
        }else{
            more = 0
            last = last.next = new ListNode(sum)
        }
    }
    return origin
};
```

