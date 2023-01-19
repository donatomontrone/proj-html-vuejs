<template>
    <header>
        <section class="contact-info">
            <div class="wrapper">
                <div class="d-flex justify-content-between">
                    <div class="contacts d-flex">
                        <!-- Piccolo margine a sinistra rispetto al logo -->
                        <div class="email-contact d-flex">
                            <font-awesome-icon icon="fa-solid fa-envelope" />
                            <p>info@example.com</p>
                        </div>
                        <div class="phone-contact d-flex">
                            <font-awesome-icon icon="fa-solid fa-phone" />
                            <p>&plus;1(8127)901 3377</p>
                        </div>
                    </div>
                    <SocialComponent />
                </div>
            </div>
        </section>
        <nav>
            <div class="wrapper">
                <div class="d-flex justify-content-between h-100">
                    <a href="#"><img :src="getImagePath('/img/logo.png')" alt="DogMilo main logo"></a>
                    <!-- Effettuo un v-for per inserirli dallo script -->
                    <ul>
                        <li v-for="item in navList"><a :class="(item.active) ? 'active' : ''" href="#">{{
                            item.text
                        }}</a></li>
                        <li class="button">
                            <ButtonComponent :headerButton="store.buttons[0]" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
import { store } from '../store.js'
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
            store,
            navList: [
                {
                    text: 'Home',
                    active: true
                },
                {
                    text: 'About',
                    active: false
                },
                {
                    text: 'Services',
                    active: false
                },
                {
                    text: 'Training',
                    active: false
                },
                {
                    text: 'Blogs',
                    active: false
                },
            ]
        }
    },
    methods: {
        getImagePath: function (img) {
            return new URL((`../assets/${img}`), import.meta.url).href;
        },
    },
}
</script>
<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

header {
    width: 100%;

    .contact-info {
        background-color: $secondary-brand-color;
        padding-top: 5px;
        padding-bottom: 10px;

        div.contacts {
            align-items: center;
            font-size: .75rem;

            div.email-contact,
            div.phone-contact {
                align-items: center;
                margin-left: .3rem;
            }

            p {
                margin-bottom: 0;
                vertical-align: auto;
                color: $primary-light-color;
                padding: 0 1rem 0 .3rem;
                font-size: .8rem;
            }

            //font-awesome icon
            svg {
                color: $main-brand-color;
            }

        }
    }

    nav {
        background-color: $primary-light-color;
        font-weight: 400;
        height: 70px;

        a img {
            width: 160px;
            margin-top: 10px
        }

        ul {
            padding-left: 0;
            display: flex;
            align-items: center;
            height: 100%;

            li {
                display: inline-block;
                padding: 0 1rem;



                a {
                    text-decoration: none;
                    color: $dark-text-color;

                    &.active,
                    &:hover {
                        color: $main-brand-color;
                    }

                }

                &.button {
                    padding-right: 0;
                }
            }


        }
    }
}
</style>