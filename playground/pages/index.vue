<template>
  <div>
    <h1>INDEX.vue</h1>
    <NuxtLink to="/page1">
      <h1>to page1</h1>
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
