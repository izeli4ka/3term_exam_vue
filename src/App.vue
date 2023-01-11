<template>
  <v-app style="background-color: rgb(8, 7, 40);">
      <NavbarMenu/>
      <router-view/>
      <Footer/>
  </v-app>
</template>

<script>
import NavbarMenu from "@/components/Main/NavbarMenu";
import Footer from "@/components/Main/FooterMain";

export default {
  name: 'App',
  components: {
    NavbarMenu,
    Footer
  }
};
</script>
