<template>
    <div>
        <section class="section1">
          <div class="content1">
            <h2 class="buy-car">{{cars.name}}</h2>
            <h1 class="buy-car-dream">Купите автомобиль своей мечты!</h1>
            <h2 class="h2">{{cars.price}} рублей</h2>
            <v-btn
                color="white"
                outlined
                x-large
                ><a href="#buy">Купить</a></v-btn>
          </div>
          <div class="banner-img"><img class="img-banner" :src="'/images/'+cars.full_image" alt="Porsche"></div>
    </section>
    <div class="section2">
        <div class="img-about"><img class="img-about-car" :src="'/images/'+cars.car_interior" alt="calon"></div>
        <p class="description-car">{{cars.desc}}</p>
    </div>
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
import Form from "@/components/Target/FormBuy";
import Comment from "@/components/Target/CommentCar";
import CommentForm from "@/components/Target/CommentForm";
export default {
    components: {
        Form,
        Comment,
        CommentForm
    }, 
    name: 'CarPage',
    created: function(){
        this.getCars();
    },
    data: function(){
        return{
            CarsId: this.$route.params.id,
            cars: {},
            comments: [],
        }
        
    },
    
    // mounted(){
    //     this.fetchTodo()
    // },
    mounted(){
    this.fetchTodo()
    },
    methods: {
        getCars: function (){
            this.axios
            .get('../main.json')
            .then((response) => {
                response.data.forEach((element) => {
                    if (element.id == this.CarsId) {
                        this.cars = element;
                    }
                });
            })
            .catch(function (error){
                console.log(error);
            });
                
                // .then(response => console.log(response.data))
                
        },
        fetchTodo(){
        this.axios.get('../comment.json')
            .then(response => this.comments = response.data)
        },
        addComment(comment){
        this.comments.push(comment)
        }
    }
};
</script>



