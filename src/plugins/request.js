var axios_1 = require('axios');
var API = axios_1["default"].create({
    baseURL: 'http://localhost:8000',
    timeout: 2000
});
exports["default"] = API;
//# sourceMappingURL=request.js.map