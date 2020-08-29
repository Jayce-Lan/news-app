"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _channels = _interopRequireDefault(require("./channels"));

var _loginUser = _interopRequireDefault(require("./loginUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//安装
_vue["default"].use(_vuex["default"]); //仓库一个vue仓库，每个vue项目只能存在一个仓库


var store = new _vuex["default"].Store({
  //合并
  modules: {
    channels: _channels["default"],
    loginUser: _loginUser["default"]
  }
});
var _default = store;
exports["default"] = _default;