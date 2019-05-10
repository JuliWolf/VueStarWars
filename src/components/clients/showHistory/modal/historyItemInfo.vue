<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <v-card class="itemInfo">
                        <v-card-title>
                            <!--Planets-->
                            <h3 v-if="item.name">{{item.name}}</h3>
                            <!--Films-->
                            <h3 v-if="item.title">{{item.title}}</h3>
                        </v-card-title>
                        <v-card-text>
                            <!--Planets-->
                            <p v-if="item.terrain">Terrain: {{item.terrain}}</p>
                            <p v-if="item.diameter">Diameter: {{item.diameter}}</p>
                            <p v-if="item.climate">Climate: {{item.climate}}</p>
                            <p v-if="item.gravity">Gravity: {{item.gravity}}</p>
                            <p v-if="item.orbital_period">Orbital Period: {{item.orbital_period}}</p>
                            <p v-if="item.population">Population: {{item.population}}</p>

                            <!--Films-->
                            <p v-if="item.producer">Producer: {{item.producer}}</p>
                            <p v-if="item.director">Director: {{item.director}}</p>
                            <p v-if="item.release_date">Release date: {{item.release_date}}</p>
                            <p v-if="item.opening_crawl">Opening Crawl: {{item.opening_crawl}}</p>

                            <!--People-->
                            <p v-if="item.gender">Gender: {{item.gender}}</p>
                            <p v-if="item.birth_year">Birth year: {{item.birth_year}}</p>
                            <p v-if="item.eye_color">Eye Color: {{item.eye_color}}</p>
                            <p v-if="item.hair_color">Hair Color: {{item.hair_color}}</p>
                            <p v-if="item.height">Height: {{item.height}} sm</p>
                            <p v-if="item.mass">Mass: {{item.mass}} kg</p>

                            <!--Species-->
                            <p v-if="item.language">Language: {{item.language}}</p>
                            <p v-if="item.designation">Designation: {{item.designation}}</p>
                            <p v-if="item.eye_colors">Eye Color: {{item.eye_colors}}</p>
                            <p v-if="item.hair_colors">Hair Color: {{item.hair_colors}}</p>
                            <p v-if="item.skin_colors">Skin Color: {{item.skin_colors}}</p>
                            <p v-if="item.average_height">Height: {{item.average_height}} sm</p>
                            <p v-if="item.average_lifespan">Lifespan: {{item.average_lifespan}} years</p>

                            <!--Starships && Vehicles-->
                            <p v-if="item.vehicle_class">Class: {{item.vehicle_class}}</p>
                            <p v-if="item.starship_class">Class: {{item.starship_class}}</p>
                            <p v-if="item.crew">Crew: {{item.crew}}</p>
                            <p v-if="item.model">Model: {{item.model}}</p>
                            <p v-if="item.passengers">Passengers: {{item.passengers}}</p>
                            <p v-if="item.consumables">Consumables: {{item.consumables}}</p>
                            <p v-if="item.length">Length: {{item.length}} m</p>

                            <p v-if="item.cost_in_credits">Cost: {{item.cost_in_credits}} credits</p>


                            <v-expansion-panel v-if="item.planets" dark focusable>
                                <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <div>Planets</div>
                                    </template>
                                    <v-list>
                                        <v-list-tile v-for="(info,i) in item.planets" :key="i" @click="showExactItem(info)">
                                            <v-list-tile-content>
                                                <v-list-tile v-text="'Planet ' + (i+1)"></v-list-tile>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-if="item.species" dark focusable>
                                <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <div>Species</div>
                                    </template>
                                    <v-list>
                                        <v-list-tile v-for="(info,i) in item.species" :key="i" @click="showExactItem(info)">
                                            <v-list-tile-content>
                                                <v-list-tile v-text="'Species ' + (i+1)"></v-list-tile>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-if="item.starships" dark focusable>
                                <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <div>Starships</div>
                                    </template>
                                    <v-list>
                                        <v-list-tile v-for="(info,i) in item.starships" :key="i" @click="showExactItem(info)">
                                            <v-list-tile-content>
                                                <v-list-tile v-text="'Starship ' + (i+1)"></v-list-tile>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-if="item.vehicles" dark focusable>
                                <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <div>Vehicles</div>
                                    </template>
                                    <v-list>
                                        <v-list-tile v-for="(info,i) in item.vehicles" :key="i" @click="showExactItem(info)">
                                            <v-list-tile-content>
                                                <v-list-tile v-text="'vehicle ' + (i+1)"></v-list-tile>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-if="item.people" dark focusable>
                                <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <div>People</div>
                                    </template>
                                    <v-list>
                                        <v-list-tile v-for="(info,i) in item.people" :key="i" @click="showExactItem(info)">
                                            <v-list-tile-content>
                                                <v-list-tile v-text="'Person ' + (i+1)"></v-list-tile>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-if="item.films" dark focusable>
                                <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <div>Films</div>
                                    </template>
                                    <v-list>
                                        <v-list-tile v-for="(info,i) in item.films" :key="i" @click="showExactItem(info)">
                                            <v-list-tile-content>
                                                <v-list-tile v-text="'Film ' + (i+1)"></v-list-tile>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                        </v-card-text>
                        <v-card-actions>
                            <v-btn class="yellow" @click="closeModal">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';

    export default{
        methods:{
            ...mapActions([
                'closeModal'
            ])
        },
        computed: {
            ...mapGetters({
                item: 'exactHistoryItem'
            })
        }
    }
</script>

<style scoped lang="scss">
    $yellow: #ffe300;
    $darkBlue: #1c1e22;
    $gray: #32383e;
    .itemInfo{
        border: 1px solid $yellow;
        border-radius: 5px;
        padding: 5px 10px;
        margin:10px;
        background-color:$gray;
        color:white;
        font-size:16px;
        a{
            text-decoration:none !important;
            :hover, :active{
                color:$yellow;
            }
        }
    }
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        max-width: 1000px;
        margin: 0px auto;
        padding: 20px 30px;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
        button{
            color:$darkBlue;
        }
    }
    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

</style>
