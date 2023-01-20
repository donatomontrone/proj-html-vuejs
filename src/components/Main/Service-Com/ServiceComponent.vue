<template>
    <!-- Inserire lo sfondo preso dalla palette ed aggiungere cane a destra e sinistra -->
    <section id="service">
        <div class="bg-left">
            <div class="bg-right">
                <div class="d-flex flex-column align-items-center">
                    <!-- Mini title della section - colore preso dalla palette -->
                    <span class="minititle"> Service </span>
                    <h3 class="text-center">DogMilo Pet Care Services <br>For Your Best Friends.</h3>
                    <!-- Effettuare un vfor per ogni card -->
                    <div class="container">
                        <div class="row">
                            <ServiceCard v-for="serviceCard in services" :serviceCardInfo="serviceCard" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import ServiceCard from './ServiceCard.vue'
export default {
    name: 'ServiceComponent',
    components: {
        ServiceCard,
    },
    data() {
        return {
            services: [
                {
                    path: 'd-1.png',
                    title: 'Pet Sitting',
                    text: 'The readable content of a page when looking at its layout.',
                    icon: 'right.png'
                },
                {
                    path: 'd-2.png',
                    title: 'Puppy Sitting',
                    text: 'The readable content of a page when looking at its layout.',
                    icon: 'right.png'
                },
                {
                    path: 'd-3.png',
                    title: 'Dog Walking',
                    text: 'The readable content of a page when looking at its layout.',
                    icon: 'right.png'
                },
                {
                    path: 'd-4.png',
                    title: 'Night Care',
                    text: 'The readable content of a page when looking at its layout.',
                    icon: 'right.png'
                },
                {
                    path: 'd-5.png',
                    title: 'Pet Sitting',
                    text: 'The readable content of a page when looking at its layout.',
                    icon: 'right.png'
                },
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
@use '../../../styles/partials/variables.scss' as *;

section#service {
    padding: 2.7rem 0;
    background-color: $secondary-light-color;

    div.bg-left {
        background-image: url(../../../assets/img/dog-left.png);
        background-repeat: no-repeat;
        background-position: top left;
        background-size: 135px;
    }

    div.bg-right {
        background-image: url(../../../assets/img/dog-logo.png);
        background-repeat: no-repeat;
        background-position: top right;
        background-size: 190px;
    }

    span {
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    h3 {
        font-size: 2rem;
    }



}
</style>