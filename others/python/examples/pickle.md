```py
import pickle

with open('./CookieJar', 'rb') as f:
    cookieJar = pickle.load(f)

with open('./CookieJar', 'wb') as f:
    pickle.dump(session.cookies, f)
```