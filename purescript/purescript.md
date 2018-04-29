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

# ADT

ADT定义了数据类型，当参数定义为该ADT后，就需要实现定义过的所有类型。因为List的ADT为``Data List a = Nil | Cons a (List a)``

```
sum :: List Int -> Int
sum Nil = 0
sum (Cons x xs) = x + sum xs
```