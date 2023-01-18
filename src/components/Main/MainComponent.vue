<template>
    <!-- Inserisco i components necessari per le parti che si differenziano -->
    <main>
        <JumbotronComponent />
        <AboutComoponent />
        <ServiceComponent />
        <ChooseComponent />
    </main>
</template>
<script>
import JumbotronComponent from './JumbotronComponent.vue';
import AboutComoponent from './AboutComoponent.vue';
import ServiceComponent from './Service-Com/ServiceComponent.vue';
import ChooseComponent from './ChooseComponent.vue';
export default {
    name: 'MainComponent',
    components: {
        JumbotronComponent,
        AboutComoponent,
        ServiceComponent,
        ChooseComponent,
    }
}
</script>
<style lang="scss" scoped>

</style>