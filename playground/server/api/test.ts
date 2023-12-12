import {
  useNitro
} from "@nuxt/kit";

export default defineEventHandler(async (event) => {
  const nitro = useNitro()
  
  return 'asdsadasd' + nitro.options.experimental.xxxx
})  
