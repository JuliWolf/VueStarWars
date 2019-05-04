import Vue from 'vue'
import Vuex from 'vuex'

import data from './store/clients/data.js';
import comment from './store/clients/comment.js';
import leftPanel from './store/clients/leftPanel.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    data,
    comment,
    leftPanel
  }
});
