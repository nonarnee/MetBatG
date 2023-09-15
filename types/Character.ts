import { type ClassName } from '@/types/ClassNames';

export interface Character {
  tribe: string
  classType: string
  className: ClassName
  name: string
  level: number
}
