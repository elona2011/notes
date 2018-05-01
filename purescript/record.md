# RowCons

The RowCons "missingID" Boolean r1 r2 constraint tells the compiler that if you add row ( missingId :: Boolean ) to r1, you will get r2.

```
a :: RowCons "missingID" Boolean r1 r2 => Eff r2 Unit -> Eff r1 Unit
```

https://www.dgendill.com/posts/programming/2017-06-16-purescript-rowcons-union-constraint.html


# get keys

```
module Main where

import Prelude
import Data.List (List,(:))
import Data.Monoid (mempty)
import Data.Symbol (class IsSymbol, SProxy(..), reflectSymbol)
import Type.Row (class RowLacks, class RowToList, Cons, Nil, RLProxy(..), kind RowList)
import Control.Monad.Eff.Console (log)
import Data.Foldable

class Keys (xs :: RowList) where
  keysImpl :: RLProxy xs -> List String
  
instance nilKeys :: Keys Nil where
  keysImpl _ = mempty
  
instance consKeys :: (IsSymbol name, Keys tail) => Keys (Cons name ty tail) where
  keysImpl _ = first : rest
    where
      first = reflectSymbol (SProxy :: SProxy name)
      rest = keysImpl (RLProxy :: RLProxy tail)
      
keys :: forall row r1. RowToList row r1 => Keys r1 => Record row -> List String
keys _ = keysImpl (RLProxy :: RLProxy r1)

main = traverse_ log $ keys {a:1,b:2}
```

https://speakerdeck.com/justinwoo/rowlist-fun-with-purescript