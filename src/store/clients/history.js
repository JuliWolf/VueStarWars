const state = {
    watchedPages: [],
    exactHistoryItem:{},
    pageNumber: 0,
    size: 10,
    dialogInfo: false
};

const mutations = {
    SHOW_EXACT_HISTORY_ITEM (state, id) {
        state.exactHistoryItem = state.watchedPages[id];
        state.dialogInfo = true;
    },
    DELETE_ITEM_FROM_HISTORY(state, id){
        state.watchedPages.splice(id,1);
    },
    SHOW_NEXT_PAGE(state){
        state.pageNumber++;
    },
    SHOW_PREVIOUS_PAGE(state){
        state.pageNumber--;
    },
    CLOSE_MODAL_WINDOW(state){
        state.dialogInfo = false;
    }
};

const actions = {
    showExactHistoryItem({commit}, id) {
        commit('SHOW_EXACT_HISTORY_ITEM', id);
    },
    deleteItemFromHistory({commit}, id){
        commit('DELETE_ITEM_FROM_HISTORY', id);
    },
    showNextPage({commit}){
        commit('SHOW_NEXT_PAGE');
    },
    showPreviousPage({commit}){
        commit('SHOW_PREVIOUS_PAGE');
    },
    closeModal({commit}){
        commit('CLOSE_MODAL_WINDOW');
    }
};

const getters = {
    watchedPages: state => {
        return state.watchedPages;
    },
    exactHistoryItem: state => {
        return state.exactHistoryItem;
    },
    pageNumber: state => {
        return state.pageNumber;
    },
    size: state => {
        return state.size;
    },
    dialogInfo: state => {
        return state.dialogInfo;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
