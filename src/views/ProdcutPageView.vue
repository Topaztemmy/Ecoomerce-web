
<script lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { defineComponent, ref, reactive} from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


    export default defineComponent({
  name: 'products',

  setup() {
        const router = useRouter()
        const goHomePage = () =>{
            router.push('./')
        }
        return {goHomePage}
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
        
    }
   
  },
  async mounted (){
    let result =  await axios.get('https://dummyjson.com/products')
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
        <div v-for="(image, imageIndex) in item.images" :key="imageIndex">
            <img :src="image[1]" alt="" >
        </div>
      
        <div>{{ item.title }}</div>
    </div>
    <button @click="goHomePage">Return to home page</button>
</div>
    
</template>



<style scoped>

</style>