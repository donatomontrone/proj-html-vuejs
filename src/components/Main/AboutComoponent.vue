<template>
    <!-- sfondo bianco con cane a destra -->
    <section id="about-us">
        <div class="wrapper">
            <div class="d-flex">
                <div class="about-img">
                    <img :src="store.getImagePath('img/about.png')" alt="Woman with two dogs">
                </div>
                <div class="about-text">
                    <img :src="store.getImagePath('img/dog-icon.png')" alt="Dog paw icon">
                    <!-- Mini title della section -Colore preso dalla palette -->
                    <span class="minititle">About Us</span>
                    <h2>Welcome DogMilo Pets</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery
                        of type and scrambled</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery
                        of type and scrambled</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { store } from '../../store.js'
export default {
    name: 'AboutComponent',
    data() {
        return {
            store,
        }
    },
}
</script>
<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;

#about-us {

    margin: 4rem 0;
    background-color: $primary-light-color;
    background-image: url(../../assets/img/dog-logo.png);
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 190px;

    div.about-img,
    div.about-text {
        width: 50%;
    }

    div.about-img img {
        width: 365px;
        margin-left: 1rem;
    }

    div.about-text {
        padding: 4rem 0 0 1.5rem;

        img {
            width: 30px;
        }

        p {
            font-size: .85rem;
        }

    }
}
</style>