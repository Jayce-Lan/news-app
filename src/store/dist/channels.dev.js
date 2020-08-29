"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newsService = require("../services/newsService");

//新闻仓库的数据
var _default = {
  namespaced: true,
  //开启命名空间
  state: {
    data: [],
    isLoading: false
  },
  mutations: {
    /**
     * 里配置多种变异方式、 变化属性
     * @param {*} state     原状态
     * @param {*} payload   负荷（运载状态）
     */
    setIsLoading: function setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    setData: function setData(state, payload) {
      state.data = payload;
    }
  },
  //有副作用的异步同步操作
  actions: {
    /**
     * 
     * @param {*} context   仓库对象
     */
    fetchDatas: function fetchDatas(context) {
      var channels;
      return regeneratorRuntime.async(function fetchDatas$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //只能通过提交mutations来触发
              //设置isLoading = true;
              context.commit("setIsLoading", true);
              _context.next = 3;
              return regeneratorRuntime.awrap((0, _newsService.getNewsChannels)());

            case 3:
              channels = _context.sent;
              //设置data = channels; isLoading = false;
              context.commit("setData", channels);
              context.commit("setIsLoading", false);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }
};
exports["default"] = _default;