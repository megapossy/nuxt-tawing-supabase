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
import { client } from "#nuxt-tawing-supabase";

const dataTest = ref()
onMounted(async () => {
  // console.log(client)
  // const uri = 'https://kikdnbiqsbumdznsumob.supabase.co'
  // const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtpa2RuYmlxc2J1bWR6bnN1bW9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyOTk3MTcsImV4cCI6MjAxNzg3NTcxN30.a0DlOTfoTYmEci8Fpa30eG9X06WdQb5lbN57eM0dB80'

  // initTawingSupabase(uri, key)
  const { data } = await client.from("email_list").select().returns();
  // const { data } = await clientTawingSupabase.from("email_list").select().returns();
  dataTest.value = data;
})

</script>
