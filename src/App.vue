<script  lang="ts">
  import { defineComponent, ref } from "vue";
import homePageVue from './views/HomePageView.vue';
import { RouterView } from "vue-router";
import navigation from "./components/navigation.vue";

export default defineComponent({
  components: { navigation, homePageVue },
 name: "App",
 
})
</script>

<template class="h-screen w-fullbg-slate-300">
    <navigation />
  <RouterView />
 
</template>

<style scoped>

</style>
