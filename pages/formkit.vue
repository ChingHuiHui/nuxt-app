<template>
  <div class="container flex justify-center">
    <div class="bg-blue-100 p-10 rounded-lg w-full lg:max-w-[640px]">
      <FormKit
        type="form"
        id="register"
        :config="{ validationVisibility: 'blur' }"
        :actions="false"
        @submit="submit"
      >
        <h1>Register!</h1>
        <FormKitInput
          type="text"
          name="email"
          label="Your email"
          placeholder="jane@example.com"
          help="What email should we use?"
          validation="required|email"
          v-model="form.email"
        />
        <FormKitInput
          type="password"
          name="password"
          label="Password"
          validation="required|length:6"
          placeholder="Your password"
          help="Choose an account password"
          v-model="form.password.password"
        />
        <FormKitInput
          type="password"
          name="password_confirm"
          label="Confirm password"
          placeholder="Confirm password"
          validation="required|confirm"
          help="Choose an account password"
          v-model="form.password.confirm"
        />
        <div class="grid grid-cols-2 gap-6">
          <FormKit type="submit">SUBMIT</FormKit>
          <FormKit type="button" @click="resetForm">RESET</FormKit>
        </div>
      </FormKit>
    </div>
  </div>
</template>

<script setup>
import { reset } from '@formkit/core'

import '@formkit/themes/genesis'

const form = reactive({ email: '', password: { password: '', confirm: '' } })

function submit() {
  console.log('form', form.value)
}

function resetForm() {
  reset('register')
}
</script>
