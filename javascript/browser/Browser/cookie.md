改cookie时要记得设domain和path

```js
document.cookie = "authId=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; domain=.ng.com; path=/;";
```

# iframe中的cookie问题

如果父页面和iframe页面的domain一样,cookie正常工作
如果父页面和iframe页面的domain不一样，且是http，子页面的cookie无法设置，无论是后台还是js设置
如果父页面和iframe页面的domain不一样，且是https，且SameSite=None; Secure only，此情况下才能工作
