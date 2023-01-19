<template>
    <footer>
        <OverlayComponent />
        <div class="footer-top pt-5">
            <div class="wrapper d-flex pt-5">
                <div class="get-in-touch">
                    <h4>title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, rem?</p>
                    <SocialComponent />
                </div>
                <!-- Porvare un v-for per un ul unica oppure effettuare un v-for per ogni ul -->
                <div class="support">
                    <ul>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                </div>
                <div class="about">
                    <ul>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                </div>
                <div class="faq">
                    <ul>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                </div>
                <div class="contact">
                    <ul>
                        <li>icona + item</li>
                        <li>icona + item</li>
                        <li>icona + item</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>copyright</p>
        </div>
    </footer>
</template>
<script>
import OverlayComponent from './OverlayComponent.vue';
import SocialComponent from './SocialComponent.vue';
export default {
    name: 'FooterComponent',
    components: {
        OverlayComponent,
        SocialComponent
    }
}
</script>
<style lang="scss" scoped>
ul li {
    list-style: none;
    display: inline-block;
}
</style>