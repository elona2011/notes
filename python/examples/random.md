# int

```py
from random import randint

value = randint(5, 200)
m = round(uniform(2.0, 5.0), 1) # 2.5 3.1
print(value)
```

# string

```py
import string
import random

''.join(random.choices(string.ascii_uppercase + string.digits, k=20))
''.join(random.choices(string.ascii_letters + string.digits, k=20))
```