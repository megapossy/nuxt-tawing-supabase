import { initTawingSupabase } from "nuxt-tawing-supabase";
import type { NitroApp } from "nitropack"

import { useRuntimeConfig } from '#imports'

// type stub
type NitroAppPlugin = (nitro: NitroApp) => void

function defineNitroPlugin(def: NitroAppPlugin): NitroAppPlugin {
  return def
}

export default defineNitroPlugin(() => {
  const config = useRuntimeConfig().tawingSupabase
  initTawingSupabase(config.supabaseUri,config.supabaseKey)
});

