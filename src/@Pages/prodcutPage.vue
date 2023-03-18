
<script lang="ts">
import userStore from '@/store'
import { useQuery } from '@tanstack/vue-query'
import { ProductData } from '@/types';
import { defineComponent, ref, reactive} from 'vue';
import axios from 'axios';
import path from 'path';


    export default defineComponent({
  name: 'PostDetails',

  setup() {
    

  },

  data(){
    return {
        Items:[] as {
            id: number,
            title: string,
            description: string,
            price: number,
            discountPercentage: number,
            rating: number,
            brand: string,
            images: string[]
              }[],
        path: "https://dummyjson.com/products"
    }
   
  },
  async mounted (){
    let result =  await axios.get('https://dummyjson.com/products')
    console.warn (result.data.products)
    this.Items = result.data.products

 }
})

</script>
<template>
    
<div>
    <div>
        <h2>Welcome  </h2>
        <p>Happy Shopping</p>
    </div>
    
    <div v-for="item in Items" :key="item.id">
       <p v-for="picture in item.images" :key="picture" > <img src="path + '/images/Items/' + picture " alt=""></p>
        <div>{{ item.title }}</div>
    </div>
</div>
    
</template>



<style scoped>

</style>