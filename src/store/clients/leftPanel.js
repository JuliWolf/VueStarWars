const state = {
    searchFlag:false
};

const mutations = {
    CHANGE_SEARCH_FLAG(state){
      state.searchFlag = !state.searchFlag;
    }
};

const actions = {
    changeSearchFlag({commit}){
        commit('CHANGE_SEARCH_FLAG');
    }
};

const getters = {
    searchFlag: state => {
        return state.searchFlag;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
