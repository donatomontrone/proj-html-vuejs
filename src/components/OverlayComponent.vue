<template>
    <section id="newsletter" class="overlay">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-none d-md-block">
                    <img :src="store.getImagePath('img/news.png')" alt="imamgine cani">
                </div>
                <div class=" col-12 col-lg-6  ">
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

.overlay {
    width: 65%;
    position: absolute;
    padding: 3rem;
    background-color: $main-brand-color;
    border-radius: 10px;
    color: white;
    transform: translate(-50%, -50%);
    left: 50%;
}

input {
    height: 55px;


    &::placeholder {
        font-size: 1.1rem;
    }

}

span.input-button {
    background-color: $main-brand-color;
    color: $primary-light-color
}

img {
    position: absolute;
    height: 300px;
    bottom: 0;
    left: 5%;
}

h4 {
    margin-bottom: 1.5rem;
    font-size: 1.7rem;
}
</style>