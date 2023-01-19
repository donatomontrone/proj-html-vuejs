<template>
    <!-- Stilizzare il button per inserirlo nell'header nav e nel jumbotron -->
    <button href="#">{{ headerButton }}</button>
</template>
<script>
export default {
    name: 'ButtonComponent',
    props: [
        'headerButton'
    ],
    data() {
        return {

        }
    },
}
</script>
<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as*;

button {
    color: $primary-light-color;
    text-decoration: none;
    border-radius: 50px;
    border: 0;
    font-weight: 400;
    padding: 10px 20px;
    background-color: $main-brand-color;
}
</style>