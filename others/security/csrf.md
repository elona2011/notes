# How it works

1 User is logged into their bank’s website: https://example.com.

2 The bank website has a “money transfer” function: https://example.com/manage_money/transfer.do.

3 The “money transfer” function accepts the following POST parameters: toAccount and amount.

4 While logged into https://example.com the user receives an email from whom they think is their friend.

5 The user clicks the link inside the email to access a cat video: https://attacker-site.co.uk/cats.htm.

6 cats.htm whilst displaying said cat video, also makes a client-side AJAX request to https://example.com/manage_money/transfer.do POSTing the values toAccount=1234 and amount=100 transferring £100 to the attacker’s account from the victim.

# solve

1 http自定义头部可以强制浏览器在跨域ajax的情况下，使用CORS的options请求

2 服务端发送额外的随机数用于校验接口请求，不能放置在cookie中

```
X-Requested-With=XMLHttpRequest
```

https://markitzeroday.com/x-requested-with/cors/2017/06/29/csrf-mitigation-for-ajax-requests.html