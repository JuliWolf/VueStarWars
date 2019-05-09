const state = {
    searchList: [
        'Planets',
        'People',
        'Species',
        'Films',
        'Starships',
        'Vehicles'
    ]
};

const mutations = {

};

const actions = {

};

const getters = {
    searchList: state =>{
        return state.searchList;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
