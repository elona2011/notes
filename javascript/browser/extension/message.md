# 向tab页发消息

```js
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { action: "消息内容" }, function (response) {
    window.close()
  });
});
```

# 向background发消息

```js
chrome.runtime.sendMessage({
  msg: 'openUrl',
  value: name,
}).then(res => {
  console.log(res)
})
```