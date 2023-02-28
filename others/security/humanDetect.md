# cookie持久化（僵尸cookie）

cookie持久化是使cookie难以删除或者删除后能够恢复的技术。基本思路是将数据写入浏览器的各个维度，一旦cookie被删除，尝试从各种维度恢复。无论用户如何清除数据，只要有一个维度有数据就可以恢复cookie。

后来在和设备指纹的同事沟通后发现，这块实际上就是设备指纹的功能，考虑使用设备指纹的代码实现。

存储维度：

* Standard HTTP Cookies
* Flash Local Shared Objects
* Silverlight Isolated Storage
* CSS History Knocking
* Storing cookies in HTTP ETags (Backend server required)
* Storing cookies in Web cache (Backend server required)
* HTTP Strict Transport Security (HSTS) Pinning (works in Incognito mode)
* window.name caching
* Internet Explorer userData storage
* HTML5 Session Storage
* HTML5 Local Storage
* HTML5 Global Storage
* HTML5 Database Storage via SQLite
* HTML5 Canvas - Cookie values stored in RGB data of auto-generated, force-cached PNG images (Backend server required)
* HTML5 IndexedDB
* Java JNLP PersistenceService
* Java exploit CVE-2013-0422 - Attempts to escape the applet sandbox and write cookie data directly to the user's hard drive.

参考：

https://en.wikipedia.org/wiki/Zombie_cookie

http://webpolicy.org/2015/01/14/turn-verizon-zombie-cookie/

https://samy.pl/evercookie/

https://freedom-to-tinker.com/2014/08/07/the-hidden-perils-of-cookie-syncing/

# 脚本探测

js:
https://stackoverflow.com/questions/29798010/javascript-detect-whether-an-event-is-triggered-by-user-and-not-programmatical

jquery:
https://stackoverflow.com/questions/6692031/check-if-event-is-triggered-by-a-human

# js单点加载

页面注入