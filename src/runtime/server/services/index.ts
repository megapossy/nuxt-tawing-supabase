import { logger } from "@nuxt/kit";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export let client: SupabaseClient;

export const initTawingSupabase = (uri: string, key: string) => {
  try {
    logger.info("Supabase Initializing...");
    client = createClient(uri, key);
    logger.success("Supabase Initialed");
    return client;
  } catch (error) {
    logger.error("Supabase Initializing Error!", error);
  }
};
