<template>
    <section id="choose-up">
        <div class="d-flex">
            <div class="choose-img">
                <p>immagine</p>
            </div>
            <div class="choose-text">
                <span>icon</span>
                <!-- Mini title della section -Colore preso dalla palette -->
                <span>about us</span>
                <h2>Titolo</h2>
                <!-- Provare un v-for ma capire come gestire la diversa witdh -->
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