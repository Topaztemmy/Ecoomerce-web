<template>
     <div class=" mx-28 mt-8 " >
   <nav class="bg-black flex flex-row justify-between items-center shadow-lg px-6">
    <div>
      <img src="@/assets/TEE-Phones.png" class="w-[100px] h-[50px]" alt="Vue logo" />
    </div>
    <div class="flex flex-row justify-between gap-4 ">
     
   <RouterLink class="text-white hover:text-lg"  to="/login">Log in</RouterLink>
   <RouterLink class="text-white hover:text-lg" to="/signin">Sign in</RouterLink>
  </div>
  </nav>
  
  </div>
</template>
<script lang="ts">
import Vue, { defineComponent } from 'vue'

export default defineComponent({
    
})
</script>
<style>
</style>