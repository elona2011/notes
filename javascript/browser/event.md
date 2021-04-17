# Supporting both TouchEvent and MouseEvent

pointerEvent

https://pawelgrzybek.com/whats-the-deal-with-the-pointer-events-in-javascript/

如果浏览器同时支持touch和mouse事件，那么touch事件将会先于mouse事件触发，用户可以在touch回调中``event.preventDefault()``阻止mouse事件

https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent

# touch-action

css的touch-action可以设置浏览器对pointermove事件的处理，After a short period of time, the (mobile) browser will claim the pointermove event for "native" behavior like panning the page.

https://stackoverflow.com/questions/48124372/pointermove-event-not-working-with-touch-why-not

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