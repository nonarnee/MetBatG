import { type ClassName } from '@/types/ClassNames';

export interface ClassInfo {
  tribe: string
  type: string
  name: ClassName
  unionStat: string
  unionStatAmount: string[]
}

export const classes: ClassInfo[] = [
  {
    tribe: '모험가',
    type: '전사',
    name: '히어로',
    unionStat: 'STR',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '모험가',
    type: '전사',
    name: '팔라딘',
    unionStat: 'STR',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '모험가',
    type: '전사',
    name: '다크나이트',
    unionStat: '최대 HP',
    unionStatAmount: ['0', '2%', '3%', '4%', '5%', '6%']
  },
  {
    tribe: '모험가',
    type: '마법사',
    name: '불독',
    unionStat: '최대 MP',
    unionStatAmount: ['0', '2%', '3%', '4%', '5%', '6%']
  },
  {
    tribe: '모험가',
    type: '마법사',
    name: '썬콜',
    unionStat: 'INT',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '모험가',
    type: '마법사',
    name: '비숍',
    unionStat: 'INT',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '모험가',
    type: '궁수',
    name: '보우마스터',
    unionStat: 'DEX',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '모험가',
    type: '궁수',
    name: '패스파인더',
    unionStat: 'DEX',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '모험가',
    type: '궁수',
    name: '신궁',
    unionStat: '크리티컬 확률',
    unionStatAmount: ['0', '1%', '2%', '3%', '4%', '5%']
  },
  {
    tribe: '모험가',
    type: '도적',
    name: '나이트로드',
    unionStat: '크리티컬 확률',
    unionStatAmount: ['0', '1%', '2%', '3%', '4%', '5%']
  },
  {
    tribe: '모험가',
    type: '도적',
    name: '섀도어',
    unionStat: 'LUK',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '모험가',
    type: '도적',
    name: '듀얼블레이드',
    unionStat: 'LUK',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '모험가',
    type: '해적',
    name: '캡틴',
    unionStat: '소환수 지속시간',
    unionStatAmount: ['0', '4%', '6%', '8%', '10%', '12%']
  },
  {
    tribe: '모험가',
    type: '해적',
    name: '바이퍼',
    unionStat: 'STR',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '모험가',
    type: '해적',
    name: '캐논슈터',
    unionStat: 'STR',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '시그너스',
    type: '전사',
    name: '소울마스터',
    unionStat: '최대 HP',
    unionStatAmount: ['0', '250', '500', '1000', '2000', '2500']
  },
  {
    tribe: '시그너스',
    type: '전사',
    name: '미하일',
    unionStat: '최대 HP',
    unionStatAmount: ['0', '250', '500', '1000', '2000', '2500']
  },
  {
    tribe: '시그너스',
    type: '마법사',
    name: '플레임위자드',
    unionStat: 'INT',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '시그너스',
    type: '궁수',
    name: '윈드브레이커',
    unionStat: 'DEX',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '시그너스',
    type: '도적',
    name: '나이트워커',
    unionStat: 'LUK',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '시그너스',
    type: '해적',
    name: '스트라이커',
    unionStat: 'STR',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '레지스탕스',
    type: '해적',
    name: '블래스터',
    unionStat: '방어율 무시',
    unionStatAmount: ['0', '1%', '2%', '3%', '5%', '6%']
  },
  {
    tribe: '레지스탕스',
    type: '전사',
    name: '데몬슬레이어',
    unionStat: '상태이상 내성',
    unionStatAmount: ['0', '1', '2', '3', '4', '5']
  },
  {
    tribe: '레지스탕스',
    type: '전사',
    name: '데몬어벤저',
    unionStat: '보공',
    unionStatAmount: ['0', '1%', '2%', '3%', '5%', '6%']
  },
  {
    tribe: '레지스탕스',
    type: '마법사',
    name: '배틀메이지',
    unionStat: 'INT',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '레지스탕스',
    type: '궁수',
    name: '와일드헌터',
    unionStat: '공격시 20% 확률로 데미지',
    unionStatAmount: ['0', '4%', '8%', '12%', '16%', '20%']
  },
  {
    tribe: '레지스탕스',
    type: '해적',
    name: '메카닉',
    unionStat: '버프지속시간',
    unionStatAmount: ['0', '5%', '10%', '15%', '20%', '25%']
  },
  {
    tribe: '레지스탕스',
    type: '해적',
    name: '제논',
    unionStat: 'STR/DEX/LUK',
    unionStatAmount: ['0', '5', '10', '20', '40', '50']
  },
  {
    tribe: '영웅',
    type: '전사',
    name: '아란',
    unionStat: '공격시 70% 확률로 HP',
    unionStatAmount: ['0', '2', '4', '6', '8', '10']
  },
  {
    tribe: '영웅',
    type: '마법사',
    name: '에반',
    unionStat: '공격시 70% 확률로 MP',
    unionStatAmount: ['0', '2', '4', '6', '8', '10']
  },
  {
    tribe: '영웅',
    type: '마법사',
    name: '루미너스',
    unionStat: 'INT',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '영웅',
    type: '궁수',
    name: '메르세데스',
    unionStat: '스킬 재사용 대기시간',
    unionStatAmount: ['0', '2%', '3%', '4%', '5%', '6%']
  },
  {
    tribe: '영웅',
    type: '도적',
    name: '팬텀',
    unionStat: '메소획득량',
    unionStatAmount: ['0', '1%', '2%', '3%', '4%', '5%']
  },
  {
    tribe: '영웅',
    type: '해적',
    name: '은월',
    unionStat: '크리티컬 데미지',
    unionStatAmount: ['0', '1%', '2%', '3%', '5%', '6%']
  },
  {
    tribe: '노바',
    type: '전사',
    name: '카이저',
    unionStat: 'STR',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '노바',
    type: '전사',
    name: '카인',
    unionStat: 'DEX',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '노바',
    type: '도적',
    name: '카데나',
    unionStat: 'LUK',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '노바',
    type: '해적',
    name: '엔젤릭버스터',
    unionStat: 'DEX',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '레프',
    type: '전사',
    name: '아델',
    unionStat: 'STR',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '레프',
    type: '마법사',
    name: '일리움',
    unionStat: 'INT',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '레프',
    type: '도적',
    name: '칼리',
    unionStat: 'LUK',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '레프',
    type: '해적',
    name: '아크',
    unionStat: 'STR',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '아니마',
    type: '마법사',
    name: '라라',
    unionStat: 'INT',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '아니마',
    type: '도적',
    name: '호영',
    unionStat: 'LUK',
    unionStatAmount: ['0', '10', '20', '40', '80', '100']
  },
  {
    tribe: '초월자',
    type: '전사',
    name: '제로',
    unionStat: '경험치 획득량',
    unionStatAmount: ['0', '4%', '6%', '8%', '10%', '12%']
  },
  {
    tribe: '프렌즈 월드',
    type: '마법사',
    name: '키네시스',
    unionStat: 'INT',
    unionStatAmount: ['0', '4%', '6%', '8%', '10%', '12%']
  },
  {
    tribe: '',
    type: '',
    name: '메이플M',
    unionStat: '공격력/마력',
    unionStatAmount: ['0', '5', '10', '15', '20']
  }
];
