<template>
  <form @submit.prevent="submit">
    <slot />
  </form>
</template>

<script setup>
import { useValidateForm } from 'vee-validate'

const props = defineProps(['action'])

const validate = useValidateForm()

const submit = async () => {
  const { valid } = await validate()

  if (!valid) {
    return
  }

  await props.action()
}
</script>
