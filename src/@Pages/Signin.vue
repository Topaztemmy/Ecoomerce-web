<script lang="ts">
import { defineComponent } from 'vue'
import { ProductData } from '@/types';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'
import router from '@/routes/router';
import useStore from '@/store'


export function validName(name: string) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)){
    return true;
  }
  return false;
};

export default defineComponent({
  name: 'Signin',
    setup () {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
    }
  },

  validations() {
    return {
      form: {
        firstName: { 
          required, name_validation: {
            $validator: validName,
            $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
          } 
        },
        lastName: { 
          required, name_validation: {
            $validator: validName,
            $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
          } 
        },
        email: { required, email },
        password: { required, min: minLength(6) },
        confirmPassword: { required}
      },
    }
  },

  methods: {
 
    async onSubmit(event: any) {
        event.preventDefault();
    
        router.push('/login')

    },

  
  }
})
</script>


<template>
  <div  class="flex flex-col justify-center items-center mt-10">
   <form @submit.prevent="onSubmit" method="post" class=" bg-white pt-6 px-3 border-2 rounded-xl shadow-lg">
    <div>
      <h2 class="text-xl text-white bg-lime-600 px-32 py-2 mb-4 border-t-2 rounded-t-xl shadow-lg">Sign in</h2>
    </div>
    <!-- First and Last Name Row -->
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <div class="flex flex-col gap-1 py-2">
          <label for=""> First Name</label><input class="bg-slate-100 rounded-xl py-2 px-2 text-left" placeholder="Enter first name" type="text" v-model="v$.form.firstName.$model">
          <div></div>
        </div>
          <!-- Error Message -->
          <div class="input-errors" v-for="(error, index) of v$.form.firstName.$errors" :key="index">
            <div class="text-red-500 text-sm">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="form-group">
          <div class="flex flex-col gap-1 py-2">
          <label for="">Last Name:</label><input class="bg-slate-100 rounded-xl py-2 px-2 text-left" placeholder="Enter last name" type="text" v-model="v$.form.lastName.$model">
        </div>
          <!-- Error Message -->
          <div class="input-errors" v-for="(error, index) of v$.form.lastName.$errors" :key="index">
            <div class="text-red-500 text-sm">{{ error.$message }}</div>
          </div>
        </div>
      </div>
    </div>


    <!-- Email Row -->
    <div class="form-group">
      <div class="flex flex-col gap-1 py-2">
      <label for=""> Email address</label><input class="bg-slate-100 rounded-xl py-2 px-2 text-left"  placeholder="Enter email" type="email" v-model="v$.form.email.$model">
    </div>
      <div class="pre-icon os-icon os-icon-email-2-at2"></div>
      <!-- Error Message -->
        <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
          <div class="text-red-500 text-sm">{{ error.$message }}</div>
        </div>
    </div>


    <!-- Password and Confirm Password Row -->
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <div class="flex flex-col gap-1 py-2">
          <label for=""> Password</label><input class="bg-slate-100 rounded-xl py-2 px-2 text-left"  placeholder="Password" type="password" v-model="v$.form.password.$model">
        </div>
          <div class="pre-icon os-icon os-icon-fingerprint"></div>
          <!-- Error Message -->
          <div class="input-errors" v-for="(error, index) of v$.form.password.$errors" :key="index">
            <div class="text-red-500 text-sm">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="form-group">
          <div class="flex flex-col gap-1 py-2">
          <label for="">Confirm Password</label><input class="bg-slate-100 rounded-xl py-2 px-2 text-left"  placeholder="Confirm Password" type="password" v-model="v$.form.confirmPassword.$model">
        </div>
          <!-- Error Message -->
          <div class="input-errors" v-for="(error, index) of v$.form.confirmPassword.$errors" :key="index">
            <div class="text-red-500 text-sm">{{ error.$message }}</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
      <button class="bg-lime-600 rounded-xl py-1 my-4 text-center" :disabled="v$.form.$invalid" @click="$router.push('./login')">Submit</button>
    </div>
    </div>

  </form>
</div>
</template>

<style scoped>

</style>