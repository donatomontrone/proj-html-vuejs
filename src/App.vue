<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/Main/MainComponent.vue';
import OverlayComponent from './components/OverlayComponent.vue'
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    OverlayComponent,
    FooterComponent
  }
}
</script>

<template>
  <HeaderComponent />
  <MainComponent />
  <OverlayComponent />
  <FooterComponent />
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss' as *;
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
</style>
