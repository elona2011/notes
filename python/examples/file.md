```py
with open('aaa.png','rb') as f:
    data = f.read()

with open('aaa.png','wb') as f:
    for chunk in request.FILES['media'].chunks():
        f.write(chunk)
```

https://docs.python.org/3/library/functions.html#open

```py
from pathlib import Path
Path("/tmp/directory").mkdir(parents=True, exist_ok=True)
```

# rm folder

```py
import shutil

shutil.rmtree('/folder_name')
```