<template>
    <!-- Inserisco i components necessari per le parti che si differenziano -->
    <main>
        <JumbotronComponent />
        <AboutComoponent />
        <ServiceComponent />
        <ChooseComponent />
        <ReviewRatingComponent />
    </main>
</template>
<script>
import JumbotronComponent from './JumbotronComponent.vue';
import AboutComoponent from './AboutComoponent.vue';
import ServiceComponent from './Service-Com/ServiceComponent.vue';
import ChooseComponent from './ChooseComponent.vue';
import ReviewRatingComponent from './Review-Rating/ReviewRatingComponent.vue';
export default {
    name: 'MainComponent',
    components: {
        JumbotronComponent,
        AboutComoponent,
        ServiceComponent,
        ChooseComponent,
        ReviewRatingComponent,
    }
}
</script>
<style lang="scss" scoped>

</style>