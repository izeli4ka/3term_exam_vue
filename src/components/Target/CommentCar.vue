<template>
    <v-col cols='4'>
            <v-card color="#001254">
                <div class="comment-nic">
                <img class="img-photo" :src="'../images/'+comments.full_image" alt="photo">
                <v-card-title>{{comments.name}}</v-card-title>
                </div>
                <v-card-text>
                    <p class="comment-text">{{comments.desc}}</p>
                </v-card-text>
            </v-card>
    </v-col>
</template>

<script>
export default {
 props:{
    comments: {
        type: Object,
        required: true
    }
 }
};
</script>