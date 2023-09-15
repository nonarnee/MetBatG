import { classes } from '@/constants/classes';

export const getClass = (className: string) => {
  return classes.find(({ name }) => className === name);
};
