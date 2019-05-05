<template>
    <div class="container">
        <div class="infoContainer">
            <div class="itemInfo">
                <!--Planets-->
                <h3 v-if="item.name">{{item.name}}</h3>
                <p v-if="item.terrain">Terrain: {{item.terrain}}</p>
                <p v-if="item.diameter">Diameter: {{item.diameter}}</p>
                <p v-if="item.climate">Climate: {{item.climate}}</p>
                <p v-if="item.gravity">Gravity: {{item.gravity}}</p>
                <p v-if="item.orbital_period">Orbital Period: {{item.orbital_period}}</p>
                <p v-if="item.population">Population: {{item.population}}</p>

                <!--Films-->
                <h3 v-if="item.title">{{item.title}}</h3>
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
            </div>
        </div>
    </div>


</template>

<script>
    export default{
        props: ['item'],

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
        text-align:center;
        font-size:16px;
    }
    .commentsContainer{
        margin:20px 0;
        .btn{
            float:right;
            margin:10px 15px;
        }
        .inputContainer{
            text-align:center;
            #comment{
                border-radius:5px;
                background:$gray;
                border:1px solid $darkBlue;
                color:white;
                resize: none
            }
        }
    }

</style>
