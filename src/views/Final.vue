<template>
    <div class="pozadi">
        <h1> dobrá práce :) </h1>
        <img v-on:click="buttonKlikHome()" class="home" src="/final/home.jpeg" alt="tlacitko Home">
        <img v-on:click="buttonKlikAgain()" class="again" src="/final/again.png" alt="tlacitko Hrat znovu">
    </div>

</template>

<script>
var audio = new Audio("/sounds/christmas-intro.mp3");
export default {
    created() {
        audio.play()
    },
    methods: {
        buttonKlikHome() {
            audio.pause()
            audio.currentTime = 0
            this.$router.push({path: '/'})
        },
        buttonKlikAgain() {
            audio.pause()
            audio.currentTime = 0
            this.$router.push({path: '/quiz/1/0'})
        }
    }

}
</script>

<style scoped>

/* MOBIL */
.pozadi {
    background-image: url("/final/duha.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    position: relative;
    width: 100vw;
    height: 100vh;

}

header {
    color: transparent;
}

h1 {    
    font-family: 'Amatic SC', cursive; 
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
    position: absolute;
    bottom: 150px;
    left: 90px;
}

* {
    margin: 0;
    padding: 0;
}


.home {
    position: absolute;
    top: 25px;
    left: 260px;
    width: 15%;
    border-radius: 50%;
    box-shadow: 3px 3px 3px 3px rgb(135, 152, 185);
}

.again {
    position: absolute;
    top: 220px;
    left: 120px;
    width: 40%;
    border-radius: 50%;
    box-shadow: 5px 5px 5px 5px rgb(185, 135, 150);
}
    
    
</style>