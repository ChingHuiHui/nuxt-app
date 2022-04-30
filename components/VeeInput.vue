<template>
  <div>
    <div>
      <label :for="name">{{ label }}</label>
    </div>
    <input
      class="border px-2 py-1 rounded-lg"
      :name="name"
      :type="type"
      placeholder="請輸入..."
      :value="inputValue"
      @input="handleOnInput"
    />
    <p class="text-sm text-red-500" v-if="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate'

const props = defineProps(['name', 'label', 'type'])
const name = toRef(props, 'name')

const {
  value: inputValue,
  errorMessage,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.value,
})

function handleOnInput(e) {
  const value = e.target.value

  handleChange(value)
}
</script>
