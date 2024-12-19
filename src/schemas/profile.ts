import {z} from 'zod';

// 프로필 스키마 정의
export const profileSchema = z.object({
  userId: z.string(), // 사용자 ID
  bio: z.string().optional(), // 자기소개는 선택적
  description: z.string().optional(), // 추가 설명은 선택적
  age: z.number().min(0).optional(), // 나이는 0 이상 (optional()을 나중에 호출)
  gender: z.string().optional(), // 성별은 선택적
  birthYear: z.number().int().min(1900).optional(), // 출생 연도는 1900년 이후의 정수
  interests: z.array(z.string()).optional(), // 관심사는 문자열 배열로 선택적
  createdAt: z.date().optional(), // 생성 날짜 (선택적)
  updatedAt: z.date().optional(), // 업데이트 날짜 (선택적)
});

// 타입 추론
export type Profile = z.infer<typeof profileSchema>;
