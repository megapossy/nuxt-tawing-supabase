import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const tawingSupabase: {
  client: SupabaseClient | undefined;
  test: string;
} = {
  client: undefined,
  test: "",
};

export const initTawingSupabase = (uri: string, key: string) => {
  tawingSupabase.client = createClient(uri, key);
  tawingSupabase.test = 'xxxxxxxxxxxxx';
  return tawingSupabase;
};
