# DOMContentLoaded

在html和静态js执行完成后，触发。与css、image等无关

# trigger event manually

```js
if (typeof window.CustomEvent == "function") {
    //chrome/ff
    var event = new CustomEvent('change', {
        bubbles: true,
        detail: 'aaaaa'
    });
    document.getElementById('deadline').dispatchEvent(event);
} else {
    //ie10
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", true, true);
    document.getElementById('deadline').dispatchEvent(evt);
}
```