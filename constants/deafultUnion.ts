import { classes } from '@/constants/classes';
import { type Character } from '@/types/Character';

export const defaultUnion: Character[] = classes.map((classItem) => ({
  tribe: classItem.tribe,
  classType: classItem.type,
  className: classItem.name,
  name: '',
  level: 0
}));
