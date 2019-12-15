<template>
    <div>
        <img src="/final/images/home.jpeg" alt="tlacitko Home">
        <img src="/final/images/again.png" alt="tlacitko Hrat znovu">
    </div>

</template>

<script>
export default {
    

}
</script>

<style scoped>

/* MOBIL */
.hlavicka {
    background-image: url("/final/images/duha.jpg");
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


.balonky {
    width: 100%;
    margin: 0;
    padding: 0;
}

* {
    margin: 0;
    padding: 0;
    }


.home {
    position: absolute;
    top: 20px;
    left: 340px;
    width: 10%;
    border-radius: 50%;
    box-shadow: 3px 3px 3px 3px rgb(135, 152, 185);
}

.again {
    position: absolute;
    top: 200px;
    left: 120px;
    width: 40%;
    border-radius: 50%;
    box-shadow: 5px 5px 5px 5px rgb(185, 135, 150);
}

    
</style>