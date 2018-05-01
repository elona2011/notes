# Instance Dependencies

``show x``和``show y``是依赖``Show a, Show b``而生成

```
instance showEither :: (Show a, Show b) => Show (Either a b) where
  show (Left x) = "(Left " <> show x <> ")"
  show (Right y) = "(Right " <> show y <> ")"

instance eqList :: Eq a => Eq (List a) where
  ...
```

example:

```
module Main ( class Show,show ) where

class Show a where
  show :: a -> String
  
instance showString :: Show String where
  show a = a
  
instance showArray :: Show a => Show (Array a) where
  show [a] = show a
  show _ = "2"
  
main = show ["1"]
```

```js
"use strict";
var Show = function (show) {
    this.show = show;
};
var showString = new Show(function (a) {
    return a;
});
var show = function (dict) {
    return dict.show;
};
var showArray = function (dictShow) {
    return new Show(function (v) {
        if (v.length === 1) {
            return show(dictShow)(v[0]);
        };
        return "2";
    });
};
var main = show(showArray(showString))([ "1" ]);
module.exports = {
    Show: Show, 
    show: show, 
    showString: showString, 
    showArray: showArray
};
```

# Functional Dependencies

``| stream -> element``用于类型推断，可从instance中定义的stream类型推断出element的类型

```
class Stream stream element | stream -> element where
  uncons :: stream -> Maybe { head :: element, tail :: stream }
```