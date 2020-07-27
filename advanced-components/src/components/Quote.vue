<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Quote",
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
