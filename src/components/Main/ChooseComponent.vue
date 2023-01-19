<template>
    <section id="choose-us">
        <div class="d-flex">
            <div class="choose-img">
                <img :src="store.getImagePath('img/why.png')" alt="woman with a dog">
            </div>
            <div class="choose-text">
                <img :src="store.getImagePath('img/dog-icon.png')" alt="Dog paw icon" class="paw-icon">
                <!-- Mini title della section -Colore preso dalla palette -->
                <span class="minititle">Choose Us</span>
                <h2>Why Choose Us?</h2>
                <!-- Effettuare un v-for e nei data inserire nell'aggetto una key per gestire la witdh -->
                <article v-for="(article, index) in chooseList" :class="applyWidth(index)" class="d-flex ">
                    <div class="img-container">
                        <img :src="store.getImagePath(`img/${article.path}`)" alt="immagine">
                    </div>
                    <div class="text-container">
                        <h3>{{ article.title }}</h3>
                        <p>{{ article.text }}</p>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
<script>
import { store } from '../../store.js';
export default {
    name: 'ChooseComponent',
    data() {
        return {
            store,
            chooseList: [
                {
                    path: 'w-3.png',
                    title: 'Safety First',
                    text: 'It is a long established fact that a reader will be distructed by the readble content of a page when looking at its layout.'
                },
                {
                    path: 'w-2.png',
                    title: 'Play Yards',
                    text: 'It is a long established fact that a reader will be distructed by the readble content of a page when looking at its layout.'
                },
                {
                    path: 'w-1.png',
                    title: 'Monitor Your Pets',
                    text: 'It is a long established fact that a reader will be distructed by the readble content of a page when looking at its layout.'
                },
            ]
        }
    },
    methods: {
        applyWidth(i) {
            if (i == 0) {
                return 'w-100 ms-auto'
            }
            if (i == 1) {
                return 'w-75 ms-auto'
            }
            if (i == 2) {
                return 'w-50 ms-auto'
            }
        }
    },
}
</script>
<style lang="scss" scoped>
div.choose-img,
div.choose-text {
    width: 50%;
}

div.choose-img img {
    width: 97%;
}

div.choose-text {
    padding: 3.5rem 3.5rem 0 1rem;

    img.paw-icon {
        width: 55px;
    }

    h2 {
        margin: 1rem 0;
    }

    div.img-container img {
        width: 120px;
        margin-right: 1.2rem;
    }

    div.text-container {
        font-size: .85rem;

        h3 {
            font-size: 1.1rem;
            padding-bottom: .2rem;
        }
    }

}
</style>