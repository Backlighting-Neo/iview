/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import iView from '../src/index';

Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
var router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/button',
            component: function(resolve) {
                require(['./routers/button.vue'], resolve);
            }
        }, {
            path: '/card',
            component: function(resolve) {
                require(['./routers/card.vue'], resolve);
            }
        }, {
            path: '/message',
            component: function(resolve) {
                require(['./routers/message.vue'], resolve);
            }
        }, {
            path: '/more',
            component: function(resolve) {
                require(['./routers/more.vue'], resolve);
            }
        }, {
            path: '/page',
            component: function(resolve) {
                require(['./routers/page.vue'], resolve);
            }
        }, {
            path: '/poptip',
            component: function(resolve) {
                require(['./routers/poptip.vue'], resolve);
            }
        }, {
            path: '/radio',
            component: function(resolve) {
                require(['./routers/radio.vue'], resolve);
            }
        }, {
            path: '/select',
            component: function(resolve) {
                require(['./routers/select.vue'], resolve);
            }
        }, {
            path: '/slider',
            component: function(resolve) {
                require(['./routers/slider.vue'], resolve);
            }
        }, {
            path: '/step',
            component: function(resolve) {
                require(['./routers/step.vue'], resolve);
            }
        }, {
            path: '/switch',
            component: function(resolve) {
                require(['./routers/switch.vue'], resolve);
            }
        }, {
            path: '/alert',
            component: function(resolve) {
                require(['./routers/alert.vue'], resolve);
            }
        }, {
            path: '/tag',
            component: function(resolve) {
                require(['./routers/tag.vue'], resolve);
            }
        }, {
            path: '/input',
            component: function(resolve) {
                require(['./routers/input.vue'], resolve);
            }
        }, {
            path: '/tooltip',
            component: function(resolve) {
                require(['./routers/tooltip.vue'], resolve);
            }
        }, {
            path: '/cascader',
            component: function(resolve) {
                require(['./routers/cascader.vue'], resolve);
            }
        }, {
            path: '/transfer',
            component: function(resolve) {
                require(['./routers/transfer.vue'], resolve);
            }
        }, {
            path: '/table',
            component: function(resolve) {
                require(['./routers/table.vue'], resolve);
            }
        }, {
            path: '/dropdown',
            component: function(resolve) {
                require(['./routers/dropdown.vue'], resolve);
            }
        }, {
            path: '/tabs',
            component: function(resolve) {
                require(['./routers/tabs.vue'], resolve);
            }
        }, {
            path: '/menu',
            component: function(resolve) {
                require(['./routers/menu.vue'], resolve);
            }
        }, {
            path: '/date',
            component: function(resolve) {
                require(['./routers/date.vue'], resolve);
            }
        }, {
            path: '*',
            redirect: '/button'
        }
    ]
});

router.beforeEach(function () {
    window.scrollTo(0, 0);
});

router.afterEach(function (transition) {

});

const app = new Vue({
    el: '#app',
    router
})
