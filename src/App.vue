<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/Main/MainComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
  }
}
</script>

<template>
  <HeaderComponent />
  <MainComponent />
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss' as *;
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
</style>
