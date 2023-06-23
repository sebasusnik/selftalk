import * as z from "zod"

export const userAuthSchema = z.object({
  email: z.string().email("Debes ingresar un email válido"),
})
