<template>
    <header>
        <section class="contact-info d-none d-md-block">
            <div class="container h-100">
                <div class="row h-100">
                    <div class="col-6 h-100">
                        <div class="contacts d-flex justify-contetnt-center">
                            <!-- Piccolo margine a sinistra rispetto al logo -->
                            <div class="email-contact d-flex align-items-center">
                                <font-awesome-icon icon="fa-solid fa-envelope" />
                                <p class="mb-0">info@example.com</p>
                            </div>
                            <div class="phone-contact d-flex align-items-center">
                                <font-awesome-icon icon="fa-solid fa-phone" />
                                <p class="mb-0">&plus;1(8127)901 3377</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6  h-100 text-end">
                        <SocialComponent />
                    </div>
                </div>
            </div>
        </section>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a href="#" class="navbar-brand"><img :src="store.getImagePath('img/logo.png')"
                        alt="DogMilo main logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" v-for="item in navList">
                            <a class="nav-link" :class="(item.active) ? 'active' : ''" aria-current="page" href="#">{{
                                item.text
                            }}</a>
                        </li>
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
}
</script>
<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

header {

    .contact-info {
        background-color: $secondary-brand-color;
        padding: 1rem 0;

        div.contacts {
            align-items: center;

            div.email-contact,
            div.phone-contact {
                margin-left: .3rem;
            }

            p {
                color: $primary-light-color;
                padding: 0 1rem 0 .3rem;
            }



        }
    }

    nav {
        background-color: $primary-light-color;

        li.nav-item,
        li.button {
            font-size: 21px;
            font-weight: 500;
            padding-left: 2rem;
        }


        a.nav-link {
            color: $secondary-text-color;
            margin: auto;

            &:hover,
            &.active {
                color: $main-brand-color;
            }
        }

        &.button {
            padding-right: 0;
        }
    }


}
</style>