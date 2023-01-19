<template>
    <section id="choose-us">
        <div class="d-flex">
            <div class="choose-img">
                <p>immagine</p>
            </div>
            <div class="choose-text">
                <span>icon</span>
                <!-- Mini title della section -Colore preso dalla palette -->
                <span>about us</span>
                <h2>Titolo</h2>
                <!-- Effettuare un v-for e nei data inserire nell'aggetto una key per gestire la witdh -->
                <article>
                    <img src="s" alt="immagine">
                    <h3>titolo</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </article>
                <article>
                    <img src="s" alt="immagine">
                    <h3>titolo</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </article>
                <article>
                    <img src="s" alt="immagine">
                    <h3>titolo</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </article>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'ChooseComponent'
}
</script>
<style lang="scss" scoped>
div.choose-img,
div.choose-text {
    width: 50%;
}
</style>