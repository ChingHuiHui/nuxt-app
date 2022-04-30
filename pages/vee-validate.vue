<template>
  <VeeForm :action="submit">
    <h2>Create an Account</h2>
    <VeeInput type="text" name="email" label="email" />
    <VeeInput type="password" name="password" label="password" />
    <VeeInput type="password" name="confirm" label="confirm" />
    <div class="grid grid-cols-2 gap-6">
      <button type="submit">SUBMIT</button>
      <button type="button" @click="resetForm">RESET</button>
    </div>
  </VeeForm>
</template>

<script setup>
import { useForm, useFormValues } from 'vee-validate'

const schema = {
  email: 'required|email',
  password: 'required|min:6',
  confirm: 'required|confirmed:@password',
}

const { resetForm } = useForm({
  validationSchema: schema,
})

const values = useFormValues()

function submit() {
  console.log('send api', { input: values.value })
}
</script>
