分析极验代码时发现的加密数组：该数组在console里查看时展示为无限循环的数组，实际上只包含39个不同的值，通过以下output数组可以简化该无限数组

```js
function B(m, c) {
  var N = 2;
  while (N !== 10) {
    switch (N) {
      case 8:
        N = C < m ? 7 : 11;
        break;
      case 4:
        z[(l + c) % m] = [];
        N = 3;
        break;
      case 5:
        N = l < m ? 4 : 9;
        break;
      case 14:
        z[C][(L + c * C) % m] = z[L];
        N = 13;
        break;
      case 1:
        var l = 0;
        N = 5;
        break;
      case 3:
        l += 1;
        N = 5;
        break;
      case 11:
        return z;
        N = 10;
        break;
      case 9:
        var C = 0;
        N = 8;
        break;
      case 6:
        N = L >= 0 ? 14 : 12;
        break;
      case 13:
        L -= 1;
        N = 6;
        break;
      case 7:
        var L = m - 1;
        N = 6;
        break;
      case 12:
        C += 1;
        N = 8;
        break;
      case 2:
        var z = [];
        N = 1;
        break;
    }
  }
}(39, 9)

let output = []
for (let i = 0; i < 39; i++) {
  for (let j = 0; j < 39; j++) {
    for (let k = 0; k < 39; k++) {
      if (a[i][j] === a[k]) {
        if (!output[i]) {
          output[i] = []
        }
        output[i][j] = k
      }
    }
  }
}

cache = cache.replace(/\[(\d+)]\[(\d+)](\[(\d+)])?(\[(\d+)])?/g, (v, m1, m2, m3, m4, m5, m6, m7, m8) => {
  if (m4 && m6) {
    return `[${output[output[output[m1][m2]][m4]][m6]}]`
  } else if (m4) {
    return `[${output[output[m1][m2]][m4]}]`
  } else {
    return `[${output[m1][m2]}]`
  }
})

fs.writeFileSync(`${process.cwd()}/geeguard.1.3.1_format.js`, cache)
```
