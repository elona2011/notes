# 1. Two Sum

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
