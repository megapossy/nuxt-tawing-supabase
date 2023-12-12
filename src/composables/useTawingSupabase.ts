import { useNuxtApp } from "#app";

/**
 * NOTE: Will be removing this! this is only for reference
 */


export function useTest() {
  const nuxtApp = useNuxtApp();
  return nuxtApp.$test;
}


export function useTawingSupabase() {
  const nuxtApp = useNuxtApp();
  return nuxtApp.$tawingSupabase;
}
