<template>
  <div id="app">
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from './components/addPanels/header.vue'

  export default {
    name: 'app',
    components: {
      'app-header': Header
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
    .container-fluid{
      padding:0;
    }
  }
</style>
