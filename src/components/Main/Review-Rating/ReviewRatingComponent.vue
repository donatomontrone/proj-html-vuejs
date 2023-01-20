<template>
    <section id="review-rating" class="pb-5">
        <div class="wrapper">
            <div class="d-flex justify-content-center">
                <article class="main-article">
                    <!-- Mini title con icona  -->
                    <img :src="store.getImagePath('img/dog-icon.png')" alt="Dog paw icon" class="paw-icon">
                    <!-- Mini title della section -Colore preso dalla palette -->
                    <span class="minititle">Review &amp; Rating</span>
                    <h2>Over 8000 Customers With 5-Star Review</h2>
                    <p>It is a long established fact that a reader will be distructed by the readble content of a page
                        when looking at its layout.</p>
                    <!-- fare un vfor per le stelle -->
                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in 5" class="star" />
                </article>
                <article>
                    <ReviewRatingCard v-for="review in reviews" :reviewInfo="review" />
                </article>
            </div>
            <div class="slider-buttons text-end">
                <a href="#!"> <img :src="store.getImagePath('img/left-arrow.png')" alt="left arrow"> </a>
                <a href="#!"><img :src="store.getImagePath('img/next.png')" alt="right arrow"></a>
            </div>
        </div>
    </section>
</template>
<script>
import { store } from '../../../store.js'
import ReviewRatingCard from './ReviewRatingCard.vue';
export default {
    name: 'ReviewRatingComponent',
    components: {
        ReviewRatingCard,
    },
    data() {
        return {
            store,
            reviews: [
                {
                    vote: 5,
                    title: 'Great Place',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when',
                    reviewerPath: 't1.png',
                    reviewerName: 'Tobias May',
                    employment: 'UI/UX Designer'
                },
                {
                    vote: 5,
                    title: 'Great Place',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when',
                    reviewerPath: 't1.png',
                    reviewerName: 'Tobias May',
                    employment: 'UI/UX Designer'
                },

            ]
        }
    },

}
</script>
<style lang="scss" scoped>
@use '../../../styles/partials/variables.scss' as *;

section#review-rating {
    padding: 4rem 0;
    margin-bottom: 6rem;

    img.paw-icon {
        width: 16px;
    }

    article {
        width: calc((100% / 3) - 1rem);
        flex-wrap: nowrap;
    }

    article.main-article {

        h2 {
            font-size: 1.5rem
        }

        p {
            font-size: .75rem;
        }
    }

    div.slider-buttons a {
        background-color: $main-brand-color;
        display: inline-block;

        margin: .7rem 0 0 .7rem;

        &:hover {
            background-color: $secondary-brand-color;
        }

        img {
            width: 20px;
            margin: .3rem;
        }
    }
}
</style>