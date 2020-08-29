<template>
    <!-- 当总数据量大于0才会显示该标签页 -->
    <div class="pager" v-if="total>0">
        <a href="" class="pager-item" :class="{disabled:page===1}" @click.prevent="handleChange(1)">首页</a>
        <a href="" class="pager-item" :class="{disabled:page===1}" @click.prevent="handleChange(page-1)">上一页</a>

        <a href="" class="pager-item" :class="{active:item===page}" v-for="item in numbers" :key="item" @click.prevent="handleChange(item)">{{item}}</a>

        <a href="" class="pager-item" :class="{disabled:page===pageNumber}" @click.prevent="handleChange(page+1)">上一页</a>
        <a href="" class="pager-item" :class="{disabled:page===pageNumber}" @click.prevent="handleChange(pageNumber)">尾页</a>
        <span class="pager-text">
            <i>{{page}}</i>
            /
            <i>{{pageNumber}}</i>
        </span> 
    </div>
</template>

<script>

export default {
    props: {
        page: {
            //当前页码
            default: 1,
            type: Number,
        },
        total: {
            //信息总数据量
            default: 0,
            type: Number,
        },
        limit: {
            //页数显示多少数据
            default: 10,
            type: Number,
        },
        panelNumber: {
            //最多显示多少个数字页码
            default: 10,
            type: Number,
        }
    },
    computed: {
        //总页数
        pageNumber() {
            return Math.ceil(this.total / this.limit);
        },
        //计算显示页面最小的数组
        minNumber() {
            var num = this.page - this.panelNumber / 2;
            if (num < 1) {
                num = 1;
            }
            return num;
        },
        //计算显示最大的数字
        maxNumber() {
            var num = this.minNumber + this.panelNumber - 1;
            if (num > this.pageNumber) {
                num = this.pageNumber;
            }
            return num;
        },
        //返回一个数组，计算该显示多少页到多少页的页数
        numbers() {
            var nums = [];
            //为了当前页剧中，因此循环最小数和最大数
            for (var i = this.minNumber; i <= this.maxNumber; i++) {
                nums.push(i);
            }
            return nums;
        },
    },
    methods: {
        //获取页码
        handleChange(newPage) {
            if (newPage < 1) {
                newPage = 1;
            }
            else if (newPage > this.pagerNumber) {
                newPage = this.pagerNumber;
            }

            if (newPage === this.page) {
                return;
            }
            this.$emit("pageChange", newPage);
        }
    },
}
</script>

<style scoped>
    .pager {
        text-align: center;
        margin: 20px 0;
    }
    .pager .pager-item {
        display: inline-block;
        padding: 5px 7px;
        border: 1px solid #ccc;
        margin: 8px;
        cursor: pointer;
        color: rgb(96, 96, 244);
    }
    .pager .pager-item.disabled {
        color:  #ccc;
        cursor: not-allowed;
    }
    .pager .pager-item.active {
        color: #f40;
        border: none;
        cursor: auto;
    }
</style>