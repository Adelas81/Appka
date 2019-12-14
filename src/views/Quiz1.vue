<template>
  <div v-if="currentQuestion">
    <header>

      <h1> {{currentQuestion.question}} </h1>

    </header>

    <div  class="kontejner">

      <div v-for="(answer,index) in currentQuestion.answers" v-bind:key="index" class="foto">
          <img v-bind:src="`/quiz1/images/${answer}`" alt="kacka"
          v-on:click="selectAnswer(index)" >     
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
       
    }
  },

  created() {
    this.fetchData()
  },

  watch: {
    $route(to, from) {
      this.showQuestion(to.params.question) 
    },


  },

  methods: {
    
    fetchData () { 
      this.error = null 
      fetch('/database/quiz1.json')       
      .then(response => response.json())
      .then(data => {
        this.questions = data.questions;
        this.showQuestion(this.$route.params.question)
      
      })
    },
    showQuestion(id) {
      this.currentQuestion = this.questions[id]
    },
    selectAnswer(index) {
      if (this.currentQuestion.correct === index)  {
        this.currentQuestion.answers = [this.currentQuestion.answers[index]]
        
        setTimeout(function(){ 
        this.$router.push({name:'quiz1', params: {question: this.$route.params.question + 1}})  
        }, 1000);
      } else {
        console.log('spatne')
      }

    }

  }

   
 
 
  
  
}
</script>
