<template>
    <div  v-if="exactItemFlag">
        <div class="col-md-2 returnButton">
            <a class="fa fa-arrow-left" @click="returnToPages"></a>
        </div>
        <app-exact-item class="col-md-6 col-md-offset-1" :item="currentItem"></app-exact-item>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import exactItem from './ExactItem.vue';

    export default {
        methods: {
            ...mapActions([
                'returnToPages'
            ])
        },
        computed: {
            ...mapGetters([
                'exactItemFlag',
                'currentItem'
            ])
        },
        components: {
            appExactItem: exactItem,
        }
    }

</script>

<style scoped lang="scss">
    $yellow: #ffe300;
    .returnButton{
        position:relative;
        .fa{
            margin:50% 40%;
            position:absolute;
            font-size:50px;
            color: $yellow;
        }
    }
</style>
