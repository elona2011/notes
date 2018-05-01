# RowCons

The RowCons "missingID" Boolean r1 r2 constraint tells the compiler that if you add row ( missingId :: Boolean ) to r1, you will get r2.

```
a :: RowCons "missingID" Boolean r1 r2 => Eff r2 Unit -> Eff r1 Unit
```

https://www.dgendill.com/posts/programming/2017-06-16-purescript-rowcons-union-constraint.html
