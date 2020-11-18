```py
import re
r = re.search(r'aa','baa')
if r != None:
    pass
```

# replace on bytes

```py
test = re.sub(b"\x1b.*\x07", b'', test)
```