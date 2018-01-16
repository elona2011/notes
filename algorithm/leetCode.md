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

# 25. Reverse Nodes in k-Group

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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head) return null
  debugger
  let p = [],
    bp = null,
    ap

  p.push(head)
  for (let i = 1; i < k; i++) {
    p[i - 1] && p[i - 1].next && p.push(p[i - 1].next)
  }

  ap = p.length ? p[p.length - 1].next : null
  if (p.length === k) head = p[p.length - 1]
  while (p.length === k) {
    for (let i = p.length - 1; i > 0; i--) {
      p[i].next = p[i - 1]
    }
    p[0].next = ap
    if (bp) bp.next = p[p.length - 1]

    bp = p[0]
    p = []
    if (ap) {
      p.push(ap)
      for (let i = 1; i < k; i++) {
        p[i - 1] && p[i - 1].next && p.push(p[i - 1].next)
      }
      ap = p.length ? p[p.length - 1].next : null
    }
  }
  return head
}
```

# 26. Remove Duplicates from Sorted Array

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let start = 0,
    end = nums.length - 1,
    index = 0,
    i = 0
  debugger
  while (i < nums.length) {
    while (end - start > 1) {
      let mid = Math.floor((end + start) / 2),
        r = nums[mid]

      if (r === nums[i]) {
        start = mid
      } else {
        end = mid
      }
    }
    if (end > start && nums[end] !== nums[start]) {
      index++
      nums[index] = nums[end]
    }
    start = i = Math.max(end, i + 1)
    end = nums.length - 1
  }
  return index + 1
}
```

# 27. Remove Element

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      if (i !== index) {
        nums[index] = nums[i]
      }
      index++
    }
  }
  return index
}
```

# 28. Implement strStr()

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0
  let i = 0
  debugger
  while (i < haystack.length - needle.length + 1) {
    if (haystack[i] === needle[0]) {
      let r = true,
        firstCharIndex
      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + j] === needle[0]) {
          firstCharIndex = firstCharIndex ? firstCharIndex : j
        }
        if (haystack[i + j] !== needle[j]) {
          r = false
          break
        }
      }
      if (r) return i
      i += firstCharIndex ? firstCharIndex : 1
    } else {
      i++
    }
  }
  return -1
}
```

# 29. Divide Two Integers

```js
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let dividend0 = Math.abs(dividend),
    divisor0 = Math.abs(divisor),
    s = dividend0 + '',
    d = 0,
    r = 0
  debugger
  for (let i = 0; i < s.length; i++) {
    let rr = 0,
      mul = Math.pow(10, s.length - 1 - i)

    d = d * 10 + +s[i]
    while (d >= divisor0) {
      d -= divisor0
      rr++
    }
    r += rr * mul
  }

  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) return -r
  else {
    if (r === 2147483648) return r - 1
    else return r
  }
}
```

# 30. Substring with Concatenation of All Words

```js
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  let i = 0,
    len = words[0].length,
    r = [],
    cache = {},
    cacheLen = 0
  debugger
  for (let n of words) {
    if (cache[n] === undefined) cache[n] = { num: 1 }
    else cache[n].num++
  }
  cacheLen = Object.keys(cache).length

  while (i < s.length - len + 1) {
    let first = s.slice(i, i + len)
    if (cache[first] !== undefined) {
      if (cacheLen === 1) {
        if (
          s.slice(i + len, i + words.length * first.length) ===
          first.repeat(words.length - 1)
        ) {
          r.push(i)
        } else {
          break
        }
      } else {
        let all = true
        cache[first].i = i
        cache[first].numNow = 1
        for (let j = 1; j < words.length; j++) {
          let after = s.slice(i + len * j, i + len * j + len)
          if (cache[after] !== undefined && cache[after].i !== i) {
            cache[after].i = i
            cache[after].numNow = 1
          } else if (
            cache[after] !== undefined &&
            cache[after].i === i &&
            cache[after].numNow < cache[after].num
          ) {
            cache[after].numNow++
          } else {
            all = false
            break
          }
        }
        if (all) r.push(i)
      }
    }
    i++
  }
  return r
}
```

# 31. Next Permutation

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length < 2) return
  debugger
  let notEdit = true
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      let tmp = nums[i - 1]
      nums[i - 1] = nums[i]
      nums[i] = tmp
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[i - 1] && nums[j] > tmp) {
          let tmp1 = nums[i - 1]
          nums[i - 1] = nums[j]
          nums[j] = tmp1
        }
      }

      for (let j = i; j < nums.length - 1; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          if (nums[j] > nums[k]) {
            let tmp = nums[k]
            nums[k] = nums[j]
            nums[j] = tmp
          }
        }
      }
      notEdit = false
      break
    }
  }
  if (notEdit) {
    nums.sort((a, b) => a - b)
  }
}
```

# 32. Longest Valid Parentheses

```js
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let c = [],
    i = 0,
    len = 0,
    success = []

  while (i < s.length) {
    if (s[i] === '(') {
      c.push(i)
    } else if (c.length > 0) {
      let left = c.pop(),
        right = i,
        isAdded = false

      for (let n of success) {
        if (n[0] <= left && n[1] >= right) {
          isAdded = true
          break
        }
        if (n[1] === left - 1) {
          n[1] = right
          len = Math.max(len, n[1] - n[0] + 1)
          isAdded = true
          break
        }
      }
      if (!isAdded) {
        success.push([left, right])
        len = Math.max(len, right - left + 1)
      }
    }
    i++
  }
  return len
}
```

# 33. Search in Rotated Sorted Array

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  debugger
  if (nums.length === 0) return -1
  if (target === nums[0]) return 0
  else if (target > nums[0]) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === target) {
        return i
      } else if (nums[i] < nums[i - 1]) {
        return -1
      }
    }
  } else if (target === nums[nums.length - 1]) return nums.length - 1
  else {
    for (let i = nums.length - 2; i > 0; i--) {
      if (nums[i] === target) return i
      else if (nums[i] > nums[i + 1]) {
        return -1
      }
    }
  }
  return -1
}
```

# 34. Search for a Range

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 0 || nums[0] > target || nums[nums.length - 1] < target)
    return [-1, -1]
  debugger
  let before = -1,
    after = -1
  if (nums[0] !== target) {
    let i = 1,
      j = nums.length - 1
    while (1) {
      if (i >= j - 1) {
        if (nums[i] === target && nums[i - 1] < target) {
          before = i
        }
        if (nums[j] === target && nums[j - 1] < target) {
          before = j
        }
        break
      }
      if (nums[i] === target && nums[i - 1] < target) {
        before = i
        break
      } else {
        let mid = Math.floor((i + j) / 2),
          midValue = nums[mid]

        if (midValue < target) {
          i = mid
        } else {
          j = mid
        }
      }
    }
  } else {
    before = 0
  }
  if (nums[nums.length - 1] !== target) {
    let i = before,
      j = nums.length - 2
    while (1) {
      if (i >= j - 1) {
        if (nums[j] === target && nums[j + 1] > target) {
          after = j
        }
        if (nums[i] === target && nums[i + 1] > target) {
          after = i
        }
        break
      }
      if (nums[j] === target && nums[j + 1] > target) {
        after = j
        break
      } else {
        let mid = Math.floor((i + j) / 2),
          midValue = nums[mid]

        if (midValue > target) {
          j = mid
        } else {
          i = mid
        }
      }
    }
  } else {
    after = nums.length - 1
  }
  return [before, after]
}
```

# 35. Search Insert Position

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums[0] >= target) return 0
  if (nums[nums.length - 1] < target) return nums.length

  let i = 0,
    j = nums.length - 1,
    mid = Math.floor((i + j) / 2)

  while (mid !== i && mid !== j) {
    if (nums[mid] > target) {
      j = mid
    } else if (nums[mid] < target) {
      i = mid
    } else {
      return mid
    }
    mid = Math.floor((i + j) / 2)
  }
  return j
}
```

# 36. Valid Sudoku

未填满的也需要验证单个数字是否出现两次及以上

```js
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let n of board) {
    let hash = {}
    for (let num of n) {
      if (num === '.') {
        continue
      } else if (hash[num] === undefined) {
        hash[num] = 1
      } else {
        return false
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    let hash = {}
    for (let n of board) {
      if (n[i] === '.') {
        continue
      } else if (hash[n[i]] === undefined) {
        hash[n[i]] = 1
      } else {
        return false
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let hash = {}
      matrix: for (let k = i * 3; k < i * 3 + 3; k++) {
        for (let l = j * 3; l < j * 3 + 3; l++) {
          if (board[k][l] === '.') {
            continue
          } else if (hash[board[k][l]] === undefined) {
            hash[board[k][l]] = 1
          } else {
            return false
          }
        }
      }
    }
  }
  return true
}
```

#

```js
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  debugger
  let poss = {},
    lastDotNum = 0,
    firstEqual = true,
    possOrigin = {},
    mock = [],
    correctBoard = []

  while (1) {
    let dotNum = 0
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '.') {
          dotNum++
          let p = i + '' + j
          poss[p] = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
          poss[p] = poss[p].filter(
            n => board[i].find(e => e === n) === undefined
          )
          poss[p] = poss[p].filter(
            n => board.map(e => e[j]).find(e => e === n) === undefined
          )
          let rows = board.filter((n, k) => {
            if (i < 3) {
              return k < 3
            } else if (i < 6) {
              return k > 2 && k < 6
            } else {
              return k >= 6
            }
          })
          for (let i = 0; i < 3; i++) {
            rows[i] = rows[i].filter((n, k) => {
              if (j < 3) {
                return k < 3
              } else if (j < 6) {
                return k > 2 && k < 6
              } else {
                return k >= 6
              }
            })
          }
          let rect = rows.reduce((a, b) => a.concat(b))
          poss[p] = poss[p].filter(n => rect.find(e => e === n) === undefined)
          if (poss[p].length === 1) {
            board[i][j] = poss[p][0]
            delete poss[p]
          } else if (poss[p].length === 0) {
          }
        }
      }
    }
    if (lastDotNum === dotNum) {
      if (firstEqual) {
        firstEqual = false
        for (let n of board) {
          let row = []
          for (let e of n) {
            row.push(e)
          }
          correctBoard.push(row)
        }
        for (let i = 0; i < 9; i++) {
          for (let j = 0; j < 9; j++) {}
        }
        Object.assign(possOrigin, poss)
      }
      top: for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (board[i][j] === '.') {
            let p = i + '' + j
            mock.push(p)
            board[i][j] = poss[p][0]
            delete poss[p]
            break top
          }
        }
      }
      debugger
    } else {
      lastDotNum = dotNum
    }
    if (!dotNum) break
  }
}
```
