import { initTawingSupabase } from "@nuxt/tawing-supabase";

export default defineNitroPlugin(() => {
  const config = useRuntimeConfig().tawingSupabase
  initTawingSupabase(config.supabaseUri,config.supabaseKey)
});

