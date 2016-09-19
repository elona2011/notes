## bases

ng-if会创建一个子scope

在link方法中更新view，可能需要$render

```
ctrl.$setViewValue('');
ctrl.$render();
```

## priority

When there are multiple directives defined on a single DOM element, sometimes it is necessary to specify the order in which the directives are applied. The priority is used to sort the directives before their compile functions get called. Priority is defined as a number. Directives with greater numerical priority are compiled first. Pre-link functions are also run in priority order, but post-link functions are run in reverse order. The order of directives with the same priority is undefined. The default priority is 0.

directive中的link是post-link

## transclude

1.2和１。３版本的区别：将transclude scope作为directive scope的子scope，即$parent的引用将不同

http://stackoverflow.com/questions/16653004/confused-about-angularjs-transcluded-and-isolate-scopes-bindings

the transcluded html is a new child scope of the current scope on that DOM.

http://teropa.info/blog/2015/06/09/transclusion.html

## compile

```
//空间类型下拉select
MetronicApp.directive('roomTypes', ['ajax1', '$compile', function(ajax1, $compile) {
    var types = {}
    var q = ajax1('/configitem/queryItemsByConfigId/12/').then(function(data) {
        types = data.obj;
    })

    return {
        require: ['ngModel'],
        restrict: 'A',
        compile: function(elm, attrs) {
            attrs.$set('ngOptions', 'm as m.name for m in directive.roomTypes')
            attrs.$set('ngModel', 'directive.roomTypeSel')

            return function postLink(scope, element, attrs) {
                q.then(function() {
                    scope.directive || (scope.directive = {});
                    scope.directive.roomTypes = types
                    scope.directive.roomTypeSel = types[0]
                })
            }
        }
    };
}]);
```

# Services

## Service vs provider vs factory

http://hellobug.github.io/blog/angularjs-providers/

http://stackoverflow.com/questions/15666048/angularjs-service-vs-provider-vs-factory

https://gist.github.com/Mithrandir0x/3639232

# Unit-test

http://www.bradoncode.com/tutorials/angularjs-unit-testing/

why

Testing is an investment. If your code will be around for a while, or have other people using it, it's an investment well worth making. If your code will only ever be used by you, and isn't relied upon by a business, well, do whatever you like.

## karma

### install

```
cnpm install karma --save-dev
cnpm install -g karma-cli
```

必须按上述命令安装，否则会出问题

karma.conf.js

files需包含所有依赖的库文件
