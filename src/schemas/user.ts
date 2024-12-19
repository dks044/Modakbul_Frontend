import {z} from 'zod';
import {profileSchema} from './profile';

// 사용자 스키마 정의
export const userResponseSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  profile: profileSchema.optional(),
});

// 사용자 타입 추론
export type User = z.infer<typeof userResponseSchema>;
