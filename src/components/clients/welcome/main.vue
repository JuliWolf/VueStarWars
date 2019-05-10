<template>
    <v-flex xs12 md10 xl10 align-self-center class="center">
        <h2 class="display-3">Welcome to the site!</h2>
        <v-carousel hide-delimiters height="800px">
            <v-carousel-item
                    v-for="(image,i) in images"
                    :key="i"
                    :src="image.src"
            ></v-carousel-item>
        </v-carousel>
    </v-flex>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default{

        computed:{
            ...mapGetters([
                'images'
            ])
        }
    }
</script>

<style scoped lang="scss">
    $yellow: #ffe300;
    h2{
        color:$yellow;
        text-align:center;
    }
    .center{
        margin: 0 20px;
    }
</style>
