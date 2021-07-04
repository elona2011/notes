```js
import Vuex from 'vuex'

export default {
    title: '销管/ErrorLog',
    component: ErrorLog,
    decorators: [
        (story, context) => {
            Vue.use(Element, {
                // size: Cookies.get('size') || 'medium', // set element-ui default size
                // i18n: (key, value) => i18n.t(key, value)
                zhLocale
            })
            Vue.use(Vuex)
            const store = new Vuex.Store({
                getters: {
                    errorLogs() {
                        return [{
                            err:{
                                message:'error message',
                                stack: 'js stack'
                            },
                            url:'http://test-dp.zking.com/xxxx',
                            vm:{
                                $vnode:{
                                    tag:'tag tag'
                                }
                            },
                            info:'info info'
                        }]
                    }
                }
            })
            const WrappedComponent = story();
            return Vue.extend({
                components: { WrappedComponent },
                template: '<wrapped-component/>',
                store
            })
        }
    ],
};
```