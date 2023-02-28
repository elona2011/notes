```py
import threading

class myThread (threading.Thread):
    def __init__(self, id):
        threading.Thread.__init__(self)
        self.id = id

    def run(self):
        print("Starting " + self.id)
        newtask(self.id)

thread = myThread(n)
thread.start()
```