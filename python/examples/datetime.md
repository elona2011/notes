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