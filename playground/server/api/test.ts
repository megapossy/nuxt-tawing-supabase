import { client } from "@nuxt/tawing-supabase";

export default defineEventHandler(async (event) => {
  const { data } = await client.from("email_list").select().returns();
  return data;
});
