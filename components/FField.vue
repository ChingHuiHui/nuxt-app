<template>
  <div>
    <div class="mb-2">
      <label>
        <span class="capitalize font-medium">{{ label }}</span>
        <span v-if="required" class="text-sm text-red-500 ml-1">*</span>
      </label>
    </div>
    <slot />
    <div v-if="errors.length" class="text-red-500 text-sm">
      {{ errors[0].$message }}
    </div>
  </div>
</template>

<script setup>
defineProps(['label', 'errors', 'required'])
</script>
