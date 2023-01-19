<template>
    <!-- Inserire lo sfondo del jumbotron (b.png) -->
    <!-- In un secondo momento cercare di fare uno slider -->
    <section id="jumbotron">
        <div class="wrapper">
            <!-- Dare una witdh che vada quasi al centro della pagina -->
            <div class="jumbo-start h-100 d-flex flex-column justify-content-center">
                <h1>Welcome to <span>DogMilo</span> Pets</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="btn-container">
                    <ButtonComponent :headerButton="store.buttons[1]" />
                    <!-- icona a cui dare uno sfondo con un colore non presente nella palette -->
                    <img :src="store.getImagePath()" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { store } from '../../store.js'
import ButtonComponent from '../ButtonComponent.vue';
export default {
    name: 'JumbotronComponent',
    components: {
        ButtonComponent,
    },
    data() {
        return {
            store,
        }
    },
}
</script>
<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;

#jumbotron {
    background-image: url('../../assets/img/b.png');
    background-position: center;
    background-size: cover;
    height: 420px;
    color: $primary-light-color
}

div.jumbo-start {
    width: 40%;
}
</style>