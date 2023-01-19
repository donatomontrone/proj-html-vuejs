<template>
    <footer>
        <OverlayComponent />
        <div class="footer-top">
            <div class="wrapper">
                <nav class="d-flex justify-content-around">
                    <div class="get-in-touch">
                        <h4 class="list-title">Get in Touch</h4>
                        <p>Have a Question for us? we'll answer your problem here</p>
                        <SocialComponent />
                    </div>
                    <div class="support">
                        <ul>
                            <li>
                                <h4 class="list-title">Support</h4>
                            </li>
                            <li v-for="item in supportList"> <a href="#">{{ item }}</a></li>
                        </ul>
                    </div>
                    <div class="about">
                        <ul>
                            <li>
                                <h4 class="list-title">About</h4>
                            </li>
                            <li v-for="item in aboutList"> <a href="#">{{ item }}</a></li>
                        </ul>
                    </div>
                    <div class="faq">
                        <ul>
                            <li>
                                <h4 class="list-title">Faq</h4>
                            </li>
                            <li v-for="item in faqList"> <a href="#">{{ item }}</a></li>
                        </ul>
                    </div>
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
                </nav>
            </div>
        </div>
        <div class="footer-bottom">
            <p class="text-center mt-4">Copyright 2022 by AttdogMilo.com</p>
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

    svg {
        font-size: .75rem;
    }


    h4.list-title {
        font-size: 1rem;
    }

    p,
    a {
        color: $secondary-text-color;
        font-size: .7rem;
    }

    div.support,
    div.faq,
    div.about {
        width: 18%;
    }

    div.get-in-touch,
    div.contact {
        width: 23%;
    }


    .list-title {
        color: $main-brand-color;
    }
}

ul li {
    list-style: none;
}

div.footer-top {
    padding: 7rem 0 2rem 0;
}

div.footer-bottom {
    border-top: 1px $dark-text-color solid;
    height: 50px;

    p {
        color: $primary-light-color;
    }
}
</style>