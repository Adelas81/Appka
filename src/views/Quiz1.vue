<template>
 
</template>

<script>
export default {
  data() {
    return {
      questions: []
    }
  },

  computed: {
    question() {
      return this.$route.params.question
      console.log(question())
    }
  },  
  created() {
    console.log(this.$route.params.question)
    
    fetch('/database/quiz1.json')       
    .then(response => response.json())
    .then(data => {
      this.questions = data;
      console.log(this.questions)
    })
  },
  
  
}
</script>
