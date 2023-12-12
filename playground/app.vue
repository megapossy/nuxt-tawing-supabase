<template>
  <div>
    Nuxt module playground!
    <pre>x{{ test }}x</pre>
  </div>
</template>

<script lang="ts" setup>
const test = useTest()
</script>
