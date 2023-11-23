export type MySize = {
  height: number | null;
  weight: number | null;
  arm: number | null;
  leg: number | null;
  shoulder: number | null;
  waist: number | null;
  chest: number | null;
  thigh: number | null;
  hip: number | null;
};

export type smartAnalysisRequestBody = {
  front: string;
  side: string;
  height: number;
  weight: number;
  sex: string;
};