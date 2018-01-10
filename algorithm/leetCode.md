常见题：15,16

# 1. Two Sum

对于无序数列，可用 hash；但如果是有序数列，可采用二分法。如果是求所有解，则可使用两个相向移动的指针索引，感觉会比二分法快，详见 3Sum

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

# 2. Add Two Numbers

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
    more = 0,
    origin,
    last

  if (sum > 9) {
    more = 1
    origin = new ListNode(sum - 10)
  } else {
    origin = new ListNode(sum)
  }
  last = origin

  while ((l1 && l1.next) || (l2 && l2.next) || more) {
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
    sum = (l1 && l1.val) + (l2 && l2.val) + more
    if (sum > 9) {
      more = 1
      last = last.next = new ListNode(sum - 10)
    } else {
      more = 0
      last = last.next = new ListNode(sum)
    }
  }
  return origin
}
```

# 3. Longest Substring Without Repeating Characters

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let word = {},
    max = 0

  for (let i = 0; i < s.length; i++) {
    let p = word[s[i]]
    if (p) {
      max = Math.max(max, Object.keys(word).length)
      if (max >= 26) return max
      for (let n in word) {
        if (word[n] <= p) {
          delete word[n]
        }
      }
    }
    word[s[i]] = i
  }
  max = Math.max(max, Object.keys(word).length)
  return max
}
```

# 5. Longest Palindromic Substring

```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let r = ''

  for (let i = 0; i < s.length; i++) {
    debugger
    let p = ''
    if (s[i] === s[i + 1]) {
      p = s[i] + s[i + 1]

      let j = 2,
        a = i + 1 - j,
        b = i + j
      while (b < s.length && a >= 0) {
        if (s[b] === s[a]) {
          p = s[a] + p + s[b]
          j++
          a = i + 1 - j
          b = i + j
        } else break
      }
      if (p.length > r.length) r = p
    }
    if (s[i - 1] && s[i - 1] === s[i + 1]) {
      p = s[i - 1] + s[i] + s[i + 1]

      let j = 2,
        a = i - j,
        b = i + j
      while (b < s.length && a >= 0) {
        if (s[b] === s[a]) {
          p = s[a] + p + s[b]
          j++
          a = i - j
          b = i + j
        } else break
      }
      if (p.length > r.length) r = p
    }
  }

  if (r === '') r = s[0]
  return r
}
```

# 6. ZigZag Conversion

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let r = '',
    index = 0
  if (numRows === 1) return s
  while (index < s.length) {
    r += s[index]
    index += (numRows - 1) * 2
  }
  for (let i = 1; i < numRows - 1; i++) {
    index = i
    while (index < s.length) {
      r += s[index]
      index += (numRows - 1 - i) * 2
      if (index >= s.length) break
      r += s[index]
      index += i * 2
    }
  }
  index = numRows - 1
  while (index < s.length) {
    r += s[index]
    index += (numRows - 1) * 2
  }
  return r
}
```

# 7. Reverse Integer

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let isNegative = false,
    r

  if (x < 0) {
    isNegative = true
    x = -x
  }
  r = +(x + '')
    .split('')
    .reverse()
    .join('')
  debugger
  if (r > Math.pow(2, 31)) {
    return 0
  } else {
    if (isNegative) {
      return -r
    } else {
      return r
    }
  }
}
```

# 9. Palindrome Number

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  if (
    (x + '')
      .split('')
      .reverse()
      .join('') ===
    x + ''
  )
    return true
  else return false
}
```

# 10. Regular Expression Matching

```js
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let pi = 0,
    si = 0,
    maxNum
  debugger
  while (pi < p.length) {
    if (p[pi] === '.') {
      if (p[pi + 1] === '*') {
        return expand('.')
      } else {
        si++
        pi++
      }
    } else {
      if (p[pi + 1] === '*') {
        return expand(p[pi])
      } else if (p[pi] === s[si]) {
        si++
        pi++
      } else return false
    }
  }
  if (pi === p.length && si === s.length) {
    return true
  } else return false

  function expand(c) {
    for (let i = s.length - si; i >= 0; i--) {
      let newp = c.repeat(i) + p.slice(pi + 2)
      if (isMatch(s.slice(si), newp)) return true
    }
    return false
  }
}
```

# 11. Container With Most Water

```js
var maxArea = function(height) {
  let i = 0,
    j = height.length - 1,
    min = Math.min(height[i], height[j]),
    r = (j - i) * min

  while (1) {
    if (i >= j) break

    if (height[i] <= min) {
      i++
      continue
    }
    if (height[j] <= min) {
      j--
      continue
    }
    min = Math.min(height[i], height[j])
    r = Math.max(r, (j - i) * min)
  }
  return r
}
```

# 14. Longest Common Prefix

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  debugger
  if (strs.length === 0) return ''
  else if (strs.length === 1) return strs[0]
  else return strs.reduce((a, b) => prefix(a, b))

  function prefix(s1, s2) {
    let len = Math.min(s1.length, s2.length),
      r = ''

    for (let i = 0; i < len; i++) {
      if (s1[i] === s2[i]) r += s1[i]
      else return r
    }
    return r
  }
}
```

# 15. 3Sum

主要思路是将 3Sum 转化为 2Sum，可行但是效率低。排序后采用二分法，可以提高一定效率。但由于此题求所有解，采用两个相向移动的指针将更快，见 Discuss

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let r = [],
    i = 0
  debugger
  nums.sort((a, b) => a - b)

  for (; i < nums.length; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let sum = 0 - nums[i]
    if (nums[i + 1] > sum / 2) break
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let start = j + 1,
        end = nums.length - 1,
        value = sum - nums[j],
        index = Math.floor((start + end) / 2)
      if (nums[start] === value) {
        r.push([nums[i], nums[j], nums[start]])
      } else if (nums[end] === value) {
        r.push([nums[i], nums[j], nums[end]])
      } else {
        while (index > start) {
          if (nums[index] > value) {
            end = index
            index = Math.floor((start + end) / 2)
          } else if (nums[index] < value) {
            start = index
            index = Math.floor((start + end) / 2)
          } else {
            r.push([nums[i], nums[j], nums[index]])
            break
          }
        }
      }
    }
  }
  return r
}
```

# 16. 3Sum Closest

双指针移动算法，适合有序数列使用

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  debugger
  let r = nums[0] + nums[1] + nums[2] - target
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let j = i + 1,
      k = nums.length - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k],
        newr = sum - target

      r = Math.abs(newr) < Math.abs(r) ? newr : r

      if (sum > target) {
        k--
      } else if (sum < target) {
        j++
      } else {
        return target
      }
    }
  }
  return target + r
}
```

# 17. Letter Combinations of a Phone Number

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  debugger
  let dict = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  if (digits.length === 0) return []
  if (digits.length === 1) return dict[digits]

  return Array.from(digits).reduce(
    (a, b) => {
      let r = []
      for (let n of dict[b]) {
        r = r.concat(a.map(e => e + n))
      }
      return r
    },
    ['']
  )
}
```

# 18. 4Sum

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let r = []
  nums.sort((a, b) => a - b)
  debugger
  for (let [i, n] of nums.entries()) {
    if (i > 0 && n === nums[i - 1]) continue
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let k = j + 1,
        l = nums.length - 1

      while (l > k) {
        sum = nums[i] + nums[j] + nums[k] + nums[l]
        if (sum > target) {
          l--
        } else if (sum < target) {
          k++
        } else {
          r.push([nums[i], nums[j], nums[k], nums[l]])
          do {
            l--
            k++
          } while (nums[l] === nums[l + 1] && nums[k] === nums[k - 1])
        }
      }
    }
  }
  return r
}
```

# 19. Remove Nth Node From End of List

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let p = head,
    bp = head,
    ap = head,
    i = 0

  while (p.next) {
    if (i >= n) bp = bp.next
    if (n >= 2 && i >= n - 2) ap = ap.next
    p = p.next
    i++
  }
  if (bp === p) {
    head = null
  } else if (n === 1) {
    bp.next = null
  } else if (n === i + 1) {
    head = head.next
  } else {
    bp.next = ap
  }
  return head
}
```

# 20. Valid Parentheses

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  for (let n of s) {
    if (n === '[' || n === '(' || n === '{') {
      stack.push(n)
    } else if (n === ']' || n === ')' || n === '}') {
      let r = stack.pop()
      if (
        (r === '[' && n === ']') ||
        (r === '(' && n === ')') ||
        (r === '{' && n === '}')
      ) {
        continue
      } else return false
    }
  }
  if (stack.length) return false
  else return true
}
```

# 21. Merge Two Sorted Lists

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
var mergeTwoLists = function(l1, l2) {
  let pl1 = l1,
    pl2 = l2,
    r,
    pr

  if (!l1) return l2
  if (!l2) return l1
  if (l1.val > l2.val) {
    pr = r = l2
    pl2 = pl2.next
  } else {
    pr = r = l1
    pl1 = pl1.next
  }

  do {
    if (!pl1) {
      pr.next = pl2
      pl2 = pl2.next
    } else if (!pl2) {
      pr.next = pl1
      pl1 = pl1.next
    } else if (pl1.val > pl2.val) {
      pr.next = pl2
      pl2 = pl2.next
    } else {
      pr.next = pl1
      pl1 = pl1.next
    }
    pr = pr.next
  } while (pl1 || pl2)

  return r
}
```

# 22. Generate Parentheses

本题使用 n 简化为 n-1,n-2,...不可解，因为无法转化为简单的递归问题

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let r = [
      {
        s: '(',
        stack: ['('],
      },
    ],
    len = 2 * n

  for (let i = 1; i < len; i++) {
    let newr = []
    for (let n of r) {
      if (n.stack.length === 0) {
        newr.push({
          s: n.s + '(',
          stack: ['('],
        })
      } else if (len - i - n.stack.length < 2) {
        n.stack.pop()
        newr.push({
          s: n.s + ')',
          stack: n.stack,
        })
      } else {
        newr.push({
          s: n.s + '(',
          stack: n.stack.concat(['(']),
        })
        n.stack.pop()
        newr.push({
          s: n.s + ')',
          stack: n.stack,
        })
      }
    }
    r = newr
  }
  return r.map(n => n.s)
}
```

# 24. Swap Nodes in Pairs

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let p0,
    p1,
    p2,
    p3 = null

  if (head) p1 = head
  else return head
  if (p1.next) p2 = p1.next
  else return head
  if (p2.next) p3 = p2.next
  p = p2
  do {
    p1.next = p3
    p2.next = p1
    if (p0) p0.next = p2
    p0 = p1
    p1 = p3
    p2 = p3 && p3.next ? p3.next : null
    p3 = p2 && p2.next ? p2.next : null
  } while (p2)

  return p
}
```
