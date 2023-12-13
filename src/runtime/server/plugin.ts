import { initTawingSupabase } from "nuxt-tawing-supabase";
import { defineNitroPlugin } from "nitropack/dist/runtime/plugin";
import { useRuntimeConfig } from "nitropack/dist/runtime/config";

export default defineNitroPlugin(() => {
  const config = useRuntimeConfig().tawingSupabase
  initTawingSupabase(config.supabaseUri,config.supabaseKey)
});

