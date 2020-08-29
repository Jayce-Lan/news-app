"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

require("./assets/style/style.css");

var _index = _interopRequireDefault(require("./routes/index"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//第三方库文件会自行找寻
//导入全局css
//(如果文件名为index，可以省略，因为系统会自动读取该目录下的index文件)
_vue["default"].config.productionTip = false; //触发频道数据

_store["default"].dispatch("channels/fetchDatas");

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  //3.创建Vue实例的时候创建一个router,配置路由到vue实例中
  router: _index["default"],
  store: _store["default"]
}).$mount('#app');