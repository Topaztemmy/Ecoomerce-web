<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { ProductData } from '@/types';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import axios from 'axios'
import userStore from '@/store'
import router from '@/routes/router';

export default defineComponent({
    setup () {
    const result = ref(null)
    
    return { v$: useVuelidate(), result}
  },

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
    
  validations() {
    return {
      form: {
        email: {
           required, email 
        },
        password: {
            required, 
            min: minLength(6)
        },
      },
    }
  },

  methods: {
    async onSubmit(event: any) {
        event.preventDefault();
        userStore.login(this.form.email, this.form.password)
        this.form.email = this.form.email
        this.form.password = this.form.password
   this.$router.push('/products') 
      console.log(this.form.email)
    }
  }
})
</script>


<template class="">
  <div  class="flex flex-col justify-center items-center my-20">
   
   <form @submit.prevent="onSubmit" class=" bg-white py-6 px-3 border-2 rounded-xl shadow-lg">
    <div>
      <h2 class="text-xl text-white bg-lime-600 px-32 py-2 mb-4 border-t-2 rounded-t-xl shadow-lg">Log in</h2>
    </div>
    <!-- Email -->
    <div class="" :class="{ error: v$.form.email.$errors.length }">
      <div class="flex flex-col gap-1 py-2">
      <label for="">Email</label>
      <input class="bg-slate-100 rounded-xl py-2 text-center" placeholder="Enter your username" type="email" v-model="v$.form.email.$model">
    </div>
      <div class=""></div>
          <!-- error message -->
      <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
        <div class="text-red-500 text-sm">{{ error.$message }}</div>
      </div>
    </div>

    <!-- password -->
    <div class="" :class="{ error: v$.form.password.$errors.length }">
      <div class="flex flex-col gap-1 py-2">
      <label for="">Password</label>
      <input class="bg-slate-100 rounded-xl py-2 text-center" placeholder="Enter your password" type="password" v-model="v$.form.password.$model">
    </div>
      <div ></div>
          <!-- error message -->
      <div class="" v-for="(error, index) of v$.form.password.$errors" :key="index">
        <div class="text-red-500 text-sm">{{ error.$message }}</div>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="flex flex-col ">
      <button :disabled="v$.form.$invalid" class="bg-lime-600 rounded-xl py-1 my-4 text-center">Login</button>
    
    </div>
    <div class="flex flex-col justify-center items-center mt-10">
      <p class="text-sm text-slate-500"> Don't have an account?</p>
      <a href="/signin" class="text-lime-500">Sign in here</a>

    </div>

  </form>
</div>
</template>

<style scoped>

</style>