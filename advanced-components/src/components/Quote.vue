<template>
    <div>
        <slot name="title"></slot>
        <b>
            <slot name="content"></slot>
        </b>
        <u>
            <slot name="subtitle">The Subtitle</slot>
        </u>
    </div>
</template>

<script>
    export default {
        name: "Quote",
        deactivated() {
            console.log('Deactivated')
        }
    }

</script>

<style scoped>
    div{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: auto;
        text-align: center;
    }
    h2{
        color: brown;
    }
</style>
