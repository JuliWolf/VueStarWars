<template>
    <div v-if="!exactItemFlag">
        <app-info-panels v-for="item in dataArray" :item="item" class="col-sm-4" ></app-info-panels>
        <div class="pagination col-sm-10" v-if="dataArray.length>0">
            <button class="btn btn-default" @click="checkflagAndDate(prevPage)" :disabled="!pagePrevFlag">Prev</button>
            <button class="btn btn-default" @click="checkflagAndDate(nextPage)" :disabled="!pageNextFlag">Next</button>
        </div>
    </div>
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
    .col-sm-4{
        margin:10px 60px;
    }
    .pagination{
        text-align:center;
        font-size:30px;
        .btn{
            margin:0 10px;
        }
    }
</style>
