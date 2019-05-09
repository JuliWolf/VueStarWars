<template>
    <v-flex xs12>
        <v-layout row wrap>
            <v-flex v-for="(item, key) in watchedPages" offset-xs1 xs11 md4 offset-md1 xl4 offset-xl1>
                <app-history-info :item="item" :id="key"></app-history-info>
            </v-flex>
        </v-layout>
        <v-layout align-center justify-center>
            <v-flex offset-xs2 xs4 offset-xl2 xl4 offset-md2 md4 align-self-center>
                <div class="pagination" v-if="watchedPages.length>0">
                    <button class="btn btn-default" @click="" :disabled="true">Prev</button>
                    <button class="btn btn-default" @click="" :disabled="true">Next</button>
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

            ])
        },
        computed: {
            ...mapGetters([
                'watchedPages'
            ])
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

</style>
