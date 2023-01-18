<template>
    <!-- Inserisco i components necessari per le parti che si differenziano -->
    <main>
        <JumbotronComponent />
        <AboutComoponent />
        <ServiceComponent />
    </main>
</template>
<script>
import JumbotronComponent from './JumbotronComponent.vue';
import AboutComoponent from './AboutComoponent.vue';
import ServiceComponent from './ServiceComponent.vue';
export default {
    name: 'MainComponent',
    components: {
        JumbotronComponent,
        AboutComoponent,
        ServiceComponent,
    }
}
</script>
<style lang="scss" scoped>

</style>