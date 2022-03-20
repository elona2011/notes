```py
from datetime import datetime

tick = datetime.now()

# run the tests here   

tock = datetime.now()   
diff = tock - tick    # the result is a datetime.timedelta object
print(diff.total_seconds())
```

```py
from datetime import datetime, timedelta
last_hour_date_time = datetime.now() - timedelta(hours = 1)
print last_hour_date_time.strftime('%Y-%m-%d %H:%M:%S')
```

```py
tock = datetime.now(timezone.utc)
tock = tock.replace(tzinfo=None)
diff = tock - row[0]
if diff.total_seconds() > 60*10:
    pass
```