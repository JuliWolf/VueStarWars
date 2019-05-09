<template>
    <v-footer height="auto" id="footer">
        <v-card class="flex blue-grey darken-3" flat tile>
            <v-card-title class="teal justify-end">
                <v-btn v-for="icon in sociaLicons" :key="icon" dark icon class="mx-3">
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-actions color="darkBlue"  class="justify-center grey darken-3">
                &copy;{{ new Date().getFullYear() }} — <strong>JuliWolf</strong>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default{
        computed:{
            ...mapGetters([
                'sociaLicons'
            ])
        }
    }
</script>
<style scoped lang="scss">
    $yellow: #ffe300;
    $darkBlue: #1c1e22;
    #footer{
        background-color:$darkBlue;
        color:$yellow;
    }
</style>
