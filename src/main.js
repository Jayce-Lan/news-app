import Vue from 'vue' //第三方库文件会自行找寻
import App from './App.vue'
import './assets/style/style.css';  //导入全局css
import router from './routes/index';//(如果文件名为index，可以省略，因为系统会自动读取该目录下的index文件)
import store from './store';

Vue.config.productionTip = false;

//触发频道数据
store.dispatch("channels/fetchDatas");

new Vue({
  render: h => h(App),
  //3.创建Vue实例的时候创建一个router,配置路由到vue实例中
  router:router,
  store: store,
}).$mount('#app')