const state = {
    commentsList: [],
};

const mutations = {
    ADD_COMMENT(state, data){
        const createdAt = new Date();
        let url = data.url;
        let text = data.text;
        db.collection('comments').add({ url, createdAt, text })
    },
    SHOW_COMMENTS(state){

    }
};

const actions = {
    addComment({commit}, data){
        commit('ADD_COMMENT', data)
    },
    showComments({commit}){
        commit('SHOW_COMMENTS');
    }
};

const getters = {
    commentsList: state => {
        return state.commentsList;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
