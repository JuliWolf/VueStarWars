import Vue from 'vue'
import Vuex from 'vuex'

import main from './store/clients/main.js';
import data from './store/clients/data.js';
import comment from './store/clients/comment.js';
import leftPanel from './store/clients/leftPanel.js';
import history from './store/clients/history.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    main,
    comment,
    leftPanel,
    data,
    history
  }
});
