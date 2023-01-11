<template>
    <div><Banner/>
    <v-container>
      <v-row style="flex-direction: column;" >
        <v-row style="justify-content: space-around; margin-bottom: 25px">
          <v-btn
            outlined
            color="white"
            x-large
            >Сортировать по возрастанию цены</v-btn>
            <v-btn
            outlined
            color="white"
            x-large
            >Сортировать по убыванию цены</v-btn>
        </v-row>
        <v-select
          :items="items"
          label="Модель авто"
          solo
          ></v-select>
        </v-row>
        </v-container>
        <v-container class="cont">
            <v-row>
                <Cars
            v-for="car in cars" :key="car.id"
            :cars="car" />
            </v-row>
    </v-container>
  </div>
</template>

<script>
import Cars from "@/components/Main/Car_card";
import Banner from "@/components/Main/Banner_Car";
export default {
    name: 'MainPage',
    components: {
    Cars,
    Banner,
  },
  data: () => ({
    cars: [],
        items: ['Porsche 718', 'Porsche Taycan', 'Porsche Panamera', 'Porsche Macan', 'Porsche Cayenne'],
 }),
 mounted(){
    this.fetchTodo()
 },
 methods: {
    fetchTodo(){
        this.axios.get('./main.json')
            .then(response => this.cars = response.data)
            // .then(response => console.log(response.data))
            
    }
 }
}
</script>
<style>
 @media (width: 1300px) {
  .img-banner {display: none;}
}
</style>
