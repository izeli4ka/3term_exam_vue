<template>
<div class="field">
    <v-container>
        <p class="paragraph-comment">Оставьте свой отзыв!</p>
        <v-row class="d-flex">
            <v-text-field background-color="#001254" outlined class="ml-3" v-model="name"/>
            <v-text-field background-color="#001254" outlined class="ml-3" v-model="desc"/>
            <v-btn outlined color="white" @click="addComment">Отправить</v-btn>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    data:()=> ({
        name: '',
        desc: ''
    }),
    methods: {
        addComment(){
            let comment = {
                id: Date.now(),
                name: this.name,
                desc: this.desc,
                full_image: "Screenshot_3.png",
            }
            this.$emit('addComment', comment)
        },
    },
 props:{
    comments: {
        type: Object,
        required: true
    }
 }
};
</script>