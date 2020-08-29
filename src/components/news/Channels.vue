<template>
    <div class="news-types" v-if="data.length > 0">
        <!-- 
            通过动态class=active来确定是否被选中状态
            通过swichTo来获取id，渲染按钮
         -->
        <div 
        class="item" 
        v-for="item in showChannels" 
        :key="item.channelId" 
        :class="{active: item.channelId === chooseId}"
        @click="switchTo(item.channelId)"
        >
            <span class="name">{{item.name}}</span>
        </div>
        <!-- 
            根据是否展开来展示文字
            prevent:阻止事件默认行为
         -->
        <a href="" @click.prevent="isCollapse=!isCollapse">{{isCollapse ? "展开" : "收起"}}</a>
    </div>
</template>

<script>
// @表示src目录
import {getNewsChannels} from "@/services/newsService";
import {mapState} from 'vuex';

export default {
    data() {
        return {
            isCollapse: true,   //当前是否为折叠状态
            chooseId: null,     //当前选中的频道
        };
    },
    computed: {
        ...mapState("channels", ["data"]),
        //需要显示的频道
        showChannels() {
            if (this.isCollapse) {
                return this.data.slice(0, 8);
            } else {
                return this.data;
            }
        }
    },
    /*async created() {
        /** 渲染流程：
         * 频道数组channels为空=>渲染=>触发created()=>远程获取频道数据=>重新设置频道数组
         * =>重新渲染
        */

        //填充数组，在载入时提供来自服务器的数组
        //调用API中的新闻类目，加载结束后才有频道
        /*var resp = await getNewsChannels();
        this.channels = resp;
    
        // console.log(resp);
        // this.chooseId = this.channels[0].channelId;
        this.switchTo(this.channels[0].channelId);
    },*/
    watch: {
        data: {
            immediate: true,
            handler() {
                if (this.data.length > 0) {
                    this.switchTo(this.data[0].chanelId);
                }
            }
        },
    },
    methods: {
        //切换频道（chooseId）
        switchTo(id) {
            this.chooseId = id;

            /** 频道被切换了，但是由于组件的通用性不能写死事件，
             * 因此需要触发关联事件，让事件使用者来完成事件
             * vue触发事件函数：$emit()
             参数1：定义方法名，可以不被使用
             参数2：定义参数（也就是被操作的数据）
            */
            this.$emit("change", this.chooseId);

        }
    },
}
</script>

<style scoped>
    .news-types {
        margin: 30px 0;
        border-bottom: 1px solid #ccc;
        display: flex;
        flex-wrap: wrap;    /*换行*/
        font-size: 14px;
        padding-bottom: 15px;
    }
    .item {
        padding: 10px 20px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-right: 15px;
        margin: 7px 15px 7px 0;
        cursor: pointer;
        position: relative;
    }
    .item:hover {
        background: #ccc;
        color: #fff;
    }
    .news-types a {
        align-self: flex-end;
        margin-bottom: 20px;
        color: #409eff;
    }
    .active {
        background: #000;
        color: #fff;
    }
</style>>