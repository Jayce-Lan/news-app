import Vue from 'vue';
import vuex from 'vuex';
import channels from './channels';
import loginUser from './loginUser';

//安装
Vue.use(vuex);
//仓库一个vue仓库，每个vue项目只能存在一个仓库
var store = new vuex.Store({
    //合并
    modules: {
        channels: channels,
        loginUser: loginUser,
    }
});

export default store;