import { CheckCircle2, FileCheck2, Award, Sparkles, Layers } from 'lucide-react';
import { getQuestions, getMatrixSummary } from '../data';
import { Semester, ExamId, MCQQuestion, TrueFalseQuestion, MatchingQuestion, ShortAnswerQuestion, WrittenQuestion } from '../types';

interface GradingGuideProps {
  isPrintVersion?: boolean;
  semester?: Semester;
  examId?: ExamId;
}

export default function GradingGuide({ isPrintVersion = false, semester = 'ky1', examId = 'de1' }: GradingGuideProps) {
  const currentQuestions = getQuestions(semester, examId);
  const matrix = getMatrixSummary(semester, examId);

  const mcqs = currentQuestions.filter(q => q.type === 'mcq') as MCQQuestion[];
  const tfQuestions = currentQuestions.filter(q => q.type === 'true_false') as TrueFalseQuestion[];
  const matchQuestions = currentQuestions.filter(q => q.type === 'matching') as MatchingQuestion[];
  const shortAnswerQuestions = currentQuestions.filter(q => q.type === 'short_answer') as ShortAnswerQuestion[];
  const writtenQuestions = currentQuestions.filter(q => q.type === 'written') as WrittenQuestion[];

  const examLabel = examId === 'de2' ? 'ĐỀ SỐ 2' : 'ĐỀ SỐ 1';
  const semesterTitle = semester === 'ky1' 
    ? `HƯỚNG DẪN CHẤM & BIỂU ĐIỂM CHI TIẾT - ĐỀ KIỂM TRA CUỐI HỌC KÌ I (${examLabel})`
    : `HƯỚNG DẪN CHẤM & BIỂU ĐIỂM CHI TIẾT - ĐỀ KIỂM TRA CUỐI HỌC KÌ II (${examLabel})`;

  const semesterSubtitle = semester === 'ky1'
    ? 'Bám sát SGK Toán 3 Tập 1 (Bộ sách Kết nối tri thức với cuộc sống) • Thời gian: 40 phút • Thang điểm: 10,0'
    : 'Bám sát SGK Toán 3 Tập 2 (Bộ sách Kết nối tri thức với cuộc sống) • Thời gian: 40 phút • Thang điểm: 10,0';

  return (
    <div className={`space-y-8 ${isPrintVersion ? 'text-black' : 'text-slate-800'}`} id="official-grading-guide-section">
      
      {/* HEADER OF GRADING GUIDE */}
      <div className="border-b-2 border-slate-900 pb-4 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs mb-2 border border-amber-300">
          <Award className="w-3.5 h-3.5 text-amber-700" />
          <span>Biên soạn & Thẩm định: Giáo viên Vũ Thị Thúy Hà - Nhạc A</span>
        </div>
        <h2 className="text-base sm:text-lg font-black uppercase text-indigo-900">
          {semesterTitle}
        </h2>
        <p className="text-xs font-semibold text-slate-600 mt-1">
          {semesterSubtitle}
        </p>
        <p className="text-[11px] font-bold text-indigo-800 mt-1 italic">
          Bản quyền chuyên môn đề thi & Hướng dẫn chấm © Giáo viên: Vũ Thị Thúy Hà - Nhạc A
        </p>
      </div>

      {/* MA TRẬN ĐỀ THI ĐỐI CHIẾU CHUẨN */}
      <section className="avoided-break-block">
        <div className="flex items-center gap-2 mb-2 font-bold text-xs uppercase text-slate-800">
          <Layers className="w-4 h-4 text-indigo-600 no-print" />
          <span>BẢNG TỔNG HỢP MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ ({examLabel} - THEO THÔNG TƯ 27)</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-800 text-center text-xs">
            <thead>
              <tr className="bg-slate-100 font-bold">
                <th className="border border-slate-800 p-2 text-left" rowSpan={2}>Mạch kiến thức / Mức độ</th>
                <th className="border border-slate-800 p-1.5" colSpan={2}>Mức 1 (Nhận biết ~40%)</th>
                <th className="border border-slate-800 p-1.5" colSpan={2}>Mức 2 (Thông hiểu ~40%)</th>
                <th className="border border-slate-800 p-1.5" colSpan={2}>Mức 3 (Vận dụng ~20%)</th>
                <th className="border border-slate-800 p-1.5 bg-slate-200" colSpan={2}>Tổng cộng</th>
              </tr>
              <tr className="bg-slate-50 text-[11px] font-bold">
                <th className="border border-slate-800 p-1">Số câu</th>
                <th className="border border-slate-800 p-1">Điểm</th>
                <th className="border border-slate-800 p-1">Số câu</th>
                <th className="border border-slate-800 p-1">Điểm</th>
                <th className="border border-slate-800 p-1">Số câu</th>
                <th className="border border-slate-800 p-1">Điểm</th>
                <th className="border border-slate-800 p-1 bg-slate-200">Số câu</th>
                <th className="border border-slate-800 p-1 bg-slate-200">Điểm (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-800 p-2 text-left font-semibold">1. Số và phép tính (55% - 65%)</td>
                <td className="border border-slate-800 p-1.5">{matrix.levels.m1.count >= 4 ? 4 : 4} câu</td>
                <td className="border border-slate-800 p-1.5">2,5 đ</td>
                <td className="border border-slate-800 p-1.5">5 câu</td>
                <td className="border border-slate-800 p-1.5">3,0 đ</td>
                <td className="border border-slate-800 p-1.5">0</td>
                <td className="border border-slate-800 p-1.5">0 đ</td>
                <td className="border border-slate-800 p-1.5 font-bold bg-slate-100">{matrix.strands.numbers.count} câu</td>
                <td className="border border-slate-800 p-1.5 font-bold bg-slate-100 text-sky-800">5,5 đ (55%)</td>
              </tr>
              <tr>
                <td className="border border-slate-800 p-2 text-left font-semibold">2. Hình học và đo lường (25% - 35%)</td>
                <td className="border border-slate-800 p-1.5">2 câu</td>
                <td className="border border-slate-800 p-1.5">1,0 đ</td>
                <td className="border border-slate-800 p-1.5">1 câu</td>
                <td className="border border-slate-800 p-1.5">0,5 đ</td>
                <td className="border border-slate-800 p-1.5">2 câu</td>
                <td className="border border-slate-800 p-1.5">2,0 đ</td>
                <td className="border border-slate-800 p-1.5 font-bold bg-slate-100">{matrix.strands.geometry.count} câu</td>
                <td className="border border-slate-800 p-1.5 font-bold bg-slate-100 text-indigo-800">3,5 đ (35%)</td>
              </tr>
              <tr>
                <td className="border border-slate-800 p-2 text-left font-semibold">3. Xác suất và thống kê (khoảng 10%)</td>
                <td className="border border-slate-800 p-1.5">1 câu</td>
                <td className="border border-slate-800 p-1.5">0,5 đ</td>
                <td className="border border-slate-800 p-1.5">1 câu</td>
                <td className="border border-slate-800 p-1.5">0,5 đ</td>
                <td className="border border-slate-800 p-1.5">0</td>
                <td className="border border-slate-800 p-1.5">0 đ</td>
                <td className="border border-slate-800 p-1.5 font-bold bg-slate-100">{matrix.strands.statistics.count} câu</td>
                <td className="border border-slate-800 p-1.5 font-bold bg-slate-100 text-emerald-800">1,0 đ (10%)</td>
              </tr>
              <tr className="bg-slate-100 font-black text-xs">
                <td className="border border-slate-800 p-2 text-left">Tổng cộng toàn bài</td>
                <td className="border border-slate-800 p-1.5">{matrix.levels.m1.count} câu</td>
                <td className="border border-slate-800 p-1.5 text-emerald-700">4,0 đ (40%)</td>
                <td className="border border-slate-800 p-1.5">{matrix.levels.m2.count} câu</td>
                <td className="border border-slate-800 p-1.5 text-amber-700">4,0 đ (40%)</td>
                <td className="border border-slate-800 p-1.5">{matrix.levels.m3.count} câu</td>
                <td className="border border-slate-800 p-1.5 text-rose-700">2,0 đ (20%)</td>
                <td className="border border-slate-800 p-1.5 bg-slate-200">16 câu</td>
                <td className="border border-slate-800 p-1.5 bg-slate-200 text-indigo-900">10,0 đ (100%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PART I: OBJECTIVE TESTING ANSWER KEY & RUBRIC */}
      <section className="avoided-break-block">
        <div className="flex items-center justify-between mb-3 border-l-4 border-sky-500 pl-3 py-1 bg-sky-50/60 rounded-r-lg">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-sky-600 no-print" />
            <h3 className="font-black text-sm sm:text-base text-sky-950 uppercase">
              I. ĐÁP ÁN & BIỂU ĐIỂM PHẦN TRẮC NGHIỆM & TRẢ LỜI NGẮN (6,0 ĐIỂM)
            </h3>
          </div>
          <span className="text-xs font-bold text-sky-700 bg-white border border-sky-200 px-2.5 py-0.5 rounded-full shadow-xs">
            12 câu = 6,0 điểm (Mỗi câu 0,5 điểm)
          </span>
        </div>

        {/* 1. MCQ Table */}
        <div className="mb-4">
          <div className="font-bold text-xs text-slate-800 mb-1">1. Đáp án phần Trắc nghiệm nhiều lựa chọn (Câu 1 đến Câu 8 - Mỗi câu đúng 0,5 điểm):</div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-800 text-center text-xs">
              <thead>
                <tr className="bg-slate-100 font-bold">
                  <th className="border border-slate-800 p-1.5 w-16">Câu</th>
                  {mcqs.map(q => (
                    <th key={q.id} className="border border-slate-800 p-1.5">Câu {q.id}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-800 p-1.5 font-bold bg-slate-50">Đáp án</td>
                  {mcqs.map(q => (
                    <td key={q.id} className="border border-slate-800 p-1.5 font-black text-rose-600 text-sm">
                      {String.fromCharCode(65 + q.answer)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-slate-800 p-1 font-medium bg-slate-50 text-[11px]">Mạch / Điểm</td>
                  {mcqs.map(q => (
                    <td key={q.id} className="border border-slate-800 p-1 text-[11px] font-semibold text-slate-700">
                      {q.strand === 'numbers' ? 'Số (0,5đ)' : q.strand === 'geometry' ? 'Hình (0,5đ)' : 'Thống kê (0,5đ)'}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. True / False Key */}
        <div className="mb-4 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <div className="font-bold text-xs text-slate-800 mb-1">2. Đáp án Câu 9 (Đúng - Sai - 0,5 điểm, mỗi ý đúng được 0,125 điểm):</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {tfQuestions[0]?.items.map((it, idx) => (
              <div key={idx} className="bg-white p-2 rounded border border-slate-200 flex items-start gap-2">
                <span className={`px-2 py-0.5 rounded font-black text-xs shrink-0 ${it.isTrue ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                  {it.isTrue ? 'Đ (Đúng)' : 'S (Sai)'}
                </span>
                <span className="text-slate-700">{String.fromCharCode(97 + idx)}) {it.statement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Matching & Short Answer Key */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="font-bold text-xs text-slate-800 mb-1.5">3. Đáp án Câu 10 (Nối cột - 0,5 điểm):</div>
            {matchQuestions[0] && (
              <ul className="text-xs space-y-1 text-slate-700 font-medium">
                {matchQuestions[0].leftItems.map(left => {
                  const targetRightId = matchQuestions[0].correctPairs[left.id];
                  const right = matchQuestions[0].rightItems.find(r => r.id === targetRightId);
                  return (
                    <li key={left.id}>
                      • <strong>{left.text}</strong> nối với <strong>{right?.text}</strong>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="font-bold text-xs text-slate-800 mb-1.5">4. Đáp án Câu 11 & 12 (Trả lời ngắn - Mỗi câu 0,5 điểm):</div>
            <ul className="text-xs space-y-1.5 text-slate-700 font-medium">
              {shortAnswerQuestions.map(q => (
                <li key={q.id}>
                  • <strong>Câu {q.id} (0,5 điểm):</strong> Kết quả: <strong className="text-indigo-700">{q.correctAnswers[0]} {q.unit}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PART II: WRITTEN GRADING RUBRIC */}
      <section className="print-break pt-4">
        <div className="flex items-center justify-between mb-4 border-l-4 border-indigo-500 pl-3 py-1 bg-indigo-50/60 rounded-r-lg">
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-indigo-600 no-print" />
            <h3 className="font-black text-sm sm:text-base text-indigo-950 uppercase">
              II. HƯỚNG DẪN CHẤM & BIỂU ĐIỂM PHẦN TỰ LUẬN (4,0 ĐIỂM)
            </h3>
          </div>
          <span className="text-xs font-bold text-indigo-700 bg-white border border-indigo-200 px-2.5 py-0.5 rounded-full shadow-xs">
            4 bài toán = 4,0 điểm (Mỗi bài 1,0 điểm)
          </span>
        </div>

        <div className="space-y-5">
          {writtenQuestions.map((q) => (
            <div key={q.id} className="border border-slate-300 rounded-xl p-4 bg-white shadow-xs avoided-break-block">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-200">
                <div className="font-black text-slate-900 text-sm flex items-center gap-2">
                  <span>Câu {q.id}</span>
                  <span className="font-semibold text-indigo-700 text-xs">[{q.levelLabel}]</span>
                  {q.isOpenEnded && (
                    <span className="bg-amber-100 text-amber-900 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-amber-300">
                      <Sparkles className="w-3 h-3 text-amber-600" /> Bài toán mở - Phát huy tư duy
                    </span>
                  )}
                </div>
                <span className="font-black text-indigo-900 bg-indigo-50 border border-indigo-200 px-3 py-0.5 rounded-full text-xs">
                  Điểm tối đa: {q.points.toFixed(1)} điểm
                </span>
              </div>

              <div className="text-xs text-slate-700 font-medium mb-3 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <strong className="not-italic text-slate-900">Đề bài: </strong>
                <span dangerouslySetInnerHTML={{ __html: q.text }} />
              </div>

              {/* Step-by-step scoring criteria */}
              {q.scoringCriteria && q.scoringCriteria.length > 0 && (
                <div className="mb-3">
                  <div className="text-xs font-bold text-slate-800 uppercase mb-1 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Thang điểm chi tiết từng bước:</span>
                  </div>
                  <div className="bg-indigo-50/40 rounded-lg p-2 border border-indigo-100 space-y-1">
                    {q.scoringCriteria.map((crit, cIdx) => (
                      <div key={cIdx} className="flex justify-between items-center text-xs text-slate-800">
                        <span>• {crit.step}</span>
                        <span className="font-bold text-indigo-700 shrink-0 ml-2">
                          +{crit.points.toFixed(2).replace('.00', '').replace('.', ',')} đ
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed official solution */}
              <div>
                <div className="text-xs font-bold text-emerald-800 uppercase mb-1">
                  Bài giải mẫu chuẩn & Lời khuyên sư phạm:
                </div>
                <div 
                  className="bg-emerald-50/30 p-3 rounded-lg border border-emerald-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans"
                  dangerouslySetInnerHTML={{ __html: q.explanation }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COPYRIGHT FOOTER IN GRADING GUIDE */}
      <div className="pt-4 border-t border-slate-300 text-center text-xs text-slate-600 font-medium avoided-break-block">
        <p className="font-bold text-slate-800">
          © BẢN QUYỀN NỘI DUNG & HƯỚNG DẪN CHẤM: GIÁO VIÊN VŨ THỊ THÚY HÀ - NHẠC A
        </p>
        <p className="text-[11px] text-slate-500 mt-0.5">
          Tài liệu phục vụ giảng dạy, ôn luyện và kiểm tra định kỳ học sinh Lớp 3 theo chuẩn chương trình GDPT 2018
        </p>
      </div>
    </div>
  );
}
