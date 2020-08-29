<template>
    <div>
        <div class="type-title">
            {{channelName}}
        </div>
        <Loading v-show="isLoading" />
        <NewsList :news="news" v-show="!isLoading" />
        <Pager :page="page" :limit="limit" :total="total" :panelNumber="panelNumber" @pageChange="handleChange" />
    </div>
</template>

<script>
import Pager from '@/components/Pager';
import NewsList from '@/components/news/NewsList';
import * as newsServe from '@/services/newsService';    //导入该选项的所有函数
import Loading from '../components/Loading';

export default {
    components: {
        Pager,
        NewsList ,
        Loading
    },
    data() {
        return {
            channelName: "",    //标题名称
            // page: 1,   //页码
            limit: 15,  //页容量
            total: 0,   //总新闻数
            panelNumber:10,
            news: [],
            isLoading: true
        }
    },
    computed: {
        //检查地址栏页码属性
        page() {
            return + this.$route.query.page || 1;
        },

        //从仓库中获取共享数据
        setChannelName() {
            var channels = this.$store.state.channels.data;
            if (channels.length > 0) {
                var channel =  channels.find((item)=> item.channelId === this.$route.params.id);
                return channel.name;
            }
            return '';
        }
    },
    methods: {
        //获取页码
        handleChange(newPage) {
            this.$router.push("?page=" + newPage)
            // this.page = newPage;
            this.setDetas();
        },
        //获取频道id,设置频道名称
        // async setChannelName() {
        //     var channels = await newsServe.getNewsChannels();
        //     var channel = channels.find(
        //         (item)=> item.channelId === this.$route.params.id
        //     );
        //     this.channelName = channel.name;
        // },
        //设置所有新闻的相关数据
        async setDetas() {
            this.isLoading = true
            var resp = await newsServe.getNews(this.$route.params.id, this.page, this.limit);
            this.total = resp.allNum;
            this.news = resp.contentlist;
            this.isLoading = false;
        }
    },
    watch: {
        //监控组件的变化
        "$route.params.id": {
            immediate: true,
            handler() {
                // console.log(this.$route);   //可以读取地址栏参数
                // this.page = 1;
                // this.setChannelName();
                this.setDetas();
            }
        }
    },
}
</script>

<style scoped>
    .type-title {
        font-size: 2em;
        color: #888;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
    }
</style>