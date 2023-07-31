const guidelineStyle = 'block py-1';

export default function Guideline() {
  return (
    <div>
      <h3 className="mt-8 mb-2 font-semibold">사진 가이드라인</h3>
      <span className={guidelineStyle}>‧ 가이드라인 설명 1</span>
      <span className={guidelineStyle}>‧ 가이드라인 설명 2</span>
      <span className={guidelineStyle}>‧ 가이드라인 설명 3</span>
    </div>
  );
}
