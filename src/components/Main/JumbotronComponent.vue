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
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1>{{ slides[currentActive].title }}</h1>
                            <p>{{ slides[currentActive].text }}</p>
                            <div class="btn-container d-flex">
                                <ButtonComponent :headerButton="store.buttons[1]" />
                                <div class="play-bg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <img :src="store.getImagePath('img/' + slides[currentActive].buttonPath)"
                                        alt="Play Icon">
                                </div>
                            </div>
                        </div>
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
    <!-- Button trigger modal -->
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Video</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-relative">
                    <img :src="store.getImagePath('img/sddefault.jpg')" alt="CoComelon video cover" class="img-fluid">
                    <img :src="store.getImagePath('img/image (8).svg')" alt="YouTube Logo" class="play-button">
                    <div class="title-video">
                        <img :src="store.getImagePath('img/unnamed.jpg')" alt="CoComelo Logo"
                            class="channel-logo rounded-circle">
                        <p class="title-text"> Pet Care Song | CoComelon Nursery Rhymes & Kids Songs </p>
                        <img :src="store.getImagePath('img/image (6).svg')" alt="Other icon" class="icon-menu">
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
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
    color: $primary-light-color;
    position: relative;
    height: 575px;



    img.jumbo-img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    div.arrow-buttons img {
        width: 30px;
        position: absolute;
        top: 310px;
        filter: invert(70%) sepia(100%) saturate(1704%) hue-rotate(198deg) brightness(109%) contrast(105%);

        &.next {
            right: 4px;

        }

        &.prev {
            left: 4px;
        }

    }
}

div.jumbo-info {
    width: 32%;
    position: absolute;
    top: 20%;
    left: 10%;

    h1 {
        font-size: 3rem;
        font-weight: 600;
    }

    p {
        color: $primary-light-color;
        font-size: 1.25rem;
        padding: 1rem 0;
    }

    div.play-bg {
        height: 60px;
        width: 60px;
        margin-left: .5rem;
        background-color: #70D0FA;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12%;
        cursor: pointer;

        img {
            width: 60%;
        }
    }

}

img.play-button {
    width: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

img.channel-logo {
    width: 40px;
    position: absolute;
    top: 35px;
    left: 35px;
}

p.title-text {
    color: $primary-light-color;
    position: absolute;
    top: 42px;
    left: 85px;
    font-size: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 355px;
    white-space: nowrap;
}

img.icon-menu {
    position: absolute;
    top: 37px;
    width: 40px;
    right: 20px;
}
</style>