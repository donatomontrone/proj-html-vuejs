<template>
    <!-- Inserire lo sfondo preso dalla palette ed aggiungere cane a destra e sinistra -->
    <section id="service">
        <div class="bg-left">
            <div class="bg-right">
                <div class="wrapper">
                    <div class="d-flex flex-column align-items-center">
                        <!-- Mini title della section - colore preso dalla palette -->
                        <span class="minititle"> Service </span>
                        <h2 class="text-center">DogMilo Pet Care Services For Your Best Friends.</h2>
                        <!-- Effettuare un vfor per ogni card -->
                    </div>
                    <div class="card-container d-flex justify-content-around">
                        <ServiceCard v-for="serviceCard in services" :serviceCardInfo="serviceCard" />
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

    h2 {
        width: 320px;
        font-size: 1.5rem;
    }

    span {
        font-size: .8rem;
    }
}
</style>