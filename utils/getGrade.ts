import { grade, gradeLabel, gradeMobile, gradeZero, type UnionGrade } from '@/constants/grade';
import { type ClassName } from '@/types/ClassNames';

export const getGrade = (level: number, className: ClassName): UnionGrade => {
  const gradeArr = (function () {
    if (className === '메이플M') {
      return gradeMobile;
    }

    if (className === '제로') {
      return gradeZero;
    }

    return grade;
  })();
  let targetIndex = 0;

  for (const gradeLvl of gradeArr) {
    if (level < gradeLvl) {
      break;
    }

    targetIndex++;
  }

  return gradeLabel[targetIndex];
};
