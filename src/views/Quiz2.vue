<template>
  <div class="pozadi">
    <h1>NAJDI MLÁĎÁTKO...</h1>

    <div class="kontejner">
      <div class="foto tygr">
        <img src="quiz2/images/tygr.jpeg" alt="tygr" class="tygr" />
      </div>

    

      <div class="modry">
        <img src="quiz2/images/button_confirm_modra.jpg" alt="button" class="button" />
      </div>
    </div>

    <carousel :per-page="1">
      <slide v-for="(animal) of animals" v-bind:key="animal.id">
        <img
          v-bind:src=" 'quiz2/images/' + animal.imageYoung"
          class="younganimal"
          style="width: 300px; max-width: 100%;"
        />
      </slide>
    </carousel>
  </div>
</template>


<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  },

  data() {
    return {
      animals: [],
      currentQuestion: null,
      correctAnswer: null
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.error = null;
      fetch("/database/quiz2.json")
        .then(response => response.json())
        .then(data => {
          this.animals = data;
          //   this.showQuestion(this.$route.params.question);
        });
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: "Amatic SC", cursive;
  text-align: center;
  font-size: 40px;
  color: rgb(103, 162, 211);
  font-weight: bold;
  background-color: white;

  border-style: solid;
  border-width: 4px;
  border-color: rgb(247, 249, 250);
  border-radius: 10px;

  padding: 5px;
  margin: 30px 30px 20px 30px;
}

.pozadi {
  background-image: url("/quiz2/pozadi/pozadi-ovecky-modre.jpg");
  background-repeat: no-repeat;
  margin: 0px;
  min-width: 100vw;
  min-height: 100vh;
  background-size: cover;
  position: fixed;
}

img {
  border: 4px solid rgb(103, 162, 211);
  width: 80%;
  border-radius: 10%;
  margin: 5px 10px 5px 10px;
}

.kontejner {
  text-align: center;
  position: relative;
}

.modry {
  position: absolute;
  top: 520px;
  left: 150px;
  width: 20%;
}

.VueCarousel-slide {
  position: relative;
  background: rgba(66,185,131,0.01);
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 130px;
  margin-top: 50px;
}

.younganimal {
    height: 170px;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.VueCarousel-dot {
  color: rgb(103, 162, 211);
}

.VueCarousel-pagination {
    margin-top: -40px;
}
</style>