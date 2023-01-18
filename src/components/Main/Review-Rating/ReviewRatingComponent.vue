<template>
    <section id="review-rating" class="pb-5">
        <div class="wrapper">
            <div class="d-flex">
                <article>
                    <!-- Mini title con icona  -->
                    <span>icon</span>
                    <p>review &amp; Rating</p>
                    <h2>titolo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, magni.</p>
                    <!-- fare un vfor per le stelle -->
                    <span>stelle</span>
                </article>
                <ReviewRatingCard />
            </div>
            <div class="slider-buttons text-end">
                <a href="#"> &lt; </a>
                <a href="#">&gt;</a>
            </div>
        </div>
    </section>
</template>
<script>
import ReviewRatingCard from './ReviewRatingCard.vue';
export default {
    name: 'ReviewRatingComponent',
    components: {
        ReviewRatingCard,
    }
}
</script>
<style lang="scss" scoped>
section#review-rating {
    background-color: grey;
    padding-top: 3rem;
}

article {
    width: calc(100% / 3);
}
</style>