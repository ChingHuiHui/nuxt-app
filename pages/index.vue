<template>
  <div class="container mt-20">
    <h2 class="mb-5">用來測試 nuxt3 相關的環境</h2>

    <ol class="list-decimal pl-5">
      <li v-for="{ to, label } in links" :key="to">
        <NuxtLink :to="to">{{ label }}</NuxtLink>
      </li>
    </ol>
  </div>
</template>

<script setup>
const links = [
  // { to: '/vuelidate', label: 'vuelidate' },
  { to: '/formkit', label: 'formkit' },
]
</script>
