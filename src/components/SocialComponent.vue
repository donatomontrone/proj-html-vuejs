<template>
    <div class="social">
        <ul>
            <!-- Effettuo un v-for per inseirli nello script (Inserire il path dei social) -->
            <li v-for="social in socials">
                <img :src="getImagePath(`img/social/${social.path}`)" :alt="social.name">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'SocialComponent',
    data() {
        return {
            socials: [
                {
                    name: 'Facebook',
                    path: 'facebook.png'

                },
                {
                    name: 'Pinterest',
                    path: 'pinterest.png'

                },
                {
                    name: 'Twitter',
                    path: 'twitter.png'

                },
                {
                    name: 'Linkedin',
                    path: 'linkedin.png'

                },
                {
                    name: 'Instagram',
                    path: 'instagram.png'

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
ul {
    list-style: none;
    margin-bottom: 0;

    li {
        display: inline-block;
    }

    img {
        width: 17px;
        border-radius: 10%;
        margin-right: 5px;
    }
}
</style>