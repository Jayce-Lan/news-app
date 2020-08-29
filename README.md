# news-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

##Banner：实现轮播图

##news文件夹：新闻的实现视图
    1.Channels：代表新闻的类目
    2.NewsList：代表新闻的实际内容

##Loading：加载项目

##Center：固定组件到屏幕中间

##Home：首页

##Header：导航栏，实现网页的静态跳转
关联组件：vue-router
使用方式：安装插件vue-router，npm i vue-router

##Pager：分页组件

##渲染流程：
浏览器=>地址=>服务器=>HTML+CSS+js=>浏览器=>渲染页面
=>执行js=>创建vue实例=>渲染根组件=>router-view根据不同的路径渲染不同组件

##共享数据：
vuex：用于共享数据