<template>
    <v-flex xs12>
        <v-layout row wrap>
            <v-flex v-for="(item, key) in paginatedData"  offset-xs1 xs11 md4 offset-md1 xl4 offset-xl1>
                <app-history-info :item="item" :id="key"></app-history-info>
            </v-flex>
        </v-layout>
        <v-layout align-center justify-center>
            <v-flex offset-xs2 xs4 offset-xl2 xl4 offset-md2 md4 align-self-center>
                <div class="pagination" v-if="paginatedData.length>0">
                    <button class="btn btn-default" @click="showPreviousPage" :disabled="pageNumber === 0">Prev</button>
                    <button class="btn btn-default" @click="showNextPage" :disabled="pageNumber >= pageCount -1">Next</button>
                </div>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
    import {mapActions} from 'vuex'
    import {mapGetters} from 'vuex'

    import historyInfo from './historyItems'

    export default{
        methods:{
            ...mapActions([
                'showNextPage',
                'showPreviousPage'
            ])
        },
        computed: {
            ...mapGetters([
                'watchedPages',
                'pageNumber',
                'size'
            ]),
            paginatedData(){
                const start = this.pageNumber * this.size,
                    end = start + this.size;
                return this.watchedPages.slice(start, end);
            },
            pageCount(){
                let length = this.watchedPages.length,
                    sise = this.size;
                return Math.ceil(length/sise);
            }
        },
        components:{
            'app-history-info': historyInfo
        }
    }
</script>

<style scoped lang="scss">
    $yellow: #ffe300;
    $darkBlue: #1c1e22;
    $gray: #32383e;
    .pagination{
        font-size:30px;
        .btn{
            margin:0 10px;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 1s;
    }
    .fade-enter, .fade-leave-to /* .list-leave-active до версии 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
</style>
