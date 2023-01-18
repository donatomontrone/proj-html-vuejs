<template>
    <header>
        <section class="contact-info">
            <div class="wrapper">
                <div class="d-flex justify-content-between">
                    <div class="contacts d-flex">
                        <!-- Piccolo margine a sinistra rispetto al logo -->
                        <div class="email-contact d-flex m-1">
                            <p>icona</p>
                            <p>email</p>
                        </div>
                        <div class="phone-contact d-flex m-1">
                            <p> icona</p>
                            <p>telefono </p>
                        </div>
                    </div>
                    <div class="social">
                        <ul>
                            <!-- Efffettuo un v-for per inseirli nello script (Inserire il path dei social) -->
                            <li>F</li>
                            <li>P</li>
                            <li>T</li>
                            <li>L</li>
                            <li>I</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <nav>
            <div class="wrapper">
                <div class="d-flex justify-content-between">
                    <a href="#">Logo</a>
                    <!-- Effettuo un v-for per inserirli dallo script -->
                    <ul>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <!-- Bottone -->
                        <li>Item</li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

header {
    width: 100%;
}

ul li {
    list-style: none;
    display: inline-block;
}
</style>