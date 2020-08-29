<template>
  <div>
      <Banner :banners="banners" :duration="3000" />
      <Channels @change="handleChange"/>
      <Loading v-show="isLoading" />
      <NewsList v-show="!isLoading" :news="news"/>
  </div>
</template>

<script>
import Banner from '../components/Banner';
import Channels from '../components/news/Channels';
import NewsList from '../components/news/NewsList';
import Loading from '../components/Loading';
import {getNews} from '../services/newsService';

export default {
    data() {
        return {
            //banner传入图片
            banners: [
              {
                url: require("@/assets/banner/1.png"), 
                link: "https://www.baidu.com/"
              },
              {
                url: require("@/assets/banner/2.png"), 
                link: "http://news.baidu.com/"
              },
              {
                url: require("@/assets/banner/3.png"), 
                link: "https://tieba.baidu.com/index.html"
              },
            ],
            news: [],
            //判断是否正在加载
            isLoading: true
        }
    },
    methods: {
        //处理子组件上的change方法
        async handleChange(channelId) {
            //可以获取被点击选项的id
            /**
             * 获取新闻，首页只需要一页，十条新闻
             */
            this.isLoading = true;
            var resp = await getNews(channelId, 1, 10);
            // console.log(resp.contentlist);
            this.news = resp.contentlist;

            //新闻加载完毕后，isLoading为false
            this.isLoading = false;
        }   
    },
    components: {
        Banner,
        Channels,
        NewsList,
        Loading 
    },
}
</script>

<style>

</style>