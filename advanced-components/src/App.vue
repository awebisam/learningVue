<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <button class="btn btn-primary" @click="selectedComponent='app-quote'">Quote</button>
        <button class="btn btn-primary" @click="selectedComponent='app-author'">Author</button>
        <button class="btn btn-primary" @click="selectedComponent='app-new'">New</button>
        <hr>
        <keep-alive>
        <component :is="selectedComponent">
        </component>
        </keep-alive>
<!--        <app-quote>-->
<!--          <h2 slot="title">Quote</h2>-->
<!--          <p slot="content">A nice quote</p>-->
<!--        </app-quote>-->

        
      </div>
    </div>
  </div>
</template>

<script>

import Quote from "@/components/Quote";
import Author from "@/components/Author";
import New from "@/components/New";

export default {
  data: function(){
    return{
      quoteTitle:'The Quote',
      selectedComponent:'app-quote'
    }
  },
  components:{
    appQuote:Quote,
    appAuthor:Author,
    appNew: New,
  },

}
</script>

<style scoped>

</style>
