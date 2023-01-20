<template>
    <!-- Inserire lo sfondo del jumbotron (b.png) -->
    <!-- In un secondo momento cercare di fare uno slider -->
    <!-- <section id="jumbotron">
        <div class="wrapper">
            <div class="jumbo-start h-100 d-flex flex-column justify-content-center">
                <h1>Welcome to <span class="fw-lighter">DogMilo</span> Pets</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="btn-container d-flex">
                    <ButtonComponent :headerButton="store.buttons[1]" />
                    icona a cui dare uno sfondo con un colore non presente nella palette
                    <div class="play-bg">
                        <img :src="store.getImagePath('img/play.png')" alt="Play Icon">
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <section>
        <div id="jumbotron">
            <img :src="store.getImagePath('img/' + slides[currentActive].path)" :alt="slides[currentActive].title"
                class="jumbo-img">
            <div class="jumbo-info">
                <h1>{{ slides[currentActive].title }}</h1>
                <p>{{ slides[currentActive].text }}</p>
                <div class="btn-container d-flex">
                    <ButtonComponent :headerButton="store.buttons[1]" />
                    <div class="play-bg">
                        <img :src="store.getImagePath('img/' + slides[currentActive].buttonPath)" alt="Play Icon">
                    </div>
                </div>
            </div>
            <div class="arrow-buttons">
                <img :src="store.getImagePath('img/left-arrow.png')" alt="prev slide arrows" class="prev"
                    @click="prevSlide()">
                <img :src="store.getImagePath('img/next.png')" alt="next slide arrow" class="next" @click="nextSlide()">
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
            slides: [
                {
                    path: 'b.png',
                    title: 'Welcome to DogMilo Pets',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    buttonPath: 'play.png'
                },
                {
                    path: 'c.png',
                    title: 'Welcome to DogMilo Pets',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    buttonPath: 'play.png'
                },
                {
                    path: 'a.png',
                    title: 'Welcome to DogMilo Pets',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    buttonPath: 'play.png'
                },
            ],
            currentActive: 0,
        }
    },
    methods: {
        nextSlide() {
            this.currentActive++;
            if (this.currentActive === this.slides.length) {
                this.currentActive = 0;
            }
        },
        prevSlide() {
            this.currentActive--;
            if (this.currentActive < 0) {
                this.currentActive = this.slides.length - 1
            }
        },
    },
}
</script>
<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;

#jumbotron {
    height: 430px;
    color: $primary-light-color;
    position: relative;

    img.jumbo-img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    div.arrow-buttons img {
        width: 30px;
        position: absolute;
        top: 310px;
        filter: invert(60%) sepia(15%) saturate(1704%) hue-rotate(198deg) brightness(109%) contrast(105%);
        opacity: .5;

        &.next {
            right: 4px;

        }

        &.prev {
            left: 4px;
        }

        &:hover {
            opacity: 1;
        }
    }
}

div.jumbo-info {
    width: 23%;
    font-size: .95rem;
    position: absolute;
    top: 110px;
    left: 290px;

    h1 {
        font-size: 2.2rem;
        margin-right: 2rem;
        margin-bottom: 1rem;
    }

    p {
        color: $primary-light-color;
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