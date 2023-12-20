import defu from "defu";

import {
  addTypeTemplate,
  createResolver,
  defineNuxtModule,
  logger,
  addServerPlugin,
  addImports,
  addPlugin,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {
  supabaseKey: string;
  supabaseUri: string;
  serverOnly: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-tawing-supabase",
    configKey: "tawingSupabase",
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: "^3.0.0",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    supabaseKey: process.env.SUPABASE_KEY || "",
    supabaseUri: process.env.SUPABASE_URI || "",
    serverOnly: true,
  },
  setup(options, nuxt) {
    logger.success("`nuxt-tawing-supabase` is starting!");
    const { resolve } = createResolver(import.meta.url);

    const config = nuxt.options.runtimeConfig as any;
    config.tawingSupabase = defu(config.tawingSupabase || {}, {
      supabaseKey: options.supabaseKey,
      supabaseUri: options.supabaseUri,
      serverOnly: options.serverOnly,
    });

    // needed for the vue app
    if (!options.serverOnly) {
      config.public.tawingSupabase = defu(config.tawingSupabase || {}, {
        supabaseKey: options.supabaseKey,
        supabaseUri: options.supabaseUri,
      });
    }

    logger.info(`serverOnly: ${options.serverOnly}`);

    // virtual imports
    nuxt.hooks.hook("nitro:config", (_config) => {
      _config.alias = _config.alias || {};

      // Note: #nuxt-tawing-supabase will be available on server only
      // Inline module runtime in Nitro bundle
      _config.alias["#nuxt-tawing-supabase"] = resolve("./runtime/services");

    });

    // #nuxt-tawing-supabase will be available to vue app also if serverOnly is disabled
    if (!options.serverOnly) 
    nuxt.options.alias["#nuxt-tawing-supabase"] = resolve("./runtime/services");

    // create interfaces
    addTypeTemplate({
      filename: "types/nuxt-tawing-supabase.d.ts",
      getContents: () =>
        `declare module '#nuxt-tawing-supabase' {
            const client: typeof import('${resolve(
              "./runtime/services"
            )}').client
            const initTawingSupabase: typeof import('${resolve(
              "./runtime/services"
            )}').initTawingSupabase
        }`,
    });

    // add server plugin
    addServerPlugin(resolve("./runtime/server/plugin"));

    // add nuxt plugin
    if (!options.serverOnly) addPlugin(resolve("./runtime/plugin"));

    // for the Vue app
    if (!options.serverOnly) {
      addImports({
        name: "client",
        as: "clientTawingSupabase",
        from: resolve("./runtime/services"),
      });
      addImports({
        name: "initTawingSupabase",
        as: "initTawingSupabase",
        from: resolve("./runtime/services"),
      });
    }

    logger.success("`nuxt-tawing-supabase` is ready!");
  },
});
