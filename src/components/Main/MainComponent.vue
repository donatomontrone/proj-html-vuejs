<template>
    <!-- Inserisco i components necessari per le parti che si differenziano -->
    <main>
        <JumbotronComponent />
        <AboutComoponent />
    </main>
</template>
<script>
import JumbotronComponent from './JumbotronComponent.vue';
import AboutComoponent from './AboutComoponent.vue';
export default {
    name: 'MainComponent',
    components: {
        JumbotronComponent,
        AboutComoponent,
    }
}
</script>
<style lang="scss" scoped>

</style>