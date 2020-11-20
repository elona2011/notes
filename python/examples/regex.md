```py
import re
r = re.search(r'aa','baa')
if r != None:
    pass
```

# 多行替换

```py
import re

re_GetNoticeIsUnread = re.compile(
        b"\$\.ajax\({.*/Home/GetNoticeIsUnread.*}\);", re.DOTALL)
content = re.sub(re_GetNoticeIsUnread, b'', content)
```

# replace on bytes

```py
test = re.sub(b"\x1b.*\x07", b'', test)
```