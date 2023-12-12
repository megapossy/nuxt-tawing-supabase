import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import defu from 'defu'

import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImportsDir,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {
  addPlugin: boolean;
  supabaseKey: string;
  supabaseUri: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@nuxt/tawing-supabase",
    configKey: "tawingSupabase",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    addPlugin: true,
    supabaseKey: "",
    supabaseUri: "",
  },
  setup(options, nuxt) {
    if (options.addPlugin) {
      const resolver = createResolver(import.meta.url);
      // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
      addPlugin(resolver.resolve("./runtime/plugin"));
      // addServerPlugin(resolver.resolve("./server/plugin"));
      addImportsDir(resolver.resolve("./composables"));

      // nuxt.hook("app:resolve", () => console.log("YYYYYYYYYYYYYYYYY app:resolve"));
      // nuxt.hook("app:templates", () => console.log("YYYYYYYYYYYYYYYYY app:templates"));
      // nuxt.hook("app:templatesGenerated", () => console.log("YYYYYYYYYYYYYYYYY app:templatesGenerated"));
      // nuxt.hook("build:analyze:done", () => console.log("YYYYYYYYYYYYYYYYY build:analyze:done"));
      // nuxt.hook("build:before", () => console.log("YYYYYYYYYYYYYYYYY build:before"));
      // nuxt.hook("build:done", () => console.log("YYYYYYYYYYYYYYYYY build:done"));
      // nuxt.hook("build:manifest", () => console.log("YYYYYYYYYYYYYYYYY build:manifest"));
      // nuxt.hook("builder:generateApp", () => console.log("YYYYYYYYYYYYYYYYY builder:generateApp"));
      // nuxt.hook("builder:watch", () => console.log("YYYYYYYYYYYYYYYYY builder:watch"));
      // nuxt.hook("close", () => console.log("YYYYYYYYYYYYYYYYY close"));
      // nuxt.hook("components:dirs", () => console.log("YYYYYYYYYYYYYYYYY components:dirs"));
      // nuxt.hook("components:extend", () => console.log("YYYYYYYYYYYYYYYYY components:extend"));
      // nuxt.hook("imports:context", () => console.log("YYYYYYYYYYYYYYYYY imports:context"));
      // nuxt.hook("nitro:init", () => console.log("YYYYYYYYYYYYYYYYY nitro:init"));

      nuxt.hook("ready", () => {
        if (options.supabaseUri && options.supabaseKey) {
          try {
            console.log(`SUPABASE Initializing...`, options.supabaseUri);

            const config = nuxt.options.runtimeConfig as any

            config.mongoose = defu(config.tawingSupabase || {}, {
              supabaseUri: options.supabaseUri,
              supabaseKey: options.supabaseKey,
            })            

            // createClient(options.supabaseUri, options.supabaseKey),
            console.log("SUPABASE INITIALIZED!");
          } catch (error) {
            console.error("SUPABASE ERROR INITIALIZING!");
            console.error(error);
          }
        }
      });
    }
  },
});
