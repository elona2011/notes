```py
import json

x =  '{"name":"John"}'
y = json.loads(x)
print(y["name"])

x = {"name": "John"}
y = json.dumps(x)
```