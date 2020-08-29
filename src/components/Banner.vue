<template>
    <!-- 鼠标移入移出自动开始/停止轮播 -->
  <div class="banner-container" @mouseenter="autoStop" @mouseleave="autoStart">
      <!-- 图片 -->
      <!-- 动态生成一个宽度，如果是三张图片宽度为300%，四张为400%，以对象形式实现 -->
      <ul class="images" :style="{width:banners.length*100+'%',marginLeft:-index*100+'%'}">
        <li v-for="(item, i) in banners" :key="i">
            <!-- 由数组获取的数据都必须为动态赋值，这样在打包的时候框架会自动转换路径 -->
            <a :href="item.link"><img :src="item.url" alt=""></a>
        </li>
      </ul>
      <ul class="dots">
          <!-- 动态生成li个数，由图片确定个数 -->
          <li v-for="(item, i) in banners" :key="i" :class="{active:i===index}" @click="index=i"></li>
      </ul>
  </div>
</template>

<script>
export default {
    props: {
        //约束传入对象
        banners: {
            type: Array,    //对象必须为数组
            required: true  //必须传入属性
        },
        duration: {
            type: Number,
            default: 2000,  //设置默认值,有默认值的情况下不适应required
        }
    },
    created() {
        //在创建组件的时候开始自动切换
        //调用当前组件的autoStart
        this.autoStart();
    },
    destroyed() {
        //在组件销毁的时候调用停止，防止资源被占用
        this.autoStop();
    },
    data() {
        return {
            //轮播图自行确定自己是第几张
            index: 0,   //当前显示第几张
            timer: null
        }
    },
    methods: {
        //开始自动切换
        autoStart() {
            if (this.timer) {
                return;
            }
            this.timer = setInterval(() => {
                this.index = (this.index + 1) % this.banners.length;
            
            }, this.duration);
        },
        //停止自动切换
        autoStop() {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}
</script>

<style scoped>
/* 这里的scoped并非浏览器支持，而是脚手架支持，能在最后生成的结果当中不会被其他样式影响这个模块 */
    .banner-container {
        height: 350px;
        position: relative;
        overflow: hidden;
    }
    .banner-container li {
        display: block;
        width: 1080px;
        height: 100%;
        float: left;
    }
    .images {
        height: 100%;
        transition: .5s;
    }
    .banner-container img {
        width: 1080px;
        height: 100%;
    }
    .dots {
        position: absolute;
        bottom: 10px;
        right: 10px;
        display: flex;
    }
    .dots li {
        width: 10px;
        cursor: pointer;
        height: 10px;
        margin: 0 3px;
        border-radius: 50%;
        border: 1px solid;
        color: #fff;
    }
    .dots li.active{
        background-color: #fff;
    }
</style>