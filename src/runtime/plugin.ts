import { initTawingSupabase } from "#nuxt-tawing-supabase";
import {
  defineNuxtPlugin,
  useRuntimeConfig,
} from "#imports";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hooks.hook("app:created", (vueApp) => {

    const config = useRuntimeConfig().public.tawingSupabase as {
      supabaseUri: string;
      supabaseKey: string;
    };
    
    // if serverOnly is false supabaseUri and supabaseKey will be blank
    if(config.supabaseUri && config.supabaseKey)
    initTawingSupabase(config.supabaseUri, config.supabaseKey);
  });
});
