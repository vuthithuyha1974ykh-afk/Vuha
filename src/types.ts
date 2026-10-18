export type QuestionType = 'mcq' | 'true_false' | 'matching' | 'short_answer' | 'written';
export type QuestionLevel = 'Mức 1' | 'Mức 2' | 'Mức 3';
export type KnowledgeStrand = 'numbers' | 'geometry' | 'statistics'; 
// 'numbers': Số và phép tính (55%-65%)
// 'geometry': Hình học và đo lường (25%-35%)
// 'statistics': Xác suất và thống kê (10%)

export type Semester = 'ky1' | 'ky2';
export type ExamId = 'de1' | 'de2';

export interface IllustrationData {
  type: string;
  caption?: string;
  data?: Record<string, any>;
}

export interface BaseQuestion {
  id: number;
  type: QuestionType;
  level: QuestionLevel;
  levelLabel: string; // e.g. "Mức 1 (Nhận biết)", "Mức 2 (Thông hiểu)", "Mức 3 (Vận dụng cao)"
  strand: KnowledgeStrand;
  strandLabel: string; // "Số và phép tính" | "Hình học và đo lường" | "Xác suất và thống kê"
  points: number;
  text: string;
  illustration?: IllustrationData;
  explanation: string;
}

export interface MCQQuestion extends BaseQuestion {
  type: 'mcq';
  options: string[];
  answer: number; // 0, 1, 2, 3
}

export interface TrueFalseItem {
  statement: string;
  isTrue: boolean;
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true_false';
  items: TrueFalseItem[];
}

export interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'matching';
  leftItems: { id: string; text: string }[];
  rightItems: { id: string; text: string }[];
  correctPairs: { [leftId: string]: string }; // leftId -> rightId
}

export interface ShortAnswerQuestion extends BaseQuestion {
  type: 'short_answer';
  unit?: string;
  correctAnswers: string[]; // List of acceptable string/numeric answers
  placeholder?: string;
}

export interface WrittenQuestion extends BaseQuestion {
  type: 'written';
  isOpenEnded?: boolean; // Câu hỏi mở phát huy năng lực tư duy sáng tạo
  scoringCriteria?: {
    step: string;
    points: number;
  }[];
}

export type Question = 
  | MCQQuestion 
  | TrueFalseQuestion 
  | MatchingQuestion 
  | ShortAnswerQuestion 
  | WrittenQuestion;

export interface UserAnswers {
  [questionId: number]: any;
}

export interface MatrixItem {
  strandName: string;
  level1: { count: number; points: number };
  level2: { count: number; points: number };
  level3: { count: number; points: number };
  total: { count: number; points: number; percent: string };
}
