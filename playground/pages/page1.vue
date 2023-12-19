<template>
  <div>
    <h1>Page1.vue</h1>
    <NuxtLink to="/">
      <h1>to Index</h1>
    </NuxtLink>
    <pre>{{ dataTest }}</pre>
  </div>
</template>

<script lang="ts" setup>

const dataTest = ref()
onMounted(async () => {
  const { data } = await clientTawingSupabase.from("email_list").select().returns();
  dataTest.value = data;
})

</script>
