<template>
    <v-flex xs10 md2 xl2>
        <nav>
            <ul class="nav nav-stacked">
                <li>
                    <a href="#" @click="checkflagAndDate('planets')">Planets</a>
                </li>
                <li>
                    <a href="#" @click="checkflagAndDate('films/')">Films</a>
                </li>
                <li>
                    <a href="#" @click="checkflagAndDate('people/')">People</a>
                </li>
                <li>
                    <a href="#" @click="checkflagAndDate('species')">Species</a>
                </li>
                <li>
                    <a href="#" @click="checkflagAndDate('starships')">Starships</a>
                </li>
                <li>
                    <a href="#" @click="checkflagAndDate('vehicles')">Vehicles</a>
                </li>
            </ul>
        </nav>
        <transition name="slide" mode="out-in">
            <a href="#" class="fa fa-search" v-if="!searchFlag" @click="changeSearchFlag" key="open"></a>
            <app-search v-else key="search"></app-search>
        </transition>
    </v-flex>
</template>

<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';
    import search from './search/search'

    export default{
        methods:{
            ...mapActions([
                'checkflagAndDate',
                'changeSearchFlag'
            ])
        },
        computed:{
            ...mapGetters([
                'searchList',
                'searchFlag',
                'watchedPages'
            ])
        },
        components: {
            appSearch: search
        }
    }
</script>

<style lang="scss" scoped>
    $yellow: #ffe300;
    $darkBlue: #1c1e22;
    $gray: #32383e;
    .container{
        padding:0;
        .nav{
            margin:0 0 0 5px;
            padding:0;
            text-align:center;
            font-size:20px;
            :active, :hover{
                background-color: white;
            }
            li {
                background-color:$gray;
                border-radius:3px;
                margin:5px 0;
                color:$yellow;
                padding: 5px 0px;
                :hover, :active{
                    color: $darkBlue;
                    font-weight: bold;
                }

                a {
                    color:$yellow;
                    :hover, :active {
                        font-weight: bold;
                        color: $darkBlue;
                    }
                }
            }
        }
        .fa-search{
            color:$yellow;
            font-size:28px;
            position:relative;
            left:10%;
            margin:10% 0;
        }
    }

    .slide-enter-active {
        transition: all 1s ease;
    }
    .slide-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-enter, .slide-leave-to {
        transform: translateX(-10px);
        opacity: 0;
    }

</style>