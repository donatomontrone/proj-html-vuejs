<template>
    <!-- Inserire lo sfondo del jumbotron (b.png) -->
    <!-- In un secondo momento cercare di fare uno slider -->
    <section id="jumbotron">
        <div class="wrapper">
            <div class="jumbo-start h-100 d-flex flex-column justify-content-center">
                <h1>Welcome to <span class="fw-lighter">DogMilo</span> Pets</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="btn-container d-flex">
                    <ButtonComponent :headerButton="store.buttons[1]" />
                    <!-- icona a cui dare uno sfondo con un colore non presente nella palette -->
                    <div class="play-bg">
                        <img :src="store.getImagePath('img/play.png')" alt="Play Icon">
                    </div>
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
    height: 430px;
    color: $primary-light-color;
}

div.jumbo-start {
    width: 38%;
    font-size: .95rem;

    h1 {
        font-size: 2.2rem;
        margin-right: 2rem;
        margin-bottom: 1rem;
    }

    div.play-bg {
        height: 45px;
        width: 45px;
        margin-left: .5rem;
        background-color: #70D0FA;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12%;

        img {
            width: 80%;

        }
    }
}
</style>