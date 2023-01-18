<template>
    <!-- effettuare un v-for nel parent -->
    <article class="review-card">
        <!-- Effettuare un v for sul voto che inserisco nell'array dei data -->
        <p>stelline</p>
        <h4>title</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quasi!</p>
        <div class="reviewer d-flex">
            <img src="c" alt="immagine">
            <div class="reviewer-info">
                <h5>name lastname</h5>
                <p>designer</p>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    name: 'ReviewRatingCard',
}
</script>
<style lang="scss" scoped>

</style>