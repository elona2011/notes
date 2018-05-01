
```
module Main ( get ) where

import Data.Function.Uncurried (runFn2, runFn3)
import Data.Record.Unsafe (unsafeGetFn, unsafeSetFn, unsafeDeleteFn)
import Data.Symbol (class IsSymbol, SProxy(..), reflectSymbol)

get
  :: forall r r' l a
   . IsSymbol l
  => RowCons l a r' r
  => SProxy l
  -> Record r
  -> a
get l r = runFn2 unsafeGetFn (reflectSymbol l) r

main = get (SProxy :: SProxy "aa") { aa: 1 }
```

``l``为Symbol

``IsSymbol l``生成的instance为``dictIsSymbol``

``RowCons l a r' r``校验``l``和``r``中的属性``aa``是否一致

```js
"use strict";
var Data_Function_Uncurried = require("../Data.Function.Uncurried");
var Data_Record_Unsafe = require("../Data.Record.Unsafe");
var Data_Symbol = require("../Data.Symbol");
var get = function (dictIsSymbol) {
    return function (dictRowCons) {
        return function (l) {
            return function (r) {
                return Data_Record_Unsafe.unsafeGetFn(Data_Symbol.reflectSymbol(dictIsSymbol)(l), r);
            };
        };
    };
};
var main = get(new Data_Symbol.IsSymbol(function () {
    return "aa";
}))()(Data_Symbol.SProxy.value)({
    aa: 1
});
module.exports = {
    get: get
};
```
