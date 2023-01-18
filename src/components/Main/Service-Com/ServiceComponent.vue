<template>
    <!-- Inserire lo sfondo preso dalla palette ed aggiungere cane a destra e sinistra -->
    <section id="service">
        <div class="wrapper">
            <div class="text-center">
                <!-- Mini title della section - colore preso dalla palette -->
                <p>Service</p>
                <h2>titolo</h2>
                <!-- Effettuare un vfor per ogni card -->
                <ServiceCardComponent />
            </div>
        </div>
    </section>
</template>
<script>
import ServiceCardComponent from './ServiceCardComponent.vue'
export default {
    name: 'ServiceComponent',
    components: {
        ServiceCardComponent,
    },
    data() {
        return {

        }
    },
}
</script>
<style lang="scss" scoped>
section#service {
    background-color: grey;
}
</style>