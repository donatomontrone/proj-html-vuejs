<template>
    <!-- Inserire lo sfondo del jumbotron (b.png) -->
    <section id="jumbotron">
        <div class="wrapper">
            <!-- Dare una witdh che vada quasi al centro della pagina -->
            <div class="jumbo-start h-100 d-flex flex-column justify-content-center">
                <h1>Welcome to dogmilo pets</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quidem eum ducimus.</p>
                <div class="btn-container">
                    <!-- Bottone tag a (classe condivisa get-button) -->
                    <p>item</p>
                    <!-- icona a cui dare uno sfondo con un colore non presente nella palette -->
                    <span>icona</span>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
#jumbotron {
    background-color: grey;
    // Da levare appena verrà inserito lo sfondo
    height: 320px;
}
</style>