<script setup lang="ts">
import { defineComponent, onMounted } from "vue";
import Login from "./@Pages/Login.vue";
import prodcutPageVue from "./@Pages/prodcutPage.vue";
import Signin from "./@Pages/Signin.vue";
import userStore from '@/store'


</script>

<template class="h-screen w-fullbg-slate-300">
  <div class=" mx-28 mt-8 " >
   <nav class="bg-black flex flex-row justify-between items-center shadow-lg">
    <div>
      <img src="./assets/TEE-Phones.png" class="w-[100px] h-[50px]" alt="Vue logo" />
    </div>
    <div class="flex flex-row justify-between gap-4 ">
   <RouterLink class="text-white hover:text-lg" to="/">Home</RouterLink>
   <RouterLink class="text-white hover:text-lg"  to="/login">Log in</RouterLink>
   <RouterLink class="text-white hover:text-lg" to="/signin">Sign in</RouterLink>
  </div>
  </nav>
  
  </div>
  <RouterView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
