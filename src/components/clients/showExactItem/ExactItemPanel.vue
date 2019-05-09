<template>
    <v-flex xs11 md10 xl10 v-if="exactItemFlag">
        <v-layout row wrap>
            <v-flex xs1 md2 xl2>
                <div class="returnButton">
                    <a class="fa fa-arrow-left" @click="returnToPages"></a>
                </div>
            </v-flex>
            <v-flex xs11 offset-xs1 xl6 offset-xl1 md6 offset-md1>
                <app-exact-item :item="currentItem"></app-exact-item>
            </v-flex>
        </v-layout>
    </v-flex>
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
