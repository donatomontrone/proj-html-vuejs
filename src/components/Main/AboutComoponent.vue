<template>
    <!-- sfondo bianco con cane a destra -->
    <section id="about-us">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="about-img">
                        <img :src="store.getImagePath('img/about.png')" alt="Woman with two dogs" class="img-fluid">
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="about-text pt-lg-5">
                        <div class="section-title pt-5">
                            <img :src="store.getImagePath('img/dog-icon.png')" alt="Dog paw icon">
                            <!-- Mini title della section -Colore preso dalla palette -->
                            <span class="minititle">About Us</span>
                        </div>
                        <h2>Welcome DogMilo Pets</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            gallery of type and scrambled</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            gallery of type and scrambled</p>
                    </div>
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
    margin: 6rem 0;
    background-color: $primary-light-color;
    background-image: url(../../assets/img/dog-logo.png);
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 190px;

    div.about-img img {
        width: 80%;
    }

    div.about-text {
        padding-left: 1rem;

        p {
            font-size: 1.15rem;
            padding-right: 4rem;
        }
    }
}
</style>