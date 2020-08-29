//新闻仓库的数据
import {getNewsChannels} from '../services/newsService';

export default {
    namespaced: true,   //开启命名空间
    state: {
        data: [],
        isLoading: false,
    },
    mutations: {
        /**
         * 里配置多种变异方式、 变化属性
         * @param {*} state     原状态
         * @param {*} payload   负荷（运载状态）
         */
        setIsLoading(state, payload) {
            state.isLoading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    //有副作用的异步同步操作
    actions: {
        /**
         * 
         * @param {*} context   仓库对象
         */
        async fetchDatas(context) {
            //只能通过提交mutations来触发
            //设置isLoading = true;
            context.commit("setIsLoading", true);
            
            var channels =  await getNewsChannels();
            //设置data = channels; isLoading = false;
            context.commit("setData", channels);
            context.commit("setIsLoading", false);

        }
    }
}