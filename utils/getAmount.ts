import { grade, gradeMobile, gradeZero } from '@/constants/grade';
import { type ClassName } from '@/types/ClassNames';
import { getClass } from '@/utils/getClass';

export const getAmount = (level: number, className: ClassName) => {
  const gradeArr = (function () {
    if (className === '메이플M') {
      return gradeMobile;
    }

    if (className === '제로') {
      return gradeZero;
    }

    return grade;
  })();

  const amountArr = getClass(className)?.unionStatAmount ?? [];
  let targetIndex = 0;

  for (const gradeLvl of gradeArr) {
    if (level < gradeLvl) {
      break;
    }

    targetIndex++;
  }

  return amountArr[targetIndex];
};
