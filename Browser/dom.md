# nodeType

Constant | Value
---|---
Node.ELEMENT_NODE | 1
Node.TEXT_NODE | 3
Node.COMMENT_NODE | 8
Node.DOCUMENT_NODE | 9

https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

# dom ready

```js
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});
```

# TreeWalker

```js
function walkTree(node, callback) {
    var treeWalker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT, null, false)
    while (treeWalker.nextNode() != null) {
        callback(treeWalker.currentNode)
    }
}
```

# NodeList

firefox47版本中,NodeListPrototype不包含数组方法，可按如下方法添加

```js
var arrayMethods = Object.getOwnPropertyNames( Array.prototype );

arrayMethods.forEach( attachArrayMethodsToNodeList );

function attachArrayMethodsToNodeList(methodName)
{
  if(methodName !== "length") {
    NodeList.prototype[methodName] = Array.prototype[methodName];
  }
};
```

https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList

## When is NodeList live and when is it static?

List是static，而不是node是static，node依然是live

Only ``querySelectorAll`` is not live

http://stackoverflow.com/questions/28163033/when-is-nodelist-live-and-when-is-it-static

# Manipulation

HTML String

```
node.innerHTML = htmlString;
node.insertAdjacentHTML('beforeend', '<div></div>')
```

# Selector Matches

```js
element.matches(selector)
```

https://davidwalsh.name/element-matches-selector

# Mutation

```js
var observer = new MutationObserver(function(mutations) {
  [].forEach.call(mutations,function(mutation) {
    console.log(mutation.type);
  });    
});
```

https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver