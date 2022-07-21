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
var mockjs_1 = require('mockjs');
var baseUrl = 'http://localhost:8080';
mockjs_1["default"].mock(baseUrl + '/checklist', 'get', {
    "status": 200,
    "data": {
        "items|5": [
            {
                "event_id": "@id",
                "event_name": "@ctitle(10)",
                "checked": "@boolean",
                "comment": "@ctitle(20)",
                "color|1": ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3']
            }
        ]
    }
});
//# sourceMappingURL=index.js.map