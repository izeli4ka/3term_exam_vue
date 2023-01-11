<template>
    <div><Target/>
        <About/>
        <CommentForm @addComment="addComment"/>
        <v-container class="cont">
            <v-row>
                <Comment
            v-for="comment in comments" :key="comment.id"
            :comments="comment"/>
            </v-row>
        </v-container>
        <Form/>
    </div>
</template>

<script>
import Target from "@/components/Target/Target_action";
import About from "@/components/Target/AboutCar";
import Comment from "@/components/Target/CommentCar";
import CommentForm from "@/components/Target/CommentForm";
import Form from "@/components/Target/FormBuy";
export default {
    name: 'CarPage',
    components: {
        Target,
        About,
        Form,
        Comment,
        CommentForm
 }, 
 data: () => ({
    comments: [],
  }),
  mounted(){
    this.fetchTodo()
  },
  methods: {
    fetchTodo(){
        this.axios.get('./comment.json')
            .then(response => this.comments = response.data)
    },
    addComment(comment){
        this.comments.push(comment)
    }
}}
</script>