<template>
  <div>
    Nuxt module playground!
    <pre>{{ dataTest }}</pre>
  </div>
</template>

<script lang="ts" setup>

const dataTest = ref()
onMounted(async ()=>{
  initTawingSupabase('https://kikdnbiqsbumdznsumob.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtpa2RuYmlxc2J1bWR6bnN1bW9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyOTk3MTcsImV4cCI6MjAxNzg3NTcxN30.a0DlOTfoTYmEci8Fpa30eG9X06WdQb5lbN57eM0dB80');
  const { data } = await clientTawingSupabase.from("email_list").select().returns();
  dataTest.value = data;
})
  
</script>
