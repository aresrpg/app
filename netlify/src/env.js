import { decode } from "https://deno.land/std@0.176.0/encoding/base64.ts"

const {
  PORT: port = 3000,
  PRIVATE_KEY: private_key,
  PUBLIC_KEY: public_key,
  COOKIE_SAMESITE = "none",
  COOKIE_PATH = "/",
  COOKIE_SECURE: cookie_secure = "true",
  COOKIE_DOMAIN,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_PWD,
  MICROSOFT_CLIENT_ID,
  MICROSOFT_CLIENT_SECRET,
  MICROSOFT_REDIRECT_URI = "http://localhost:8888/minecraft-oauth",
  MICROSOFT_TENANT_ID,
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  DISCORD_REDIRECT_URI = "http://localhost:8888/discord-oauth",
  CREW3_API_KEY,
  RECAPTCHA_SECRET,
} = Deno.env.toObject()

export const PORT = +port

export {
  COOKIE_DOMAIN,
  COOKIE_PATH,
  COOKIE_SAMESITE,
  CREW3_API_KEY,
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  DISCORD_REDIRECT_URI,
  MICROSOFT_CLIENT_ID,
  MICROSOFT_CLIENT_SECRET,
  MICROSOFT_REDIRECT_URI,
  MICROSOFT_TENANT_ID,
  RECAPTCHA_SECRET,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_PWD,
}

export const PRIVATE_KEY = new TextDecoder().decode(decode(private_key))
export const PUBLIC_KEY = new TextDecoder().decode(decode(public_key))
export const COOKIE_SECURE = cookie_secure === "true"
