//远程获取新闻类别数据

import axios from "axios";
import {APPCODE} from "./config"
 
//该步骤需要安装第三方库axios完成Ajax请求

//获取新闻的类别(新闻频道查询)
export async function getNewsChannels() {
    //await:等待远程请求,注意 这里与async共用
    var resp = await axios.get("http://ali-news.showapi.com/channelList", {
        headers: {
            Authorization: `APPCODE ${APPCODE}`,
        }
    });
    // console.log(resp.data.showapi_res_body.pagebean.contentlist);
    // return resp.data.showapi_res_body.pagebean.contentlist;
    // console.log(resp.data.showapi_res_body.channelList);
    return resp.data.showapi_res_body.channelList;
}


//获取所有的新闻
/**
 * 按照频道分页获取新闻
 * @param {*} channelId 频道id
 * @param {*} page      页码（从1开始）
 * @param {*} limit     每页数据量
 */
export async function getNews(channelId, page = 1, limit = 10) {
    var resp = await axios.get("http://ali-news.showapi.com/newsList", {
        headers: {
            Authorization: `APPCODE ${APPCODE}`,
        },
        params: {
            channelId,
            page,
            maxResult: limit,
            needAllList: false, //是否需要返回所有的图片及段落属行allList。
            needContent: 1,  //新闻正文
        }
    });
    return resp.data.showapi_res_body.pagebean;
}

// getNews("5572a108b3cdc86cf39001cd");