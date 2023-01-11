<template>
    <v-col cols='4'>
        <router-link :to="{name: 'CarsId', params: {id: cars.id},}">
            <v-card>
                <v-card-title>{{cars.name}}</v-card-title>
                <v-card-text>
                    <v-img
                        height = '200px'
                        :src="'images/'+cars.full_image"
                    >
                    </v-img>
                </v-card-text>
            </v-card>
        </router-link>
    </v-col>
</template>

<script>
export default {
 props:{
    cars: {
        type: Object,
        required: true
    }
 }
};
</script>