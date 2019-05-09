<template>
    <v-flex xs10 v-if="!exactItemFlag">
        <v-layout row wrap>
            <v-flex v-for="item in dataArray" offset-xs1 xs11 md4 offset-md1 xl4 offset-xl1>
                <app-info-panels :item="item"></app-info-panels>
            </v-flex>
        </v-layout>
        <v-layout align-center justify-center>
            <v-flex offset-xs2 xs4 offset-xl2 xl4 offset-md2 md4 align-self-center>
                <div class="pagination" v-if="dataArray.length>0">
                    <button class="btn btn-default" @click="checkflagAndDate(prevPage)" :disabled="!pagePrevFlag">Prev</button>
                    <button class="btn btn-default" @click="checkflagAndDate(nextPage)" :disabled="!pageNextFlag">Next</button>
                </div>
            </v-flex>
        </v-layout>

    </v-flex>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import infoPanels from './InfoPanels.vue';

    export default {
        methods: {
            ...mapActions([
                'checkflagAndDate',
            ])
        },
        computed: {
            ...mapGetters([
                'dataArray',
                'nextPage',
                'prevPage',
                'pageNextFlag',
                'pagePrevFlag',
                'exactItemFlag',
            ])
        },
        components: {
            appInfoPanels: infoPanels,
        }
    }

</script>

<style scoped lang="scss">
    $yellow: #ffe300;
    .pagination{
        font-size:30px;
        .btn{
            margin:0 10px;
        }
    }
</style>
