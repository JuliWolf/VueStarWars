<template>
    <v-flex xs12 md2 xl2>
        <nav>
            <ul class="nav nav-stacked">
                <li>
                    <router-link to="/" tag="a" active-class="active" exact><a>About</a></router-link>
                </li>
                <li>
                    <router-link to="/descriptions" tag="a" active-class="active" exact><a>Descriptions</a></router-link>
                </li>
            </ul>
        </nav>
    </v-flex>
</template>

<script>
    export default{

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
                    text-decoration:none;
                    :hover, :active {
                        font-weight: bold;
                        color: $darkBlue;
                    }
                }
            }
        }
    }

</style>