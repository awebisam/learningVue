<template>
    <div>
        <div class="input-group mb-3 input-group-lg">
            <input :value="addedQ" @input="addedQ = $event.target.value" type="text" class="form-control"><br>
            <button class="btn btn-primary" @click="afterclick">Add Quote</button>
        </div>
    </div>
</template>

<script>
    import {eventBus} from "@/main";

    export default {
        name: "InputBox",
        data:function () {
            return{
                eventBus,
                addedQ:'',
            }
        },
        methods:{
            afterclick(){
                eventBus.quotes.push(this.addedQ);
                this.addedQ = ''
            }
        }
    }
</script>

<style scoped>
</style>
