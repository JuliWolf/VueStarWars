<template>
    <div class="searchForm">
        <div class="row">
            <div class="col-sm-10">
                <h3>Search</h3>
            </div>
            <div class="col-sm-1">
                <i class="fa fa-times col-sm-1" aria-hidden="true" @click="changeSearchFlag"></i>
            </div>
        </div>

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
    </div>

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
            .row{
                display: flex;
                align-items: center;
                height: 100%;
                .fa-times{
                    color:$yellow;
                    font-size:20px;
                }
            }
        }



</style>