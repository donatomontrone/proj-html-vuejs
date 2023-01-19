<template>
    <section id="newsletter">
        <div class="overlay-wrapper">
            <div class="overlay d-flex">
                <div class="left">
                    <img :src="store.getImagePath('img/news.png')" alt="imamgine cani">
                </div>
                <div class="right">
                    <h4>Subscribe to Our Newsletter</h4>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Your Email Here" aria-label="email"
                            aria-describedby="basic-addon1">
                        <span class="input-group-text input-button" id="basic-addon1">@</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { store } from '../store.js';
export default {
    name: 'OverlayComponent',
    data() {
        return {
            store,
        }
    },
}
</script>
<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.overlay-wrapper {
    position: relative;
}

.overlay {
    position: absolute;
    padding: 1em;
    background-color: $main-brand-color;
    border-radius: 10px;
    color: white;
    margin: 0 5em 0 0;
    transform: translate(-50%, -50%);
    left: 50%;
    width: 48%;
}

input::placeholder {
    font-size: .6rem;
}

span.input-button {
    background-color: $main-brand-color;
    color: $primary-light-color
}

div.left,
div.right {
    width: 50%;
}

div.left img {
    position: absolute;
    height: 220px;
    bottom: 0;
    left: 5%;
}

div.right h4 {
    margin: 2rem 0 1rem 0;
    font-size: 1.2rem;
}
</style>