<template>
    <v-layout justify-center align-content-center>
        <app-main-menu></app-main-menu>
        <v-flex xs12 md10 xl10 align-self-center class="center">
            <v-timeline light>
                <v-timeline-item class="white" fill-dot left>
                    <template v-slot:icon>
                        <v-avatar>
                            <img src="../../../images/test.jpg">
                        </v-avatar>
                    </template>
                    <v-card>
                        <v-card-title class="green lighten-1">
                            <v-icon class="mr-3" light size="42">
                                mdi-phone-in-talk
                            </v-icon>
                            <h3 class="display-1 white--text font-weight-light">Test Site</h3>
                        </v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex>
                                    This site is made as a test site in order to test Vue.js framework and it's additional packages on my own.
                                    There are several opportunities on the site: Watch the list of swapi-items, see exact item info, search an item, see history of watched items.
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item fill-dot right color="white">
                    <template v-slot:icon>
                        <v-avatar>
                            <img src="../../../images/VueJs.png">
                        </v-avatar>
                    </template>
                    <v-card dark>
                        <v-card-title class="purple lighten-2">
                            <h3 class="display-1 white--text font-weight-light">Vue.js</h3>
                            <v-icon light size="42">mdi-home-outline</v-icon>
                        </v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex>
                                    All site is made with vue.js framework.
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item fill-dot left color="white">
                    <template v-slot:icon>
                        <v-avatar>
                            <img src="../../../images/VUEX.png">
                        </v-avatar>
                    </template>
                    <v-card>
                        <v-card-title class="amber lighten-1 justify-end">
                            <h3 class="display-1 mr-3 white--text font-weight-light">Vuex</h3>
                            <v-icon light size="42">mdi-home-outline</v-icon>
                        </v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex>
                                    Vuex is used to manipulate data in all site. All data stores in stores file. It is divided info state, mutations, actions and getters objects.
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item fill-dot right color="white">
                    <template v-slot:icon>
                        <v-avatar>
                            <img src="../../../images/Vuetify.png">
                        </v-avatar>
                    </template>
                    <v-card>
                        <v-card-title class="cyan lighten-1">
                            <v-icon class="mr-3" light size="42">
                                mdi-email-outline
                            </v-icon>
                            <h3 class="display-1 white--text font-weight-light">Vuetify</h3>
                        </v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex>
                                    In order to make site more stylish I use Vuetify package. The site frame is build on vuetify grid. All items boxes is build with cards.
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item fill-dot left color="white">
                    <template v-slot:icon>
                        <v-avatar>
                            <img src="../../../images/swapi.png">
                        </v-avatar>
                    </template>
                    <v-card>
                        <v-card-title class="red lighten-1 justify-end">
                            <h3 class="display-1 mr-3 white--text font-weight-light">Swapi.co</h3>
                            <v-icon light size="42">
                                mdi-account-multiple-outline
                            </v-icon>
                        </v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex>
                                    I take Swapi API as an idea for the site. All data which you can see on the site is taken from SWAPI.co.
                                    It gets from the site with Axios package.
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-flex>
    </v-layout>
</template>

<script>
    import mainMenu from '../../addPanels/mainMenu'

    export default{
        components:{
            'app-main-menu': mainMenu,
        }
    }
</script>

<style scoped lang="scss">
    $yellow: #ffe300;
    $gray:#32383e;
    .v-card{
        color:white;
        border: 1px solid $yellow;
        border-radius:5px;
        background: $gray;
    }
    .center{
        margin: 0 20px;
    }
</style>
