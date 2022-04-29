<template>
  <div class="container py-20 flex justify-center">
    <form
      @submit.prevent="submit"
      class="inline-block bg-blue-100 p-4 min-w-full space-y-6 lg:min-w-[640px]"
    >
      <FInput
        label="email"
        name="email"
        placeholder="請輸入"
        :state="v$.email"
        v-model:value="v$.email.$model"
      />
      <FInput
        label="password"
        name="password"
        type="password"
        placeholder="請輸入"
        :state="v$.password.password"
        v-model:value="v$.password.password.$model"
      />
      <FInput
        label="confirmed password"
        name="confirmed password"
        type="password"
        placeholder="請輸入"
        :state="v$.password.confirm"
        v-model:value="v$.password.confirm.$model"
      />
      <div class="grid grid-cols-2 gap-6">
        <button type="submit">SUBMIT</button>
        <button type="button" @click="resetForm">RESET</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import useValidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

let form = reactive({
  email: '',
  password: {
    password: '',
    confirm: '',
  },
})

const rules = computed(() => ({
  email: { required, email },
  password: {
    password: { required, minLength: minLength(6) },
    confirm: { required, sameAs: sameAs(form.password.password) },
  },
}))

const v$ = useValidate(rules, form)

async function submit() {
  const isValid = await v$.value.$validate()

  if (!isValid) {
    console.error('Form failed validation')
    return
  }

  console.log('form', form)
}

function resetForm() {
  form.email = ''
  form.password = {
    password: '',
    confirm: '',
  }

  v$.value.$reset()
}
</script>

<style scoped>
button {
  @apply px-4 py-2 rounded-lg text-white bg-blue-500 transition-colors duration-300 hover:bg-blue-600;
}

/deep/ input {
  @apply p-2 rounded-md w-full bg-white;
}
</style>
