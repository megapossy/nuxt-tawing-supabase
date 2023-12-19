import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export let client: SupabaseClient;

export const initTawingSupabase = (uri: string, key: string) => {
  try {
    console.log("Supabase APP Initializing...");
    client = createClient(uri, key);
    console.log("Supabase APP Initialed");
    return client;
  } catch (error) {
    console.error("Supabase APP Initializing Error!", error);
  }
};
