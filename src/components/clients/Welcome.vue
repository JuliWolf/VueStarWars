<template>
    <v-layout justify-center align-content-center>
        <app-main-menu></app-main-menu>
        <app-main></app-main>
    </v-layout>
</template>

<script>
    import mainMenu from '../addPanels/mainMenu';
    import main from './welcome/main';

export default{
    components:{
        'app-main-menu': mainMenu,
        'app-main': main
    }
}
</script>

<style scoped lang="scss">
    $yellow: #ffe300;

</style>
