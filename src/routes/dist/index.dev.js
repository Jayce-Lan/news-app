"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//vue-router组件的准备
//1.安装
_vue["default"].use(_vueRouter["default"]); //2.创建路由对象


var router = new _vueRouter["default"](_config["default"]); //导出

var _default = router;
exports["default"] = _default;