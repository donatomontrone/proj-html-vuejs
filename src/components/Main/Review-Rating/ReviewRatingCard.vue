<template>
    <!-- effettuare un v-for nel parent -->
    <article class="review-card">
        <!-- Effettuare un v for sul voto che inserisco nell'array dei data -->
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in reviewInfo[activeIndex].vote" class="star mb-3" />
        <h4>{{ reviewInfo[activeIndex].title }}</h4>
        <p>{{ reviewInfo[activeIndex].text }}</p>
        <div class="reviewer d-flex">
            <img :src="store.getImagePath('img/' + reviewInfo[activeIndex].reviewerPath)" alt="immagine"
                class="rounded-circle">
            <div class="reviewer-info">
                <h5>{{ reviewInfo[activeIndex].reviewerName }}</h5>
                <p class="employment">{{ reviewInfo[activeIndex].employment }}</p>
            </div>
        </div>
    </article>
    <article class="review-card">
        <!-- Effettuare un v for sul voto che inserisco nell'array dei data -->
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in reviewInfo[activeIndex + 1].vote" class="star mb-3" />
        <h4>{{ reviewInfo[activeIndex + 1].title }}</h4>
        <p>{{ reviewInfo[activeIndex + 1].text }}</p>
        <div class="reviewer d-flex">
            <img :src="store.getImagePath('img/' + reviewInfo[activeIndex + 1].reviewerPath)" alt="immagine"
                class="rounded-circle">
            <div class="reviewer-info">
                <h5>{{ reviewInfo[activeIndex + 1].reviewerName }}</h5>
                <p class="employment">{{ reviewInfo[activeIndex + 1].employment }}</p>
            </div>
        </div>
    </article>
</template>
<script>
import { store } from '../../../store.js'
export default {
    name: 'ReviewRatingCard',
    props:
        [
            'reviewInfo',
            'activeIndex'
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

article.review-card {
    background-color: $secondary-light-color;
    padding: 1rem 1rem .5rem 1rem;

    img {
        width: 40px;
        height: 40px;
        margin-right: 1rem;
    }

    h4 {
        font-size: 1rem
    }

    p {
        font-size: .75rem;
    }

    div.reviewer-info {

        h5 {
            font-size: .9rem;
        }

        p.employment {
            font-size: .6rem;

        }
    }
}
</style>