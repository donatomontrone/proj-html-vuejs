<template>
    <footer>
        <OverlayComponent />
        <div class="footer-top">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-10">
                        <div class="row">
                            <div class="col-12 col-sm-3">
                                <div class="get-in-touch">
                                    <h4 class="list-title">Get in Touch</h4>
                                    <p>Have a Question for us? <br>e'll answer your problem here</p>
                                    <SocialComponent />
                                </div>
                            </div>
                            <div class="col-12 col-sm-2">
                                <div class="support">
                                    <ul>
                                        <li>
                                            <h4 class="list-title">Support</h4>
                                        </li>
                                        <li v-for="item in supportList"> <a href="#">{{ item }}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 col-sm-2">
                                <div class="about">
                                    <ul>
                                        <li>
                                            <h4 class="list-title">About</h4>
                                        </li>
                                        <li v-for="item in aboutList"> <a href="#">{{ item }}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 col-sm-2">
                                <div class="faq">
                                    <ul>
                                        <li>
                                            <h4 class="list-title">Faq</h4>
                                        </li>
                                        <li v-for="item in faqList"> <a href="#">{{ item }}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 col-sm-3">
                                <div class="contact">
                                    <ul>
                                        <li>
                                            <h4 class="list-title">Contact Me</h4>
                                        </li>
                                        <li class="d-flex align-items-center">
                                            <font-awesome-icon icon="fa-solid fa-location-arrow" />
                                            <a href="#">4500 Mercantile plaza, suite 300, fort worth, TX, 76137, USA</a>
                                        </li>
                                        <li class="d-flex align-items-center my-3">
                                            <font-awesome-icon icon="fa-solid fa-phone" />
                                            <a href="#">&plus;1(8127)901 3377</a>
                                        </li>
                                        <li class="d-flex align-items-center ">
                                            <font-awesome-icon icon="fa-solid fa-envelope" />
                                            <a href="#">info@example.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <p class="text-center pt-3">Copyright 2022 by AttdogMilo.com</p>
                    </div>
                </div>
            </div>
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
    },
    data() {
        return {
            supportList: [
                'Contact Us', 'Online Chat', 'Whatsapp', 'Telegram', 'Snapchat'
            ],
            aboutList: [
                'About Us', 'Blog', 'Career', 'Job', 'In press'
            ],
            faqList: [
                'Account', 'Order', 'Delivery', 'Payment', 'Return'
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

footer {
    background-color: $footer-bg;

    div.footer-top {
        padding-top: 9rem;
    }


    p,
    a {
        color: $secondary-text-color;
        text-decoration: none;
        font-size: 1rem;
    }



    .list-title {
        color: $main-brand-color;
    }
}

ul li {
    list-style: none;
    padding: .5rem 0;
}

div.footer-bottom {
    border-top: 1px $dark-text-color solid;
    padding: .8rem 0;

    p {
        color: $primary-light-color;
    }
}
</style>