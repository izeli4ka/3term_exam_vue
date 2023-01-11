<template>
    <div class="section2">
        <div class="img-about"><img class="img-about-car" src="/images/car_interior.webp" alt="calon"></div>
        <p class="description-car">Лаконичность, экспрессивность, неподвластность времени – отличительные признаки Taycan, внешний облик которого подчеркивает динамичная линия Flyline. Этот автомобиль предлагает много свободного места в переднем и заднем багажнике, а также гарантирует эксклюзивный комфорт в салоне для 4 человек. Taycan Cross Turismo громко заявляет о своих амбициях, которые подчеркивают выразительные акценты пакета Offroad Design и эффектная задняя часть в стиле Cross Turismo, позволяющая увеличить вместимость багажника и запас пространства над головами задних пассажиров.</p>
    </div>
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