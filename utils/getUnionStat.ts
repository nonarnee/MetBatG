import { type ClassName } from '@/types/ClassNames';
import { classes } from '@/constants/classes';

export const getUnionStat = (className: ClassName) => {
  return classes.find(({ name }) => name === className)?.unionStat;
};
