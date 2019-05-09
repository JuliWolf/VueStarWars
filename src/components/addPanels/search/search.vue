<template>
    <v-layout row wrap class="searchForm">
        <v-flex xs10>
            <h3>Search</h3>
        </v-flex>
        <v-flex  offset-xs1 xs1 align-self-start>
            <i class="fa fa-times col-sm-1" aria-hidden="true" @click="changeSearchFlag"></i>
        </v-flex>
        <v-flex xs12>
            <form>
                <label for="searchType">Choose type</label>
                <select class="form-control" id="searchType" v-model="itemType">
                    <option disabled>Types...</option>
                    <option :value="item" v-for="item in searchList">{{item}}</option>
                </select>
                <label for="name">Enter name or title</label>
                <input type="text" class="form-control" id="name" v-model="itemName">
                <button class="btn btn-default" @click.prevent="checkflagAndDate({itemType, itemName})">Search</button>
            </form>
        </v-flex>
    </v-layout>
</template>

<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default{
        data(){
          return{
              itemType:'',
              itemName:''
          }
        },
        methods:{
            ...mapActions([
                'searchItem',
                'checkflagAndDate',
                'changeSearchFlag'
            ])
        },
        computed:{
            ...mapGetters([
                'searchList',
                'searchFlag'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    $yellow: #ffe300;
    $darkBlue: #1c1e22;
    $gray: #32383e;

        .fa-search{
            color:$yellow;
            font-size:28px;
            position:relative;
            left:10%;
            margin:10% 0;
        }
        .searchForm{
            padding:2px;
            margin:2px 10px;
            .btn-default{
                margin:10px 5px;
                float: right;
            }
            .fa-times{
                color:$yellow;
                font-size:20px;
            }
        }



</style>