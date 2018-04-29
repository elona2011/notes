```js
import CryptoJS from 'crypto-js'
import aes from 'crypto-js/aes'

let iv = getRandomCodes(16)
      let dataAES = aes
        .encrypt(finalData, CryptoJS.enc.Utf8.parse('1234567812345678'), {
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
          iv: CryptoJS.enc.Utf8.parse(iv),
        })
        .toString()
```