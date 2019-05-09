const state = {
    watchedPages: [],
    exactHistoryItem:{}
};

const mutations = {
    SHOW_EXACT_HISTORY_ITEM (state, id) {
        state.exactHistoryItem = state.watchedPages[id];
    },
    DELETE_ITEM_FROM_HISTORY(state, id){
        state.watchedPages.splice(id,1);
    }
};

const actions = {
    showExactHistoryItem({commit}, id) {
        commit('SHOW_EXACT_HISTORY_ITEM', id);
    },
    deleteItemFromHistory({commit}, id){
        commit('DELETE_ITEM_FROM_HISTORY', id);
    }
};

const getters = {
    watchedPages: state =>{
        return state.watchedPages;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
