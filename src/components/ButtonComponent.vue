<template>
    <!-- Stilizzare il button per inserirlo nell'header nav e nel jumbotron -->
    <button href="#" class="">{{ headerButton }}</button>
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
    font-weight: 500;
    font-size: 21px;
    padding: 10px 25px;
    background-color: $main-brand-color;

    &:hover {
        background-color: $hover-btn-color;
    }
}
</style>