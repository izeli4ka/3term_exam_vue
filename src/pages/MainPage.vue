<template>
    <div><Banner/>
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
    Banner
  },
  data: () => ({
    cars: []
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
