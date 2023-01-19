import { reactive } from "vue";

export const store = reactive({
    buttons: ['Get In Touch!', 'Get Started'],
    getImagePath: function (img) {
        return new URL((`./assets/${img}`), import.meta.url).href;
    },

})