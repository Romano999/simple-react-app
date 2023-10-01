import z from 'zod';

const envSchema = z.object({
  REACT_APP_BASE_URL: z.string(),
});

export const envClientSchema = envSchema.parse({
  REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
});