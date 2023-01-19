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
                    <SocialComponent />
                </div>
            </div>
        </section>
        <nav class="h-navbar">
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
                        <li>
                            <ButtonComponent />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
import ButtonComponent from './ButtonComponent.vue';
import SocialComponent from './SocialComponent.vue';
export default {
    name: 'HeaderComoponent',
    components: {
        ButtonComponent,
        SocialComponent,
    },
    data() {
        return {

        }
    },

}
</script>
<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

header {
    width: 100%;

    .contact-info {
        background-color: grey;
    }
}
</style>