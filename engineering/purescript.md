https://github.com/paf31/24-days-of-purescript-2016

# partial

https://github.com/purescript/documentation/blob/master/guides/The-Partial-type-class.md

# Instance Dependencies

``show x``和``show y``是依赖``Show a, Show b``而生成

```
instance showEither :: (Show a, Show b) => Show (Either a b) where
  show (Left x) = "(Left " <> show x <> ")"
  show (Right y) = "(Right " <> show y <> ")"
```

# Functional Dependencies

``| stream -> element``用于类型推断，可从instance中定义的stream类型推断出element的类型

```
class Stream stream element | stream -> element where
  uncons :: stream -> Maybe { head :: element, tail :: stream }
```

# type vs data

type定义了一个同名类型，使用上完全等价，最终编译后的代码不存在这个type

data定义了一个全新的类型

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