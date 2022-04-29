<template>
  <FField :label="label" :errors="state.$errors" :required="!!state.required">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput"
    />
  </FField>
</template>

<script setup>
defineProps(['state', 'value', 'label', 'type', 'placeholder'])
const emits = defineEmits(['update:value'])

function handleInput($event) {
  const value = $event.target.value

  emits('update:value', value)
}
</script>
