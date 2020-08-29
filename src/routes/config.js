// 路由访问地址的配置文件
export default {
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/Home'),    //可以使得在不使用组件的时候不被加载
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/Login'),
        },
        {
            path: '/reg',
            name: 'Reg',
            component: () => import('@/views/Reg'),
        },
        {
            path: '/channels/:id',    //:为设置动态路由
            name: 'ChannelNews',
            component: () => import('@/views/ChannelNews'),
        },
        {
            path: '*',  //表示匹配所有路径，如果上面的路径都没有匹配，那么将会触发
            name: '404',
            component: () => import('@/views/NotFound'),  
        }
    ],
    /**
     * 配置路由模式
     * hash:路径来自地址栏后#的值，这种模式兼容性较强
     * history：路径来自于真实的地址路径，旧浏览器不兼容，需要刷新
     * memeory：路径来自内存
     */
    mode: "history",
}