# type vs data

type定义了一个同名类型，使用上完全等价，最终编译后的代码不存在这个type

data定义了一个全新的类型

# newtype

类型声明中用的是newtype的左边``Builder a b``，如``Builder (Record r1) (Record r2)``
函数定义中用的是newtype的右边``Builder (a -> b)``，如``Builder b``

```
newtype Builder a b = Builder (a -> b)

-- | Build a record, starting from some other record.
build :: forall r1 r2. Builder (Record r1) (Record r2) -> Record r1 -> Record r2
build (Builder b) r1 = b (copyRecord r1)
```

# unsafeCoerce

强制类型转换