var vue_router_1 = require('vue-router');
var HomeView_vue_1 = require('../views/HomeView.vue');
var Day_vue_1 = require('../views/Day.vue');
var routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView_vue_1["default"]
    },
    {
        path: '/day',
        name: 'day',
        component: Day_vue_1["default"]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: , import: function () { } /* webpackChunkName: "about" */, '../views/AboutView.vue': 
    }
];
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHistory(process.env.BASE_URL),
    routes: routes
});
exports["default"] = router;
//# sourceMappingURL=index.js.map