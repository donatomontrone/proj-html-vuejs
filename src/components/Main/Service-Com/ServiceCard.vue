<!--effettuare un v-for al parent -->
<template>
    <div class="card-info d-flex flex-column align-items-center">
        <img class="path" :src="store.getImagePath('img/' + serviceCardInfo.path)" :alt="serviceCardInfo.title">
        <h6 class="text-center">{{ serviceCardInfo.title }}</h6>
        <p class="text-center">{{ serviceCardInfo.text }}</p>
        <div class="icon d-flex justify-content-center">
            <img :src="store.getImagePath('img/' + serviceCardInfo.icon)" alt="button">
        </div>
    </div>
</template>
<script>
import { store } from '../../../store.js'
export default {
    name: 'ServiceCard',
    props: [
        'serviceCardInfo'
    ],
    data() {
        return {
            store,
        }
    }
}
</script>
<style lang="scss" scoped>
@use '../../../styles/partials/variables.scss' as *;

div.card-info {
    background-color: $main-brand-color;
    width: 140px;
    border-radius: 100px;
    padding: 1rem;
    color: $secondary-light-color;

    &:hover {
        background-color: $secondary-brand-color;
    }

    h6 {
        font-size: .85rem;
    }

    p {
        font-size: .7rem;
        margin-bottom: 1.2rem;
    }

    img.path {
        width: 50px;
        margin-bottom: .8rem;
    }

    div.icon {
        background-color: $icon-color;
        padding: .5rem;
        border-radius: 100%;
        width: 40px;
        height: 40px;

        img {
            width: 13px;
        }
    }
}
</style>