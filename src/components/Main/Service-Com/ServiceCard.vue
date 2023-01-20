<!--effettuare un v-for al parent -->
<template>
    <div class="col-12 col-sm-6 col-md">
        <div class="card-container p-3">
            <div class="card-info d-flex flex-column justify-content-center align-items-center">
                <img class="path" :src="store.getImagePath('img/' + serviceCardInfo.path)" :alt="serviceCardInfo.title">
                <h6 class="text-center">{{ serviceCardInfo.title }}</h6>
                <p class="text-center">{{ serviceCardInfo.text }}</p>
                <div class="icon d-flex justify-content-center">
                    <img :src="store.getImagePath('img/' + serviceCardInfo.icon)" alt="button">
                </div>
            </div>
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

div.card-container {
    // width: 20%;
    // height: 320px;
}

div.card-info {
    background-color: $main-brand-color;
    border-radius: 100px;
    color: $secondary-light-color;
    padding: 1rem;

    &:hover {
        background-color: $secondary-brand-color;
    }

    h6 {
        font-size: 1.15rem;
    }

    p {
        color: $secondary-light-color;
    }

    img.path {
        width: 70px;
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