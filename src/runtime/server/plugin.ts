import { initTawingSupabase } from "#nuxt-tawing-supabase";
import type { NitroApp } from "nitropack"

import { useRuntimeConfig } from '#imports'



/**
 * Due to an upstream bug in Nuxt 3 we need to stub the plugin here, 
 * track: https://github.com/nuxt/nuxt/issues/18556
 */
// type stub
type NitroAppPlugin = (nitro: NitroApp) => void

function defineNitroPlugin(def: NitroAppPlugin): NitroAppPlugin {
  return def
}

export default defineNitroPlugin(() => {
  const config = useRuntimeConfig().tawingSupabase
  initTawingSupabase(config.supabaseUri,config.supabaseKey)
});

