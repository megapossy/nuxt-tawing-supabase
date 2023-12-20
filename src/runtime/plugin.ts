import {
  defineNuxtPlugin,
  initTawingSupabase,
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

  // addRouteMiddleware((to, from) => {
  //   if (to.path === '/yoyo') {
  //     console.log('Do something is yoyo')
  //     return false
  //   }
  // })
});
