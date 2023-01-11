<template>
    <div><Banner/>
    <v-container>
      <v-row style="flex-direction: column;" >
        <v-select
          :items="items"
          label="Модель авто"
          solo
          ></v-select>
        <v-btn
          outlined
          color="white"
          x-large
          >Модель авто</v-btn>
        </v-row>
          <select v-model="selectSort">
            <option v-for="rule in sortRules" :key="rule.key" :value="rule.key">{{ rule.title }}</option>
          </select>
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

</style>
