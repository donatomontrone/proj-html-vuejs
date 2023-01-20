<template>
    <!-- effettuare un v-for nel parent -->
    <div class="col-6 col-md-4">
        <div class="review-card">
            <!-- Effettuare un v for sul voto che inserisco nell'array dei data -->
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in reviewInfo.vote" class="star mb-3" />
            <h4>{{ reviewInfo.title }}</h4>
            <p>{{ reviewInfo.text }}</p>
            <div class="reviewer d-flex">
                <img :src="store.getImagePath('img/' + reviewInfo.reviewerPath)" alt="immagine" class="rounded-circle">
                <div class="reviewer-info">
                    <h5>{{ reviewInfo.reviewerName }}</h5>
                    <p class="employment">{{ reviewInfo.employment }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { store } from '../../../store.js'
export default {
    name: 'ReviewRatingCard',
    props:
        [
            'reviewInfo',
        ],
    data() {
        return {
            store,
        }
    },
}
</script>
<style lang="scss" scoped>
@use '../../../styles/partials/variables.scss' as *;

div.review-card {
    background-color: $secondary-light-color;
    padding: 1rem 1rem .5rem 1rem;

    p {
        font-size: 1.10rem;
    }

    img {
        width: 50px;
        height: 50px;
        margin-right: 1rem;
    }


    div.reviewer-info {

        h5 {
            font-size: 1.15rem;
        }

        p.employment {
            font-size: .8rem;

        }
    }
}
</style>