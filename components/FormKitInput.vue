<template>
  <FormKit
    :type="type"
    :name="name"
    :label="label"
    :placeholder="placeholder"
    :help="help"
    :validation="validation"
    :value="value"
    @input="handleInput"
  >
    <template #label>
      <label>
        <span>{{ label }}</span>
        <span>*</span>
      </label>
    </template>
  </FormKit>
</template>

<script setup>
const props = defineProps([
  'type',
  'name',
  'label',
  'placeholder',
  'help',
  'validation',
  'value',
])

const emits = defineEmits(['update:value'])

function handleInput(value) {
  emits('update:value', value)
}
</script>
