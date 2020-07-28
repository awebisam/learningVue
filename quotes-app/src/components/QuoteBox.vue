<template>
    <div>
        <div class="col-md-4 quote" ><slot></slot></div>
    </div>
</template>

<script>

    export default {
        name: "QuoteBox",
    }
</script>

<style scoped>
    .quote{
        float: left;
        background-color: #ddd;
        padding: 20px;
        margin: 5px;
    }
</style>
