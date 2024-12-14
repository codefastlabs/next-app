import { type ZodSchema, object, string, ZodError } from 'zod';

import { logger } from '@/lib/logger';

const environmentSchema = object({
  DATABASE_URL: string().min(1).url(),
});

const validateEnvironment = <T>(schema: ZodSchema<T>, env: NodeJS.ProcessEnv): T => {
  try {
    return schema.parse(env);
  } catch (error) {
    if (error instanceof ZodError) {
      logger.error('Environment validation failed:\n', JSON.stringify(error.errors, null, 2));
      process.exit(1);
    }

    throw new Error('Unreachable code after process.exit');
  }
};

export const env = validateEnvironment(environmentSchema, process.env);
