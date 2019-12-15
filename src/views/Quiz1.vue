<template>
  <div class="pozadi" v-if="currentQuestion">
    <h1>{{currentQuestion.question}}</h1>

    <div class="kontejner">
      <div v-for="(answer,index) in currentQuestion.answers" v-bind:key="index" class="foto">
        <transition name="fade" appear>
          <img
            v-if="transition[index]"
            v-bind:src="`/quiz1/images/${answer}`"
            v-on:click="selectAnswer(index)"
          />
        </transition>
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
      correctAnswer: null,
      selectAnswerIsDisabled: false,
      transition: {
        0: true,
        1: true,
        2: true
      }
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
    },
    selectAnswer(index) {
      if (this.selectAnswerIsDisabled) return;

      if (this.currentQuestion.correct === index) {
        this.hideWrongAnswers(index);
        this.selectAnswerIsDisabled = true;

        let audio = new Audio("/sounds/pozitivni.mp3");
        audio.play();

        let nextQuestion = parseInt(this.$route.params.question, 10) + 1;

        setTimeout(() => {
          this.selectAnswerIsDisabled = false;
          this.resetTransition();
          this.$router.push({
            name: "quiz1",
            params: {
              question: nextQuestion + ""
            }
          });
        }, 3000);
      } else {
        let audio = new Audio("/sounds/negativni.wav");
        audio.play();
      }
    },
    hideWrongAnswers(correctAnswerIndex) {
      let vm = this;
      this.currentQuestion.answers.forEach(function(value, index) {
        if (index !== correctAnswerIndex) {
          vm.transition[index] = false;
        }
      });
    },

    resetTransition() {
      this.transition = {
        0: true,
        1: true,
        2: true
      };
    }
  }
};
</script>

<style scoped >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

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

  padding: 5px;
  margin: 30px 30px 20px 30px;
}

.pozadi {
  margin: 0px;
  min-width: 100vw;
  min-height: 100vh;
  background: url("/quiz1/pozadi/pozadi-ovecky-ruzove.jpg") center, no-repeat;
  background-size: cover;
}

img {
  border: 4px solid rgb(211, 103, 139);
  border-radius: 10%;
  margin: 5px 10px 5px 10px;
  width: 50%;
  max-height: 150px;
  object-fit: fill;
}

/* .kviz {
    flex: 1 1 auto;
} */

.kontejner {
  text-align: center;
  /* display: grid;
    grid-template-rows: repeat(3, 1fr);
    object-fit: cover; */
}
</style>
