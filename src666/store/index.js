import Vuex from 'vuex';
import Vue from 'vue';
import auth from './module/auth';
import images from './module/images';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        images
    }
})