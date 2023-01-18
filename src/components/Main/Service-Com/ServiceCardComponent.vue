<template>
    <div class="card-container d-flex justify-content-center">
        <!-- Dopo cancellare ed effettuare un v-for al parent -->
        <div class="card-info">
            <p>icona</p>
            <p>titolo</p>
            <p>testo</p>
            <p>arrow icon</p>
        </div>
        <div class="card-info">
            <p>icona</p>
            <p>titolo</p>
            <p>testo</p>
            <p>arrow icon</p>
        </div>
        <div class="card-info">
            <p>icona</p>
            <p>titolo</p>
            <p>testo</p>
            <p>arrow icon</p>
        </div>
        <div class="card-info">
            <p>icona</p>
            <p>titolo</p>
            <p>testo</p>
            <p>arrow icon</p>
        </div>
        <div class="card-info">
            <p>icona</p>
            <p>titolo</p>
            <p>testo</p>
            <p>arrow icon</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ServiceCardComponent',
    data() {
        return {
            cards: [
                {
                    icon: 'iconaPath',
                    title: 'cardtitle',
                    text: 'cardtext',
                    arrow: 'arrowicon'
                },
                {
                    icon: 'iconaPath',
                    title: 'cardtitle',
                    text: 'cardtext',
                    arrow: 'arrowicon'
                },
                {
                    icon: 'iconaPath',
                    title: 'cardtitle',
                    text: 'cardtext',
                    arrow: 'arrowicon'
                },
                {
                    icon: 'iconaPath',
                    title: 'cardtitle',
                    text: 'cardtext',
                    arrow: 'arrowicon'
                },
                {
                    icon: 'iconaPath',
                    title: 'cardtitle',
                    text: 'cardtext',
                    arrow: 'arrowicon'
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>