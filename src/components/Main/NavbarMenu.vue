<template>
  <v-container fluid>
    <v-app-bar
      app
      color="rgb(8, 7, 40)"
      dark
    >
      <v-btn outlined class="ml-3">
        <router-link to="/">Главная</router-link>
      </v-btn>
      <v-btn outlined class="ml-3">
        <router-link to="/target">Авто мечты</router-link>
      </v-btn>
      <v-btn outlined class="ml-3">
        <router-link to="/zero">Выйти</router-link>
      </v-btn>
      <v-btn outlined class="ml-3">
        <router-link to="/zero">Изель Бикулова</router-link>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>

export default {
 
};
</script>
<style scoped>
.v-application a {
    color: #ffffff;
}
</style>