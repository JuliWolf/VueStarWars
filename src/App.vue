<template>
  <div id="app">
    <app-header></app-header>
    <v-container grid-list-md text-xs-center fluid="true">
      <router-view></router-view>
    </v-container>
    <div class="footer">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import Header from './components/addPanels/header.vue'
  import Footer from './components/addPanels/footer.vue'

  export default {
    name: 'app',
    components: {
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>

<style lang="scss">
  $yellow: #ffe300;
  body, html {
    margin:0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: rgb(39, 43, 48);
    color: $yellow;
    position:relative;
    padding:0;
    height: 100%;
    #app{
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    #footer{
      flex: 0 0 auto;
    }
  }
</style>
