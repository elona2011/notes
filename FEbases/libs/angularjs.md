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

1.2和1.3版本的区别：将transclude scope作为directive scope的子scope，即$parent的引用将不同

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

# ng-repeat

ngRepeat使用时要注意传入的是数组还是对象，如果是对象，且使用数组的写法，会导致n的排序为对象key的字母顺序。此情况多发生在，错误地将数组转成了对象，且未发现。如数组[1,2,3,4,5,6,7,8,9,10]排序正常，但对象{1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10}的排序将为{1:1,10:10,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9}

```
<li ng-repeat="phone in phones | filter:query">
  {{phone.name}}
  <p>{{phone.snippet}}</p>
</li>
```

# one time binding

1.3之前版本没有one time binding

在id属性上一次性绑定了modalId

```
MetronicApp.directive('productSelectModal', function() {
    return {
        restrict: 'E',
        require: '?ngModel',
        scope: {
            ngModel: '=?',
            modalId: '@'
        },
        templateUrl: 'tpl/productSelectModal.html',
        link: function(scope, elem, attrs, ctrl) {
            elem.find('.modal.fade.bs-modal-lg').attr('id', scope.modalId);
        }
    };
});
```

# recursion directive

http://stackoverflow.com/questions/14430655/recursion-in-angular-directives

# code reading

http://www.gigamonkeys.com/code-reading/

For AngularJS, I think the best place to start is $scope.$apply(), as this ties together changes to the model and the view. From there, move to one of the simpler directives, perhaps ng:value.
Keep the documentation open while you're doing this.

# ES6

http://martinmicunda.com/2015/07/13/how-to-use-ES2016-decorators-to-avoid-angular-1x-boilerplate-code/

# angular-permission

https://github.com/Narzerus/angular-permission

## 特点

* 内置多种权限指令，对页面局部权限控制
* 多种权限之间支持And、Or、正向、取反控制
* 可在权限之上定义角色控制
* 权限失败时，可根据权限自定义重定向地址
* 根据路由结构，支持权限继承
* 支持异步获取权限配置

## 依赖

angular-permission需要的依赖，dubhe已全部具备，无须任何修改

## 试用

在snds项目上试用本库，已实现以下功能：

* 页面局部基于指令的权限控制
* 路由配置权限控制、角色控制
* 实现异步请求的权限控制
