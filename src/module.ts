import defu from "defu";

import {
  addTypeTemplate,
  createResolver,
  defineNuxtModule,
  logger,
  addServerPlugin,
  addImports,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {
  supabaseKey: string;
  supabaseUri: string;
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
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    const config = nuxt.options.runtimeConfig as any;
    config.tawingSupabase = defu(config.tawingSupabase || {}, {
      supabaseKey: options.supabaseKey,
      supabaseUri: options.supabaseUri,
    });

    logger.success("`nuxt-tawing-supabase` is starting!");

    // virtual imports
    nuxt.hook("nitro:config", (_config) => {
      _config.alias = _config.alias || {};

      // Inline module runtime in Nitro bundle
      _config.alias["nuxt-tawing-supabase"] = resolve(
        "./runtime/server/services"
      );

      // DISABLED for now
      // polyfill unicorn-magic
      // _config.alias["unicorn-magic"] = resolve(
      //   "./runtime/polyfills/unicorn-magic"
      // );
    });

    // create interfaces
    addTypeTemplate({
      filename: "types/nuxt-tawing-supabase.d.ts",
      getContents: () =>
        `declare module 'nuxt-tawing-supabase' {
            const client: typeof import('${resolve(
              "./runtime/server/services"
            )}').client
            const initTawingSupabase: typeof import('${resolve(
              "./runtime/server/services"
            )}').initTawingSupabase
        }`,
    });


    // add server plugin
    addServerPlugin(resolve("./runtime/server/plugin"));

    // for the Vue app
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

    logger.success("`nuxt-tawing-supabase` is ready!");
  },
});
