<template>
  <div v-if="currentQuestion">
    <h1> {{currentQuestion.question}} </h1>

    <div v-for="(answer,index) in currentQuestion.answers" v-bind:key="index"> {{answer}}
  </div>
   </div>

</template>

<script>
export default {

  data() {
    return {
      questions: [],
      currentQuestion: null,
       
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

  }

   

 
  
  
}
</script>
