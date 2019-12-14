<template>

</template>


<script>
export default {
computed: {
    question() {
        return this.$route.params.question
        console.log(question())
    },
    created() {
        console.log(this.$route.params.question)
    }
}
    
}
</script>