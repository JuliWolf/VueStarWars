<template>
  <v-toolbar id="header" dark color="darkBlue">
    <v-toolbar-items class="navigation">
      <v-btn color="darkBlue" to="/" large class="nav_button">About</v-btn>
      <v-btn color="darkBlue" to="/StarWars" large class="nav_button">StarWars</v-btn>
      <v-btn color="darkBlue" to="/history" large class="nav_button">History</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style scoped lang="scss">
  $yellow: #ffe300;
  $darkBlue: #1c1e22;
  $gray: #32383e;
  #header{
    font-size: 20px;
    .navigation{
      .nav_button{
        color:yellow;
        text-decoration:none;
      }
    }

  }
</style>
