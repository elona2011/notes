https://github.com/paf31/24-days-of-purescript-2016

# partial

https://github.com/purescript/documentation/blob/master/guides/The-Partial-type-class.md

# ADT

ADT定义了数据类型，当参数定义为该ADT后，就需要实现定义过的所有类型。因为List的ADT为``Data List a = Nil | Cons a (List a)``

```
sum :: List Int -> Int
sum Nil = 0
sum (Cons x xs) = x + sum xs
```

# row polymorphism

可理解为任意多个参数，``{ first :: String, last :: String | r }``为``Record (firstName :: String, lastName :: String | r)``的语法糖 

```
showPerson :: forall r. { first :: String, last :: String | r } -> String
showPerson { first: x, last: y } = y <> ", " <> x
```

``#``说明参数顺序是可变的，如同Record中的属性

```
> :kind Record
# Type -> Type
```

# try purescript

output

```
module Main where

import Prelude
import TryPureScript (DOM, h1, h2, p, text, list, indent, link, render, code)
  
main=render $ p $ text "2"
```