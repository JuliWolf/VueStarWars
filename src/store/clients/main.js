import axios from 'axios';
import history from './history.js'

const state = {
    dataArray:[],
    next:'',
    prev:'',
    pageNextFlag: false,
    pagePrevFlag: false,
    exactItemFlag:false,
    currentItem: {},
    watchedPages: history.state.watchedPages,
    localStorage:{}

};

const mutations = {
    UPDATE_ARRAY(state, payload){
        if(payload.itemType){
            let itemType = payload.itemType.toLowerCase();
            let itemName = payload.itemName.toLowerCase();
            var link = 'https://swapi.co/api/'+itemType+'/?search='+itemName;
        }else{
            var link = payload;
        }
        if(!localStorage.getItem(link)){
            axios.get(link)
                .then(res =>{
                    state.dataArray = res.data.results;
                    state.next = res.data.next;
                    state.prev = res.data.previous;
                    state.exactItemFlag = false;
                    localStorage.setItem(payload, JSON.stringify(res.data));
                })
                .catch(error => console.log(error))
        }else{
            let data = JSON.parse(localStorage.getItem(link));
            state.dataArray = data.results;
            state.next = data.next;
            state.prev = data.previous;
            state.exactItemFlag = false;
        }
    },
    CHECK_FLAG(state){
        if(state.next != null){
            state.pageNextFlag = true;
        }else{
            state.pageNextFlag = false;
        }
        if(state.prev != null){
            state.pagePrevFlag = true;
        }else{
            state.pagePrevFlag = false;
        }
    },
    SHOW_EXACT_ITEM(state, payload){
        // if(!localStorage.getItem(payload)) {
        if(!state.localStorage){
            axios.get(payload)
                .then(res => {
                    state.currentItem = res.data;
                    state.exactItemFlag = true;
                    localStorage.setItem(payload, JSON.stringify(res.data));
                    // state.watchedPages.push(res.data);
                })
                .catch(error => console.log(error))
        }else{
            var data = state.localStorage;
            state.currentItem = data;
            state.exactItemFlag = true;
            // state.watchedPages.push(data);
        }
    },
    RETURN_TO_PAGES(state){
        state.exactItemFlag = false;
    },
    CHECK_DATA_IN_STORAGE(state, id){
        if(localStorage.getItem(id)){
            state.localStorage = JSON.parse(localStorage.getItem(id));
        }else {
            state.localStorage = false;
        }
    },
    SAVE_ITEM_TO_HISTORY(state, url){
        let flag = false;
        state.watchedPages.forEach(function(obj){
            if(obj.url == url) {
                flag = true;
            }
        })
        if(!state.localStorage && !flag){
                state.watchedPages.push(state.currentItem);
        }else if(!flag){
            state.watchedPages.push(state.localStorage);
        }
    }
};

const actions = {
    getDataArray({commit}, data){
        new Promise((resolve, reject) => {
            commit('UPDATE_ARRAY', data);
        })

    },
    checkflagAndDate({dispatch, commit}, data){
        return dispatch('getDataArray', data).then(() => {
            setTimeout(() => {
                commit('CHECK_FLAG');
            }, 800);

        })
    },
    showExactItem({dispatch, commit}, url){
        return dispatch('checkDataInStorage', url).then(() => {
            commit('SHOW_EXACT_ITEM', url);
        }).then(() => {
            setTimeout(() => {
                commit('SAVE_ITEM_TO_HISTORY', url);
            }, 100);
        });

    },
    returnToPages({commit}){
        commit('RETURN_TO_PAGES');
    },
    checkDataInStorage({commit}, id){
        new Promise((resolve, reject) => {
            commit('CHECK_DATA_IN_STORAGE', id);
        })
    }
};

const getters = {
    dataArray: state => {
        return state.dataArray;
    },
    nextPage: state => {
        return state.next;
    },
    prevPage: state => {
        return state.prev;
    },
    pageNextFlag: state => {
        return state.pageNextFlag;
    },
    pagePrevFlag: state => {
        return state.pagePrevFlag;
    },
    exactItemFlag: state => {
        return state.exactItemFlag;
    },
    currentItem: state => {
        return state.currentItem;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
