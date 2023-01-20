<template>
    <section id="choose-us">
        <div class="container-fluid g-0">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <div class="choose-img">
                        <img :src="store.getImagePath('img/why.png')" alt="woman with a dog">
                    </div>
                </div>
                <div class="col-12 col-sm-6">
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
                                <h4>{{ article.title }}</h4>
                                <p>{{ article.text }}</p>
                            </div>
                        </article>
                    </div>
                </div>
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
div.choose-img img {
    width: 100%;
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

    div.text-container p {
        font-size: 1.15rem;
    }

}
</style>