<template>
  <div class="pozadi" v-if="currentQuestion">
    <h1>{{currentQuestion.question}}</h1>

    <div class="kontejner">
      <div v-for="(answer,index) in currentQuestion.answers" v-bind:key="index" class="foto">
        <img v-bind:src="`/quiz1/images/${answer}`" alt="kacka" v-on:click="selectAnswer(index)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [],
      currentQuestion: null,
      correctAnswer: null
    };
  },

  created() {
    this.fetchData();
  },

  watch: {
    $route(to, from) {
      this.showQuestion(to.params.question);
    }
  },

  methods: {
    fetchData() {
      this.error = null;
      fetch("/database/quiz1.json")
        .then(response => response.json())
        .then(data => {
          this.questions = data.questions;
          this.showQuestion(this.$route.params.question);
        });
    },
    showQuestion(id) {
      this.currentQuestion = this.questions[id];
      let audio = new Audio(`sounds/${this.currentQuestion.audio}`);
      audio.play();
      console.log(this.currentQuestion);
    },
    selectAnswer(index) {
      if (this.currentQuestion.correct === index) {
        // this.currentQuestion.answers = [this.currentQuestion.answers[index]]
        let audio = new Audio("/sounds/pozitivni.mp3");
        audio.play();
        console.log(typeof this.$route.params.question);

        setTimeout(() => {
          this.$router.push({
            name: "quiz1",
            params: { question: parseInt(this.$route.params.question, 10) + 1 }
          });
        }, 3000);
      } else {
        let audio = new Audio("/sounds/negativni.wav");
        audio.play();
      }
    }
  }
};
</script>

<style scoped >
/* MOBIL */

h1 {
  font-family: "Amatic SC", cursive;
  text-align: center;
  font-size: 40px;
  color: rgb(211, 103, 139);
  font-weight: bold;
  background-color: white;

  border-style: solid;
  border-width: 4px;
  border-color: rgb(245, 239, 241);
  border-radius: 10px;

  padding: 10px;
  margin: 20px 30px 20px 30px;
}

.pozadi {
  margin: 0px;
  min-width: 100vw;
  min-height: 100vh;
  background: url("/quiz1/pozadi/pozadi-ovecky-ruzove.jpg") center, no-repeat;
  background-size: cover;
  position: fixed;
}

img {
  border: 4px solid rgb(211, 103, 139);
  border-radius: 10%;
  margin: 5px 10px 5px 10px;
  width: 50%;
  max-height: 150px;
  object-fit: fill;
  min-height: 150px;
}



.kontejner {
  text-align: center;
}
</style>
