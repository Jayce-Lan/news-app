"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewsChannels = getNewsChannels;
exports.getNews = getNews;

var _axios = _interopRequireDefault(require("axios"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//远程获取新闻类别数据
function getNewsChannels() {
  var resp;
  return regeneratorRuntime.async(function getNewsChannels$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("http://ali-news.showapi.com/channelList", {
            headers: {
              Authorization: "APPCODE ".concat(_config.APPCODE)
            }
          }));

        case 2:
          resp = _context.sent;
          return _context.abrupt("return", resp.data.showapi_res_body.channelList);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
} //获取所有的新闻

/**
 * 按照频道分页获取新闻
 * @param {*} channelId 频道id
 * @param {*} page      页码（从1开始）
 * @param {*} limit     每页数据量
 */


function getNews(channelId) {
  var page,
      limit,
      resp,
      _args2 = arguments;
  return regeneratorRuntime.async(function getNews$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          page = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;
          limit = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 10;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].get("http://ali-news.showapi.com/newsList", {
            headers: {
              Authorization: "APPCODE ".concat(_config.APPCODE)
            },
            params: {
              channelId: channelId,
              page: page,
              maxResult: limit,
              needAllList: false,
              //是否需要返回所有的图片及段落属行allList。
              needContent: 1 //新闻正文

            }
          }));

        case 4:
          resp = _context2.sent;
          return _context2.abrupt("return", resp.data.showapi_res_body.pagebean);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
} // getNews("5572a108b3cdc86cf39001cd");