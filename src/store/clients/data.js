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
    ],
    images: [
        {src: require('@/assets/star-wars-logo.jpg')},
        {src: require('@/assets/Yoda.jpeg')},
        {src: require('@/assets/BlackArt.jpg')},
        {src: require('@/assets/City.jpg')}
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
    },
    images: state => {
        return state.images;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
