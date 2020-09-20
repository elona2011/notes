```py
from os import path

path.join('/tmp', foldName, uuid.uuid4().hex)
```

```py
from pathlib import Path

Path(self.folder).mkdir(parents=True, exist_ok=True)
```