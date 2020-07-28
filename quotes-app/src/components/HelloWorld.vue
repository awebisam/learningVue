<template>
  <div class="hello container">
    <h1>Add Quotes</h1>
    <input-box></input-box>
    <div v-if="eventBus.quotes.length>0"><quote-box v-for="q in eventBus.quotes" v-if="q!==''" :key="q.id">{{q}}
    </quote-box></div>
  </div>
</template>

<script>

import InputBox from "@/components/InputBox";
import QuoteBox from "@/components/QuoteBox";
import {eventBus} from "@/main";

export default {
  name: 'HelloWorld',
  components: {QuoteBox, InputBox},
  data:function () {
    return {
      eventBus,

    }
  },
  methods:{

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
