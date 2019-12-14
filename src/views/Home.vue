<template>
  <div class="pozadi"> 

    <h1> Kids </h1> 
    <h2> App </h2>

    <img v-on:click="buttonKlik()" class="tlacitko-cz" src="/home/images/button-cz.jpg" alt="tlacitko cestina">

    <img class="tlacitko-en" src="/home/images/button-en.jpg" alt="tlacitko anglictina">
    
  </div>
</template>

<script>


export default {
  name: 'home',

  methods: {
    buttonKlik() {
      this.$router.push({path:  '/quiz/1/1'})
    }
  }

}
</script>

<style scoped>

.pozadi {
    margin: 0px;
    min-width: 100vw;
    min-height: 100vh;
    background: url('/home/images/pozadi-web.jpg') center, no-repeat;
    background-size: cover;
    text-align: center;
    position: relative;
}

h1,
h2 {
    font-family: strumpf-std-contour, sans-serif;
    font-weight: 400;
    font-size: 5em;
    text-align: center;
    display: inline-block;
    color: rgb(224, 245, 245)
    
}

h1 { 
    margin-top: 20px;
    position: absolute;
    left: 50px;
}

h2 {
    position: absolute;
    top: 20px;
    right: 50px;
}

.tlacitko-cz {
    max-width: 20%;
    border: 5px solid white;
    border-radius: 50%;
    position: absolute;
    bottom: 30px;
    left: 50px; 
}

.tlacitko-en {
    max-width: 20%;
    border: 2px solid white;
    border-radius: 50%;
    position: absolute;
    bottom: 30px;
    right: 50px; 
    
    
}

</style>
