<template>
    <section id="newsletter">
        <div class="overlay-wrapper">
            <div class="overlay d-flex">
                <div class="left">
                    <img src="s" alt="imamgine cani">
                </div>
                <div class="right">
                    <h4>Subscribe</h4>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="email" aria-label="email"
                            aria-describedby="basic-addon1">
                        <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.overlay-wrapper {
    position: relative;
}

.overlay {
    position: absolute;
    padding: 1em;
    background-color: black;
    color: white;
    margin: 0 5em 0 0;
    transform: translate(-50%, -50%);
    left: 50%;

}
</style>