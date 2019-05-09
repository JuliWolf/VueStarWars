const state = {
    searchList: [
        'Planets',
        'People',
        'Species',
        'Films',
        'Starships',
        'Vehicles'
    ],
    sociaLicons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
    ]
};

const mutations = {

};

const actions = {

};

const getters = {
    searchList: state =>{
        return state.searchList;
    },
    sociaLicons: state =>{
        return state.sociaLicons;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
