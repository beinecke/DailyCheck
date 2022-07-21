var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
var vue_1 = require('vue');
var App_vue_1 = require('./App.vue');
var router_1 = require('./router');
var vuetify_1 = require('./plugins/vuetify');
var webfontloader_1 = require('./plugins/webfontloader');
var axios_1 = require('axios');
var index_1 = require('./mock/index');
require('./assets/site.css');
axios_1["default"].defaults.baseURL = 'http://localhost:8080';
console.log('import all', index_1["default"]);
webfontloader_1.loadFonts();
vue_1.createApp(App_vue_1["default"])
    .use(router_1["default"])
    .use(vuetify_1["default"])
    .mount('#app');
//App.config.globalProperties.$axios = axios
//# sourceMappingURL=main.js.map