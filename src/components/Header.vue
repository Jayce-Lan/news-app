<template>
    <div class="header">
        <div class="header-container">
            <div class="container">
                <div class="logo">
                    <!-- 声明式导航
                        免去点击后再次刷新页面
                        to代表了导航到的位置
                        使用动态链接，匹配路由的名字，由名字定位地址，这样往下组件的地址改变也可以继续使用这个组件
                     -->
                     <router-link :to="{name: 'Home'}">
                          <img src="../assets/LOGO.png" alt="logo" />
                     </router-link>
                </div>
                <ul class="nav">
                    <li><router-link :to="{name:'Home'}">首页</router-link></li>
                    <li v-for="item in data.slice(0, 5)" :key="item.channelId">
                        <!-- 共享仓库属性 -->
                        <router-link :to="{name: 'ChannelNews',params: {id: item.channelId}}">{{item.name}}</router-link>
                    </li>
                </ul>
                <div class="user">
                    <router-link :to="{name: 'Login'}">登录</router-link>
                    <router-link :to="{name: 'Reg'}">注册</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import {getNewsChannels} from '../services/newsService';// 动态读取导航栏
import {mapState} from 'vuex';

export default {
    // data() {
    //     return {
    //         channels: [],

    //     }
    // },
    // async created() {
    //     this.channels = await getNewsChannels();
    // },
    /**
     * 参数1：开启命名空间后的自定义名称
     * 参数2：数组：该命名空间的内部参数
     */
    computed: mapState("channels", ["data", "isLoading"]),
    created() {
            //命名空间/方法，第二个是payload    
            //方法好处：便于监控状态
            this.$store.dispatch("channels/fetchDatas");//一开始就要触发，因此移到main方法中
    },
}
</script>

<style scoped>
    .header {
        height: 60px;
    }
    .header-container {
        height: 60px;
        background: #000;
        color: #fff;
        line-height: 60px;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        width: 100%;
        display: flex;
    }
    .container {
        display: flex;
    }
    .logo a {
        display: flex;
        align-items: center;
        height: 100%;
    }
    .logo img {
        width: 60px;
        height: 60px;
    }
    .nav {
        margin: 0 60px;
        display: flex;
        flex-grow: 1;
    }
    .nav a {
        display: block;
        padding: 0 30px;
    }
    .router-link-exact-active {
        color: #f40;
    }
    .user * {
        margin-left: 10px;
    }
    .hear a {
        color: #fff;
    }
    a {
        color: white;
        text-decoration:none;
    }
    ul li {
        list-style: none    ;
    }
</style>