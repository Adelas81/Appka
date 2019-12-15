<template>
    <div>
        <carousel :per-page="1">
            <slide>
                <img src="https://picsum.photos/300/100/" style="width: 300px; max-width: 100%;">
            </slide>
            <slide>
                <img src="https://picsum.photos/300/100/" style="width: 300px; max-width: 100%;">
            </slide>
            <slide>
                <img src="https://picsum.photos/300/100/" style="width: 300px; max-width: 100%;">
            </slide>
            <slide>
                <img src="https://picsum.photos/300/100/" style="width: 300px; max-width: 100%;">
            </slide>
        </carousel>
    </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
        Carousel,
        Slide
    }    
}
</script>

<style scoped>
    .VueCarousel-slide {
    position: relative;
    background: #42b983;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 100px;
    }

    .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
</style>