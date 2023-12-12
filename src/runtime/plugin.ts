import { defineNuxtPlugin } from "#app";

/**
 * NOTE: Will be removing this! this is only for reference
 */


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("test", "test string"); 
});
