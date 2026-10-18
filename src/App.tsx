import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  GraduationCap, 
  Laptop, 
  Printer, 
  RotateCcw, 
  CheckCircle2, 
  Sliders, 
  Lightbulb, 
  Info,
  ChevronDown,
  ChevronUp,
  BarChart3,
  BookOpen,
  Sparkles,
  HelpCircle,
  Layers,
  Calculator,
  Compass,
  PieChart,
  Calendar,
  FileText,
  Award,
  ShieldCheck
} from 'lucide-react';
import { getQuestions, getMatrixSummary } from './data';
import { 
  Semester,
  ExamId,
  UserAnswers, 
  QuestionLevel, 
  KnowledgeStrand,
  MCQQuestion,
  TrueFalseQuestion,
  MatchingQuestion,
  ShortAnswerQuestion,
  WrittenQuestion 
} from './types';
import GradingGuide from './components/GradingGuide';
import { GeometryIllustration } from './components/GeometryIllustration';

export default function App() {
  const [semester, setSemester] = useState<Semester>(() => {
    const saved = localStorage.getItem('lop3_math_selected_semester');
    return (saved === 'ky2' ? 'ky2' : 'ky1') as Semester;
  });

  const [examId, setExamId] = useState<ExamId>(() => {
    const saved = localStorage.getItem('lop3_math_selected_exam');
    return (saved === 'de2' ? 'de2' : 'de1') as ExamId;
  });

  const [activeTab, setActiveTab] = useState<'practice' | 'print' | 'guide'>('practice');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<'all' | QuestionLevel>('all');
  const [selectedStrandFilter, setSelectedStrandFilter] = useState<'all' | KnowledgeStrand>('all');
  
  const currentQuestions = getQuestions(semester, examId);
  const matrixSummary = getMatrixSummary(semester, examId);

  const storageKeyPrefix = `lop3_math_${semester}_${examId}`;

  const [userAnswers, setUserAnswers] = useState<UserAnswers>(() => {
    try {
      const saved = localStorage.getItem(`${storageKeyPrefix}_answers`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [matchingSelectedLeft, setMatchingSelectedLeft] = useState<{ [qId: number]: string | null }>({});

  const [examGraded, setExamGraded] = useState<boolean>(() => {
    return localStorage.getItem(`${storageKeyPrefix}_graded`) === 'true';
  });

  const [timerSeconds, setTimerSeconds] = useState<number>(() => {
    const savedTime = localStorage.getItem(`${storageKeyPrefix}_timer`);
    if (savedTime) {
      const parsed = parseInt(savedTime, 10);
      if (!isNaN(parsed) && parsed <= 40 * 60) return parsed;
    }
    return 40 * 60; // 40 minutes default
  });

  const [openExplanations, setOpenExplanations] = useState<{ [id: number]: boolean }>({});
  const [printShowAnswers, setPrintShowAnswers] = useState<boolean>(true);
  const [printShowMatrix, setPrintShowMatrix] = useState<boolean>(true);
  const [showBottomGuide, setShowBottomGuide] = useState<boolean>(false);

  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // When semester or exam variant changes, reload scoped state
  const handleConfigChange = (newSemester: Semester, newExamId: ExamId) => {
    if (newSemester === semester && newExamId === examId) return;
    setSemester(newSemester);
    setExamId(newExamId);
    localStorage.setItem('lop3_math_selected_semester', newSemester);
    localStorage.setItem('lop3_math_selected_exam', newExamId);
    
    const newPrefix = `lop3_math_${newSemester}_${newExamId}`;
    try {
      const savedAnswers = localStorage.getItem(`${newPrefix}_answers`);
      setUserAnswers(savedAnswers ? JSON.parse(savedAnswers) : {});
    } catch {
      setUserAnswers({});
    }

    const savedGraded = localStorage.getItem(`${newPrefix}_graded`) === 'true';
    setExamGraded(savedGraded);

    const savedTime = localStorage.getItem(`${newPrefix}_timer`);
    if (savedTime) {
      const parsed = parseInt(savedTime, 10);
      setTimerSeconds(!isNaN(parsed) && parsed <= 40 * 60 ? parsed : 40 * 60);
    } else {
      setTimerSeconds(40 * 60);
    }

    setOpenExplanations({});
    setMatchingSelectedLeft({});
    setSelectedLevelFilter('all');
    setSelectedStrandFilter('all');
  };

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(`${storageKeyPrefix}_answers`, JSON.stringify(userAnswers));
  }, [userAnswers, storageKeyPrefix]);

  useEffect(() => {
    localStorage.setItem(`${storageKeyPrefix}_graded`, String(examGraded));
  }, [examGraded, storageKeyPrefix]);

  useEffect(() => {
    localStorage.setItem(`${storageKeyPrefix}_timer`, String(timerSeconds));
  }, [timerSeconds, storageKeyPrefix]);

  // Countdown timer logic (40 minutes)
  useEffect(() => {
    if (activeTab === 'practice' && !examGraded && timerSeconds > 0) {
      timerIntervalRef.current = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev <= 1) {
            clearInterval(timerIntervalRef.current!);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [activeTab, examGraded, timerSeconds]);

  const handleAutoSubmit = () => {
    setExamGraded(true);
    triggerGradingConfetti(stats.earnedPoints);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handlers for Question Interaction
  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (examGraded) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  const handleSelectTrueFalse = (questionId: number, itemIdx: number, value: boolean) => {
    if (examGraded) return;
    setUserAnswers(prev => {
      const currentTF = prev[questionId] || {};
      return {
        ...prev,
        [questionId]: {
          ...currentTF,
          [itemIdx]: value
        }
      };
    });
  };

  const handleSelectMatchingLeft = (questionId: number, leftId: string) => {
    if (examGraded) return;
    setMatchingSelectedLeft(prev => ({
      ...prev,
      [questionId]: prev[questionId] === leftId ? null : leftId
    }));
  };

  const handleSelectMatchingRight = (questionId: number, rightId: string) => {
    if (examGraded) return;
    const selectedLeft = matchingSelectedLeft[questionId];
    if (!selectedLeft) return;

    setUserAnswers(prev => {
      const currentPairs = prev[questionId] || {};
      return {
        ...prev,
        [questionId]: {
          ...currentPairs,
          [selectedLeft]: rightId
        }
      };
    });

    setMatchingSelectedLeft(prev => ({
      ...prev,
      [questionId]: null
    }));
  };

  const handleShortAnswerChange = (questionId: number, value: string) => {
    if (examGraded) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const toggleExplanation = (questionId: number) => {
    setOpenExplanations(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  // Grading calculation
  const getStats = () => {
    let earnedPoints = 0;
    let autoGradedCorrectCount = 0;
    let autoGradedQuestionsCount = 0;
    let totalAnsweredCount = 0;

    currentQuestions.forEach(q => {
      const userAns = userAnswers[q.id];
      if (userAns !== undefined && userAns !== '' && (typeof userAns !== 'object' || Object.keys(userAns).length > 0)) {
        totalAnsweredCount++;
      }

      if (q.type === 'mcq') {
        autoGradedQuestionsCount++;
        if (userAns === (q as MCQQuestion).answer) {
          earnedPoints += q.points;
          autoGradedCorrectCount++;
        }
      } else if (q.type === 'true_false') {
        autoGradedQuestionsCount++;
        const tfQ = q as TrueFalseQuestion;
        let correctItems = 0;
        tfQ.items.forEach((item, idx) => {
          if (userAns?.[idx] === item.isTrue) {
            correctItems++;
          }
        });
        const partialPoints = (correctItems / tfQ.items.length) * q.points;
        earnedPoints += partialPoints;
        if (correctItems === tfQ.items.length) {
          autoGradedCorrectCount++;
        }
      } else if (q.type === 'matching') {
        autoGradedQuestionsCount++;
        const mQ = q as MatchingQuestion;
        const mAns = userAns || {};
        let correctPairs = 0;
        const totalPairs = Object.keys(mQ.correctPairs).length;
        Object.entries(mQ.correctPairs).forEach(([lId, rId]) => {
          if (mAns[lId] === rId) correctPairs++;
        });
        if (totalPairs > 0) {
          earnedPoints += (correctPairs / totalPairs) * q.points;
        }
        if (correctPairs === totalPairs) {
          autoGradedCorrectCount++;
        }
      } else if (q.type === 'short_answer') {
        const saQ = q as ShortAnswerQuestion;
        autoGradedQuestionsCount++;
        const strAns = String(userAns || '').trim().toLowerCase().replace(/\s+/g, '');
        const isMatch = saQ.correctAnswers.some(c => c.toLowerCase().replace(/\s+/g, '') === strAns);
        if (isMatch) {
          earnedPoints += q.points;
          autoGradedCorrectCount++;
        }
      }
    });

    const progressPercent = Math.round((totalAnsweredCount / currentQuestions.length) * 100);

    return {
      earnedPoints: Math.round(earnedPoints * 100) / 100,
      autoGradedCorrectCount,
      autoGradedQuestionsCount,
      totalAnsweredCount,
      progressPercent
    };
  };

  const stats = getStats();

  const triggerGradingConfetti = (points: number) => {
    if (points >= 5.0) {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    } else if (points >= 3.0) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.65 }
      });
    }
  };

  const handleSubmitExam = () => {
    if (examGraded) return;
    setExamGraded(true);
    triggerGradingConfetti(stats.earnedPoints);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetExam = () => {
    if (window.confirm('Em có chắc chắn muốn làm lại từ đầu không?')) {
      setUserAnswers({});
      setExamGraded(false);
      setTimerSeconds(40 * 60);
      setOpenExplanations({});
      setMatchingSelectedLeft({});
      localStorage.removeItem(`${storageKeyPrefix}_answers`);
      localStorage.removeItem(`${storageKeyPrefix}_graded`);
      localStorage.removeItem(`${storageKeyPrefix}_timer`);
    }
  };

  const scrollToQuestion = (id: number) => {
    const element = document.getElementById(`practice-q-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.classList.add('ring-4', 'ring-sky-300');
      setTimeout(() => {
        element.classList.remove('ring-4', 'ring-sky-300');
      }, 1500);
    }
  };

  const filteredQuestions = currentQuestions.filter(q => {
    const matchesLevel = selectedLevelFilter === 'all' || q.level === selectedLevelFilter;
    const matchesStrand = selectedStrandFilter === 'all' || q.strand === selectedStrandFilter;
    return matchesLevel && matchesStrand;
  });

  const examLabelText = examId === 'de2' ? 'ĐỀ SỐ 2' : 'ĐỀ SỐ 1';
  const semesterDisplayTitle = semester === 'ky1' 
    ? `ĐỀ TOÁN CUỐI HỌC KÌ I (${examLabelText}) - LỚP 3`
    : `ĐỀ TOÁN CUỐI HỌC KÌ II (${examLabelText}) - LỚP 3`;

  const semesterBookLabel = semester === 'ky1'
    ? 'SGK Toán 3 - Tập Một (Kết nối tri thức với cuộc sống)'
    : 'SGK Toán 3 - Tập Hai (Kết nối tri thức với cuộc sống)';

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-[#f4f8fc]">
      
      {/* TOP NAVBAR */}
      <header className="bg-white border-b border-sky-100 sticky top-0 z-40 shadow-xs no-print">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-sky-600 text-white p-2.5 rounded-2xl shadow-md shadow-sky-200">
              <GraduationCap className="w-6 h-6" id="navbar-logo-icon" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-lg sm:text-xl font-black text-sky-700">{semesterDisplayTitle}</h1>
                <span className="bg-sky-100 text-sky-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase border border-sky-200">
                  40 phút
                </span>
                <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 border border-amber-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                  <Award className="w-3.5 h-3.5 text-amber-700" />
                  <span>GV: Vũ Thị Thúy Hà - Nhạc A</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-bold tracking-wider">
                {semesterBookLabel} • Bản quyền chuyên môn: <strong className="text-amber-800 font-bold">Vũ Thị Thúy Hà - Nhạc A</strong>
              </p>
            </div>
          </div>

          {/* SELECTORS: SEMESTER & EXAM VARIANT */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Học kì selector */}
            <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 shadow-inner">
              <button
                onClick={() => handleConfigChange('ky1', examId)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  semester === 'ky1'
                    ? 'bg-sky-600 text-white shadow-sm font-black'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" /> Học Kì 1
              </button>
              <button
                onClick={() => handleConfigChange('ky2', examId)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  semester === 'ky2'
                    ? 'bg-sky-600 text-white shadow-sm font-black'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" /> Học Kì 2
              </button>
            </div>

            {/* Đề số 1 / Đề số 2 selector */}
            <div className="flex items-center bg-amber-50 p-1 rounded-2xl border border-amber-200 shadow-inner">
              <button
                onClick={() => handleConfigChange(semester, 'de1')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  examId === 'de1'
                    ? 'bg-amber-600 text-white shadow-sm font-black'
                    : 'text-amber-800 hover:text-amber-950'
                }`}
              >
                <FileText className="w-3.5 h-3.5" /> Đề 1
              </button>
              <button
                onClick={() => handleConfigChange(semester, 'de2')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  examId === 'de2'
                    ? 'bg-amber-600 text-white shadow-sm font-black'
                    : 'text-amber-800 hover:text-amber-950'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" /> Đề 2 (Kèm hình vẽ)
              </button>
            </div>
          </div>
          
          {/* Main Action Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              id="practice-mode-tab-btn"
              onClick={() => setActiveTab('practice')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all duration-200 shadow-xs cursor-pointer ${
                activeTab === 'practice'
                  ? 'bg-sky-600 text-white shadow-sky-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Laptop className="w-4 h-4" /> Luyện tập trực tuyến
            </button>
            
            <button
              id="print-mode-tab-btn"
              onClick={() => setActiveTab('print')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all duration-200 shadow-xs cursor-pointer ${
                activeTab === 'print'
                  ? 'bg-indigo-600 text-white shadow-indigo-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Printer className="w-4 h-4" /> Bản in & Xuất PDF
            </button>

            <button
              id="guide-mode-tab-btn"
              onClick={() => setActiveTab('guide')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all duration-200 shadow-xs cursor-pointer ${
                activeTab === 'guide'
                  ? 'bg-emerald-600 text-white shadow-emerald-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4" /> Hướng dẫn chấm & Ma trận
            </button>
          </div>
        </div>
      </header>

      {/* BODY CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 py-6 flex-1 w-full space-y-6">
        
        {/* BANNER OVERVIEW (SCREEN ONLY) */}
        <section className="bg-gradient-to-r from-sky-700 via-sky-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden no-print">
          <div className="absolute -right-8 -bottom-8 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-white/20 text-white text-xs font-black px-3 py-1 rounded-full uppercase backdrop-blur-xs">
                Toán Lớp 3 • {semester === 'ky1' ? 'Cuối Học Kì I' : 'Cuối Học Kì II'}
              </span>
              <span className="bg-amber-400 text-amber-950 text-xs font-black px-3 py-1 rounded-full uppercase">
                {examLabelText}
              </span>
              <span className="bg-amber-300 text-amber-950 text-xs font-black px-3 py-1 rounded-full uppercase flex items-center gap-1">
                <Award className="w-3.5 h-3.5" /> GV: Vũ Thị Thúy Hà - Nhạc A
              </span>
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-100 ml-auto bg-black/25 px-3 py-1 rounded-full backdrop-blur-xs border border-white/10">
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>Bản quyền chuyên môn: Vũ Thị Thúy Hà - Nhạc A</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-black mt-1 mb-2">
              {semester === 'ky1' 
                ? `Đề Kiểm Tra Cuối Học Kì I Môn Toán Lớp 3 (${examLabelText})` 
                : `Đề Kiểm Tra Cuối Học Kì II Môn Toán Lớp 3 (${examLabelText})`}
            </h2>

            <p className="text-sky-100 max-w-3xl text-sm md:text-base leading-relaxed font-medium">
              {semester === 'ky1'
                ? 'Bám sát SGK Toán 3 Tập 1 (Các số đến 1 000; Bảng nhân chia 6-9; Tìm thành phần; Một phần mấy; Đơn vị mm, g, ml, °C; Góc vuông, trung điểm; Hình vẽ trực quan sinh động). Gồm 12 câu trắc nghiệm khách quan/ngắn (6,0 đ) + 4 bài tự luận (4,0 đ).'
                : 'Bám sát SGK Toán 3 Tập 2 (Các số đến 100 000; Chu vi & Diện tích hình chữ nhật, hình vuông; Tiền Việt Nam; Bài toán rút về đơn vị & bài toán mở thực tiễn có hình minh họa).'
              }
            </p>
            
            {/* Strands & Levels Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mt-5 pt-4 border-t border-white/20 text-xs">
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-xs">
                <div className="text-sky-200 text-[10px] uppercase font-bold flex items-center gap-1">
                  <Calculator className="w-3 h-3" /> Số & Phép tính
                </div>
                <div className="text-sm font-black text-white mt-0.5">9 câu (5,5 đ)</div>
              </div>
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-xs">
                <div className="text-sky-200 text-[10px] uppercase font-bold flex items-center gap-1">
                  <Compass className="w-3 h-3" /> Hình học & Đo lường
                </div>
                <div className="text-sm font-black text-white mt-0.5">5 câu (3,5 đ)</div>
              </div>
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-xs">
                <div className="text-sky-200 text-[10px] uppercase font-bold flex items-center gap-1">
                  <PieChart className="w-3 h-3" /> Xác suất & Thống kê
                </div>
                <div className="text-sm font-black text-white mt-0.5">2 câu (1,0 đ)</div>
              </div>
              <div className="bg-emerald-500/30 border border-emerald-300/40 p-2 rounded-xl">
                <div className="text-emerald-200 text-[10px] uppercase font-bold">Mức 1 (Nhận biết)</div>
                <div className="text-sm font-black text-white mt-0.5">7 câu (4,0 đ - 40%)</div>
              </div>
              <div className="bg-amber-500/30 border border-amber-300/40 p-2 rounded-xl">
                <div className="text-amber-200 text-[10px] uppercase font-bold">Mức 2 (Thông hiểu)</div>
                <div className="text-sm font-black text-white mt-0.5">7 câu (4,0 đ - 40%)</div>
              </div>
              <div className="bg-rose-500/30 border border-rose-300/40 p-2 rounded-xl">
                <div className="text-rose-200 text-[10px] uppercase font-bold">Mức 3 (Vận dụng cao)</div>
                <div className="text-sm font-black text-white mt-0.5">2 câu (2,0 đ - 20%)</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== TAB 1: PRACTICE MODE ===================== */}
        {activeTab === 'practice' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start no-print" id="interactive-practice-root">
            
            {/* SIDEBAR TRACKER */}
            <aside className="lg:col-span-4 bg-white border border-sky-100 rounded-2xl p-5 shadow-sm lg:sticky lg:top-24 max-h-[88vh] overflow-y-auto">
              
              {/* Timer card */}
              <div className="flex items-center justify-between p-3.5 bg-sky-50 rounded-xl border border-sky-100 mb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase">Thời gian làm bài</span>
                </div>
                <div className="text-xl font-black text-sky-700">
                  {formatTime(timerSeconds)}
                </div>
              </div>

              {/* GRADING RESULTS CARD */}
              {examGraded && (
                <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl text-center mb-4 shadow-lg shadow-emerald-100" id="exam-grading-score-card">
                  <div className="text-[11px] font-bold opacity-90 uppercase">KẾT QUẢ ĐẠT ĐƯỢC ({examLabelText})</div>
                  <div className="text-2xl sm:text-3xl font-black my-1.5">
                    {stats.earnedPoints.toFixed(1).replace('.', ',')} / 6,0 đ Khách quan
                  </div>
                  <p className="text-xs font-semibold bg-white/20 py-1 px-3 rounded-full inline-block">
                    {stats.earnedPoints >= 5.5 && 'Xuất sắc! Nắm rất vững kiến thức! 🎉'}
                    {stats.earnedPoints >= 4.0 && stats.earnedPoints < 5.5 && 'Rất tốt! Cố gắng phát huy nhé! ⭐'}
                    {stats.earnedPoints >= 3.0 && stats.earnedPoints < 4.0 && 'Đạt mức khá! Cần xem lại các câu sai! 👍'}
                    {stats.earnedPoints < 3.0 && 'Cố gắng ôn luyện kỹ hơn nhé! 💪'}
                  </p>
                  <p className="text-[11px] opacity-90 mt-2 block">
                    Đúng <strong className="font-bold">{stats.autoGradedCorrectCount}/{stats.autoGradedQuestionsCount}</strong> câu phần trắc nghiệm/ngắn (mỗi câu 0,5 đ). Phần tự luận (4,0 đ) có thang điểm và lời giải chi tiết ở bên dưới.
                  </p>
                  <button 
                    id="restart-exam-btn"
                    onClick={handleResetExam}
                    className="mt-3 w-full bg-white text-emerald-700 hover:bg-emerald-50 transition active:scale-95 font-bold py-2 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Làm lại bài kiểm tra
                  </button>
                </div>
              )}

              {/* Filter by Mạch kiến thức */}
              <div className="mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-1.5">Lọc theo Mạch kiến thức</span>
                <div className="grid grid-cols-1 gap-1 text-xs font-bold">
                  <button
                    onClick={() => setSelectedStrandFilter('all')}
                    className={`py-1.5 px-2.5 rounded-lg border text-left flex justify-between items-center transition cursor-pointer ${
                      selectedStrandFilter === 'all' 
                        ? 'bg-sky-600 text-white border-sky-600 shadow-xs' 
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>Tất cả mạch kiến thức</span>
                    <span className="text-[10px] opacity-80">{currentQuestions.length} câu</span>
                  </button>
                  <button
                    onClick={() => setSelectedStrandFilter('numbers')}
                    className={`py-1.5 px-2.5 rounded-lg border text-left flex justify-between items-center transition cursor-pointer ${
                      selectedStrandFilter === 'numbers' 
                        ? 'bg-sky-600 text-white border-sky-600 shadow-xs' 
                        : 'bg-sky-50/60 text-sky-800 border-sky-200 hover:bg-sky-100'
                    }`}
                  >
                    <span>Số và phép tính (55%)</span>
                    <span className="text-[10px] opacity-80">9 câu (5,5đ)</span>
                  </button>
                  <button
                    onClick={() => setSelectedStrandFilter('geometry')}
                    className={`py-1.5 px-2.5 rounded-lg border text-left flex justify-between items-center transition cursor-pointer ${
                      selectedStrandFilter === 'geometry' 
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' 
                        : 'bg-indigo-50/60 text-indigo-800 border-indigo-200 hover:bg-indigo-100'
                    }`}
                  >
                    <span>Hình học & Đo lường (35%)</span>
                    <span className="text-[10px] opacity-80">5 câu (3,5đ)</span>
                  </button>
                  <button
                    onClick={() => setSelectedStrandFilter('statistics')}
                    className={`py-1.5 px-2.5 rounded-lg border text-left flex justify-between items-center transition cursor-pointer ${
                      selectedStrandFilter === 'statistics' 
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs' 
                        : 'bg-emerald-50/60 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                    }`}
                  >
                    <span>Xác suất & Thống kê (10%)</span>
                    <span className="text-[10px] opacity-80">2 câu (1,0đ)</span>
                  </button>
                </div>
              </div>

              {/* Filter by Mức độ nhận thức */}
              <div className="mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-1.5">Lọc theo Mức độ</span>
                <div className="grid grid-cols-3 gap-1 text-xs font-bold">
                  <button
                    onClick={() => setSelectedLevelFilter(selectedLevelFilter === 'Mức 1' ? 'all' : 'Mức 1')}
                    className={`py-1.5 px-1 rounded-lg border text-center transition cursor-pointer ${
                      selectedLevelFilter === 'Mức 1' 
                        ? 'bg-emerald-600 text-white border-emerald-600' 
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                    }`}
                  >
                    Mức 1 (40%)
                  </button>
                  <button
                    onClick={() => setSelectedLevelFilter(selectedLevelFilter === 'Mức 2' ? 'all' : 'Mức 2')}
                    className={`py-1.5 px-1 rounded-lg border text-center transition cursor-pointer ${
                      selectedLevelFilter === 'Mức 2' 
                        ? 'bg-amber-600 text-white border-amber-600' 
                        : 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
                    }`}
                  >
                    Mức 2 (40%)
                  </button>
                  <button
                    onClick={() => setSelectedLevelFilter(selectedLevelFilter === 'Mức 3' ? 'all' : 'Mức 3')}
                    className={`py-1.5 px-1 rounded-lg border text-center transition cursor-pointer ${
                      selectedLevelFilter === 'Mức 3' 
                        ? 'bg-rose-600 text-white border-rose-600' 
                        : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
                    }`}
                  >
                    Mức 3 (20%)
                  </button>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-500 uppercase">Tiến trình làm bài</span>
                  <span className="text-xs font-black text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">{stats.progressPercent}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-sky-500 h-full transition-all duration-300"
                    style={{ width: `${stats.progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Quick Question Grid navigation */}
              <div className="mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-1.5">Bảng câu hỏi (16 câu)</span>
                <div className="grid grid-cols-4 gap-1.5">
                  {currentQuestions.map(q => {
                    const isAnswered = userAnswers[q.id] !== undefined;
                    let btnColor = 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100';

                    if (examGraded) {
                      if (q.type === 'mcq') {
                        btnColor = userAnswers[q.id] === (q as MCQQuestion).answer
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-rose-500 text-white border-rose-500';
                      } else if (q.type === 'written') {
                        btnColor = 'bg-indigo-50 text-indigo-700 border-indigo-200';
                      } else {
                        btnColor = isAnswered 
                          ? 'bg-emerald-600 text-white border-emerald-600' 
                          : 'bg-slate-100 text-slate-400 border-slate-200';
                      }
                    } else if (isAnswered) {
                      btnColor = 'bg-sky-600 text-white border-sky-600 font-bold';
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => scrollToQuestion(q.id)}
                        className={`p-2 rounded-xl text-xs font-bold border transition text-center cursor-pointer ${btnColor}`}
                      >
                        Câu {q.id}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action buttons in sidebar */}
              {!examGraded ? (
                <button
                  id="submit-exam-button"
                  onClick={handleSubmitExam}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm py-3 px-4 rounded-xl shadow-md shadow-emerald-200 transition active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" /> NỘP BÀI & CHẤM ĐIỂM
                </button>
              ) : (
                <button
                  onClick={handleResetExam}
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" /> Làm lại bài từ đầu
                </button>
              )}
            </aside>

            {/* MAIN QUESTIONS LIST */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* SECTION HEADER: PART 1 */}
              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-800 uppercase">
                    PHẦN 1: TRẮC NGHIỆM KHÁCH QUAN & TRẢ LỜI NGẮN ({examLabelText})
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    12 câu hỏi (Nhiều lựa chọn, Đúng - Sai, Nối cột, Điền số) • Kèm hình vẽ trực quan • Mỗi câu 0,5 đ • Tổng: 6,0 điểm
                  </p>
                </div>
                <span className="text-xs bg-sky-100 text-sky-800 font-black px-3 py-1.5 rounded-lg border border-sky-200">
                  6,0 điểm
                </span>
              </div>

              {/* RENDER QUESTIONS */}
              {filteredQuestions.map((q) => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const isExplanationOpen = openExplanations[q.id] || examGraded;

                return (
                  <div
                    key={q.id}
                    id={`practice-q-${q.id}`}
                    className={`bg-white border rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xs ${
                      examGraded 
                        ? 'border-slate-300' 
                        : isAnswered 
                          ? 'border-sky-300 ring-1 ring-sky-100' 
                          : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    
                    {/* QUESTION HEADER BADGES */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="bg-sky-700 text-white font-black text-xs px-2.5 py-1 rounded-lg">
                          Câu {q.id}
                        </span>
                        
                        {/* Cognitive Level Badge */}
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${
                          q.level === 'Mức 1' 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                            : q.level === 'Mức 2'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : 'bg-rose-50 text-rose-700 border-rose-200'
                        }`}>
                          {q.levelLabel}
                        </span>

                        {/* Knowledge Strand Badge */}
                        <span className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                          {q.strandLabel}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {q.type === 'written' && (q as WrittenQuestion).isOpenEnded && (
                          <span className="bg-amber-100 text-amber-800 text-[11px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-600" /> Toán mở tư duy
                          </span>
                        )}
                        <span className="text-xs font-bold text-slate-400">
                          {q.points} điểm
                        </span>
                      </div>
                    </div>

                    {/* QUESTION TEXT */}
                    <div className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed mb-3">
                      <span dangerouslySetInnerHTML={{ __html: q.text }} />
                    </div>

                    {/* GEOMETRY ILLUSTRATION DRAWING IF PRESENT */}
                    {q.illustration && (
                      <div className="my-3">
                        <GeometryIllustration illustration={q.illustration} />
                      </div>
                    )}

                    {/* ---------------- 1. MCQ OPTIONS ---------------- */}
                    {q.type === 'mcq' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {(q as MCQQuestion).options.map((opt, optIdx) => {
                          const isSelected = userAnswers[q.id] === optIdx;
                          const isCorrect = (q as MCQQuestion).answer === optIdx;

                          let optionStyle = 'border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 text-slate-700';

                          if (examGraded) {
                            if (isCorrect) {
                              optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-2 ring-emerald-200';
                            } else if (isSelected && !isCorrect) {
                              optionStyle = 'border-rose-500 bg-rose-50 text-rose-900 font-medium ring-2 ring-rose-200';
                            } else {
                              optionStyle = 'border-slate-100 opacity-60 text-slate-500';
                            }
                          } else if (isSelected) {
                            optionStyle = 'border-sky-600 bg-sky-50 text-sky-900 font-bold ring-2 ring-sky-200';
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              disabled={examGraded}
                              className={`p-3 rounded-xl border text-left text-xs sm:text-sm flex items-start gap-2.5 transition cursor-pointer ${optionStyle}`}
                            >
                              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 font-bold ${
                                isSelected ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'
                              }`}>
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="flex-1">{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* ---------------- 2. TRUE / FALSE ---------------- */}
                    {q.type === 'true_false' && (
                      <div className="space-y-2">
                        {(q as TrueFalseQuestion).items.map((item, itemIdx) => {
                          const currentVal = userAnswers[q.id]?.[itemIdx];
                          const isGradedCorrect = examGraded && currentVal === item.isTrue;
                          const isGradedWrong = examGraded && currentVal !== undefined && currentVal !== item.isTrue;

                          return (
                            <div 
                              key={itemIdx}
                              className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm ${
                                isGradedCorrect ? 'border-emerald-400 bg-emerald-50/40' : isGradedWrong ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200 bg-slate-50/50'
                              }`}
                            >
                              <span className="font-medium text-slate-800 flex-1">
                                {String.fromCharCode(97 + itemIdx)}) {item.statement}
                              </span>

                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => handleSelectTrueFalse(q.id, itemIdx, true)}
                                  disabled={examGraded}
                                  className={`px-3 py-1 rounded-lg font-bold text-xs border transition cursor-pointer ${
                                    currentVal === true 
                                      ? 'bg-emerald-600 text-white border-emerald-600' 
                                      : 'bg-white text-slate-700 border-slate-300 hover:bg-emerald-50'
                                  }`}
                                >
                                  Đúng (Đ)
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleSelectTrueFalse(q.id, itemIdx, false)}
                                  disabled={examGraded}
                                  className={`px-3 py-1 rounded-lg font-bold text-xs border transition cursor-pointer ${
                                    currentVal === false 
                                      ? 'bg-rose-600 text-white border-rose-600' 
                                      : 'bg-white text-slate-700 border-slate-300 hover:bg-rose-50'
                                  }`}
                                >
                                  Sai (S)
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* ---------------- 3. MATCHING ---------------- */}
                    {q.type === 'matching' && (
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          
                          {/* Cột A */}
                          <div className="space-y-2">
                            <span className="text-xs font-black text-slate-600 uppercase block">Cột A:</span>
                            {(q as MatchingQuestion).leftItems.map(left => {
                              const pairedRightId = userAnswers[q.id]?.[left.id];
                              const isSelected = matchingSelectedLeft[q.id] === left.id;
                              const pairedRight = (q as MatchingQuestion).rightItems.find(r => r.id === pairedRightId);
                              const isCorrectPair = examGraded && (q as MatchingQuestion).correctPairs[left.id] === pairedRightId;

                              return (
                                <div key={left.id} className="space-y-1">
                                  <button
                                    onClick={() => handleSelectMatchingLeft(q.id, left.id)}
                                    disabled={examGraded}
                                    className={`w-full p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition cursor-pointer ${
                                      isSelected 
                                        ? 'border-sky-600 bg-sky-50 text-sky-900 ring-2 ring-sky-200' 
                                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                                    }`}
                                  >
                                    <span>• {left.text}</span>
                                    <span className="text-[10px] text-sky-600 font-bold ml-2">
                                      {isSelected ? 'Đang chọn...' : pairedRightId ? 'Đã ghép nối' : 'Chọn để nối'}
                                    </span>
                                  </button>
                                  {pairedRight && (
                                    <div className={`text-[11px] font-bold px-3 py-1 rounded-lg ml-3 flex items-center gap-1.5 ${
                                      examGraded 
                                        ? isCorrectPair 
                                          ? 'bg-emerald-100 text-emerald-800' 
                                          : 'bg-rose-100 text-rose-800' 
                                        : 'bg-sky-100 text-sky-800'
                                    }`}>
                                      <span>➔ Ghép với: {pairedRight.text}</span>
                                      {examGraded && (isCorrectPair ? ' ✓' : ' ✗')}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* Cột B */}
                          <div className="space-y-2">
                            <span className="text-xs font-black text-slate-600 uppercase block">Cột B (Nhấn để ghép nối):</span>
                            {(q as MatchingQuestion).rightItems.map(right => {
                              const isTargetOfSelection = !!matchingSelectedLeft[q.id];

                              return (
                                <button
                                  key={right.id}
                                  onClick={() => handleSelectMatchingRight(q.id, right.id)}
                                  disabled={examGraded || !matchingSelectedLeft[q.id]}
                                  className={`w-full p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2 transition cursor-pointer ${
                                    isTargetOfSelection 
                                      ? 'border-amber-400 bg-amber-50/60 hover:bg-amber-100 text-amber-950 ring-1 ring-amber-300' 
                                      : 'border-slate-200 bg-white text-slate-700 opacity-90'
                                  }`}
                                >
                                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                                    {right.id}
                                  </span>
                                  <span>{right.text}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ---------------- 4. SHORT ANSWER ---------------- */}
                    {q.type === 'short_answer' && (
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-bold text-slate-600">Đáp số:</span>
                        <div className="relative flex items-center max-w-xs">
                          <input
                            type="text"
                            value={userAnswers[q.id] || ''}
                            onChange={(e) => handleShortAnswerChange(q.id, e.target.value)}
                            disabled={examGraded}
                            placeholder={(q as ShortAnswerQuestion).placeholder || 'Nhập câu trả lời...'}
                            className={`w-full px-3 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 font-bold ${
                              examGraded 
                                ? (q as ShortAnswerQuestion).correctAnswers.some(c => c.toLowerCase().replace(/\s+/g, '') === String(userAnswers[q.id] || '').trim().toLowerCase().replace(/\s+/g, ''))
                                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-200'
                                  : 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-200'
                                : 'border-slate-300 bg-white'
                            }`}
                          />
                          {(q as ShortAnswerQuestion).unit && (
                            <span className="ml-2 text-xs font-bold text-slate-600">
                              {(q as ShortAnswerQuestion).unit}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* ---------------- 5. WRITTEN QUESTION ---------------- */}
                    {q.type === 'written' && (
                      <div className="space-y-3">
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-600 leading-relaxed font-medium">
                          <div className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                            <Info className="w-3.5 h-3.5 text-sky-600" /> Hướng dẫn tự luận:
                          </div>
                          Học sinh trình bày bài làm và các bước tính toán vào vở bài tập. Nhấn nút <strong>"Xem hướng dẫn chấm & Biểu điểm"</strong> bên dưới để đối chiếu từng bước tính và thang điểm chi tiết.
                        </div>

                        {/* Written question step breakdown summary */}
                        {(q as WrittenQuestion).scoringCriteria && (
                          <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-3 text-xs">
                            <span className="font-bold text-sky-900 block mb-1">Tiêu chí chấm điểm từng bước:</span>
                            <div className="space-y-1">
                              {(q as WrittenQuestion).scoringCriteria?.map((step, idx) => (
                                <div key={idx} className="flex justify-between text-slate-700">
                                  <span>• {step.step}</span>
                                  <span className="font-bold text-sky-700 ml-2">+{step.points} đ</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* EXPLANATION / SOLUTION ACCORDION */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <button
                        onClick={() => toggleExplanation(q.id)}
                        className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 cursor-pointer"
                      >
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                        <span>{isExplanationOpen ? 'Thu gọn lời giải chi tiết' : 'Xem lời giải chi tiết & Đáp án'}</span>
                        {isExplanationOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {isExplanationOpen && (
                        <div className="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                          <div className="font-bold text-slate-900 flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Lời giải & Hướng dẫn chấm chi tiết:</span>
                          </div>
                          <div 
                            className="bg-white p-3 rounded-lg border border-slate-200 font-sans"
                            dangerouslySetInnerHTML={{ __html: q.explanation }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* BOTTOM SUBMIT BUTTON IN PRACTICE */}
              {!examGraded && (
                <div className="text-center pt-4 pb-8">
                  <button
                    onClick={handleSubmitExam}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-base py-3.5 px-8 rounded-2xl shadow-lg shadow-emerald-200 transition active:scale-95 cursor-pointer inline-flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-6 h-6" /> HOÀN THÀNH & NỘP BÀI KIỂM TRA
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===================== TAB 2: PRINT & PDF MODE ===================== */}
        {activeTab === 'print' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 max-w-5xl mx-auto" id="printable-exam-container">
            
            {/* PRINT CONTROLS TOOLBAR (DO NOT PRINT) */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl mb-8 no-print">
              <div className="flex items-center gap-2">
                <Printer className="w-5 h-5 text-indigo-600" />
                <div>
                  <h3 className="font-black text-sm text-slate-800">Chế độ Xem Bản In & Xuất PDF ({examLabelText})</h3>
                  <p className="text-xs text-slate-500 font-medium">Thời gian: 40 phút • Tự động định dạng trang in chuẩn mẫu giáo viên tiểu học</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-xs hover:bg-slate-50">
                  <input 
                    type="checkbox" 
                    checked={printShowMatrix}
                    onChange={(e) => setPrintShowMatrix(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer" 
                    id="print-show-matrix-checkbox"
                  />
                  <span className="text-xs font-bold text-slate-700">In Ma trận đề thi</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-xs hover:bg-slate-50">
                  <input 
                    type="checkbox" 
                    checked={printShowAnswers}
                    onChange={(e) => setPrintShowAnswers(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer" 
                    id="print-show-answers-checkbox"
                  />
                  <span className="text-xs font-bold text-slate-700">In Đáp án & Hướng dẫn chấm ở dưới cùng</span>
                </label>
                
                <button 
                  onClick={() => window.print()}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-md shadow-indigo-100 transition active:scale-95 cursor-pointer"
                  id="trigger-print-btn"
                >
                  <Printer className="w-4 h-4" /> Bắt đầu In / Lưu PDF
                </button>
              </div>
            </div>

            {/* PRINT BODY SHEET */}
            <div id="printable-sheet" className="text-slate-900 leading-relaxed p-1 md:p-4">
              
              {/* Vietnamese Highschool/Elementary Layout Header */}
              <div className="grid grid-cols-2 border-b-2 border-double border-slate-900 pb-4 mb-6">
                <div className="text-center">
                  <h3 className="text-xs font-bold uppercase text-slate-800">TRƯỜNG TIỂU HỌC: .......................................</h3>
                  <h3 className="text-xs font-black uppercase text-indigo-900 mt-1">GIÁO VIÊN RA ĐỀ: VŨ THỊ THÚY HÀ - NHẠC A</h3>
                  <h3 className="text-xs font-bold uppercase text-slate-700 mt-1">LỚP: 3...... &nbsp;&nbsp; SỐ BÁO DANH: .....................</h3>
                </div>
                <div className="text-center">
                  <h2 className="text-sm font-black uppercase text-slate-900">
                    {semester === 'ky1' ? `ĐỀ KIỂM TRA ĐỊNH KỲ CUỐI HỌC KÌ I (${examLabelText})` : `ĐỀ KIỂM TRA ĐỊNH KỲ CUỐI HỌC KÌ II (${examLabelText})`}
                  </h2>
                  <p className="text-xs mt-1 text-slate-700 font-bold">MÔN: TOÁN - LỚP 3</p>
                  <p className="text-xs font-medium mt-0.5 text-slate-600">Thời gian làm bài: 40 phút (Thang điểm 10)</p>
                  <p className="text-[11px] font-bold text-indigo-800 mt-0.5 italic">Bản quyền đề thi © GV: Vũ Thị Thúy Hà - Nhạc A</p>
                </div>
              </div>

              {/* Personal Student Info Box */}
              <div className="border border-slate-400 rounded-lg p-3 text-center mb-6 text-sm flex justify-around">
                <span>Họ và tên học sinh: ..........................................................................</span>
                <span className="font-bold">Điểm số: .................. / 10</span>
              </div>

              {/* MA TRẬN ĐỀ THI (OPTIONALLY PRINTED) */}
              {printShowMatrix && (
                <div className="mb-6 avoided-break-block">
                  <div className="text-center font-bold text-xs uppercase mb-2 text-slate-800 flex items-center justify-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-indigo-600 no-print" /> MA TRẬN ĐỀ KIỂM TRA MÔN TOÁN LỚP 3 ({semester === 'ky1' ? 'HỌC KÌ I' : 'HỌC KÌ II'} - {examLabelText} - THEO THÔNG TƯ 27)
                  </div>
                  <table className="w-full border-collapse border border-slate-800 text-center text-xs mb-4">
                    <thead>
                      <tr className="bg-slate-100 font-bold">
                        <th className="border border-slate-800 p-1.5" rowSpan={2}>Mạch kiến thức</th>
                        <th className="border border-slate-800 p-1.5" colSpan={2}>Mức 1 (Nhận biết)</th>
                        <th className="border border-slate-800 p-1.5" colSpan={2}>Mức 2 (Thông hiểu)</th>
                        <th className="border border-slate-800 p-1.5" colSpan={2}>Mức 3 (Vận dụng cao)</th>
                        <th className="border border-slate-800 p-1.5" colSpan={2}>Tổng cộng</th>
                      </tr>
                      <tr className="bg-slate-50 font-bold text-[11px]">
                        <th className="border border-slate-800 p-1">Số câu</th>
                        <th className="border border-slate-800 p-1">Điểm</th>
                        <th className="border border-slate-800 p-1">Số câu</th>
                        <th className="border border-slate-800 p-1">Điểm</th>
                        <th className="border border-slate-800 p-1">Số câu</th>
                        <th className="border border-slate-800 p-1">Điểm</th>
                        <th className="border border-slate-800 p-1">Số câu</th>
                        <th className="border border-slate-800 p-1">Điểm</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-800 p-1.5 text-left font-medium">1. Số và phép tính (55% - 65%)</td>
                        <td className="border border-slate-800 p-1.5">4</td>
                        <td className="border border-slate-800 p-1.5">2,5 đ</td>
                        <td className="border border-slate-800 p-1.5">5</td>
                        <td className="border border-slate-800 p-1.5">3,0 đ</td>
                        <td className="border border-slate-800 p-1.5">0</td>
                        <td className="border border-slate-800 p-1.5">0 đ</td>
                        <td className="border border-slate-800 p-1.5 font-bold">9 câu</td>
                        <td className="border border-slate-800 p-1.5 font-bold">5,5 đ (55%)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-800 p-1.5 text-left font-medium">2. Hình học và đo lường (25% - 35%)</td>
                        <td className="border border-slate-800 p-1.5">2</td>
                        <td className="border border-slate-800 p-1.5">1,0 đ</td>
                        <td className="border border-slate-800 p-1.5">1</td>
                        <td className="border border-slate-800 p-1.5">0,5 đ</td>
                        <td className="border border-slate-800 p-1.5">2</td>
                        <td className="border border-slate-800 p-1.5">2,0 đ</td>
                        <td className="border border-slate-800 p-1.5 font-bold">5 câu</td>
                        <td className="border border-slate-800 p-1.5 font-bold">3,5 đ (35%)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-800 p-1.5 text-left font-medium">3. Xác suất và thống kê (khoảng 10%)</td>
                        <td className="border border-slate-800 p-1.5">1</td>
                        <td className="border border-slate-800 p-1.5">0,5 đ</td>
                        <td className="border border-slate-800 p-1.5">1</td>
                        <td className="border border-slate-800 p-1.5">0,5 đ</td>
                        <td className="border border-slate-800 p-1.5">0</td>
                        <td className="border border-slate-800 p-1.5">0 đ</td>
                        <td className="border border-slate-800 p-1.5 font-bold">2 câu</td>
                        <td className="border border-slate-800 p-1.5 font-bold">1,0 đ (10%)</td>
                      </tr>
                      <tr className="bg-slate-100 font-bold">
                        <td className="border border-slate-800 p-1.5 text-left">Tổng cộng toàn bài</td>
                        <td className="border border-slate-800 p-1.5">{matrixSummary.levels.m1.count} câu</td>
                        <td className="border border-slate-800 p-1.5">{matrixSummary.levels.m1.points.toFixed(1).replace('.', ',')} đ (40%)</td>
                        <td className="border border-slate-800 p-1.5">{matrixSummary.levels.m2.count} câu</td>
                        <td className="border border-slate-800 p-1.5">{matrixSummary.levels.m2.points.toFixed(1).replace('.', ',')} đ (40%)</td>
                        <td className="border border-slate-800 p-1.5">{matrixSummary.levels.m3.count} câu</td>
                        <td className="border border-slate-800 p-1.5">{matrixSummary.levels.m3.points.toFixed(1).replace('.', ',')} đ (20%)</td>
                        <td className="border border-slate-800 p-1.5 text-indigo-700 font-black">16 câu</td>
                        <td className="border border-slate-800 p-1.5 text-indigo-700 font-black">10,0 đ (100%)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* LIST OF QUESTIONS IN PRINT VIEW */}
              <div className="space-y-6 text-sm" id="printable-questions-list">
                
                <div className="font-bold text-sm border-b-2 border-slate-900 pb-1 mt-6 mb-4 text-slate-900 flex justify-between items-center">
                  <span>PHẦN I: TRẮC NGHIỆM KHÁCH QUAN & TRẢ LỜI NGẮN (6,0 Điểm)</span>
                  <span className="text-xs font-normal italic">(Khoanh tròn hoặc điền câu trả lời thích hợp)</span>
                </div>

                {currentQuestions.filter(q => q.type !== 'written').map((q) => {
                  return (
                    <div key={q.id} className="mb-4 avoided-break-block">
                      <div className="text-slate-950 flex items-start">
                        <span className="mr-1.5 shrink-0 font-bold">
                          Câu {q.id} <span className="font-semibold text-slate-700">[{q.levelLabel} - {q.points}đ]:</span>
                        </span>
                        <span className="font-medium text-slate-900" dangerouslySetInnerHTML={{ __html: q.text }} />
                      </div>

                      {/* GEOMETRY ILLUSTRATION IN PRINT VIEW */}
                      {q.illustration && (
                        <div className="my-2 max-w-sm mx-auto">
                          <GeometryIllustration illustration={q.illustration} isPrintVersion={true} />
                        </div>
                      )}

                      {/* MCQ in print */}
                      {q.type === 'mcq' && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1.5 pl-6 text-xs">
                          {(q as MCQQuestion).options.map((opt, oIdx) => (
                            <div key={oIdx} className="text-slate-800">
                              <span className="font-bold mr-1">{String.fromCharCode(65 + oIdx)}.</span> {opt}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* True / False in print */}
                      {q.type === 'true_false' && (
                        <div className="space-y-1 mt-2 pl-6 text-xs">
                          {(q as TrueFalseQuestion).items.map((item, itIdx) => (
                            <div key={itIdx} className="flex items-center justify-between border-b border-dotted border-slate-300 pb-1">
                              <span>{String.fromCharCode(97 + itIdx)}) {item.statement}</span>
                              <span className="font-bold text-slate-500 mr-4">[ &nbsp;&nbsp;&nbsp;&nbsp; ]</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Matching in print */}
                      {q.type === 'matching' && (
                        <div className="grid grid-cols-2 gap-4 mt-2 pl-6 text-xs">
                          <div className="space-y-1">
                            <span className="font-bold">Cột A:</span>
                            {(q as MatchingQuestion).leftItems.map(l => (
                              <div key={l.id}>• ({l.id}) {l.text}</div>
                            ))}
                          </div>
                          <div className="space-y-1">
                            <span className="font-bold">Cột B:</span>
                            {(q as MatchingQuestion).rightItems.map(r => (
                              <div key={r.id}>• ({r.id}) {r.text}</div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Short answer in print */}
                      {q.type === 'short_answer' && (
                        <div className="mt-1.5 pl-6 text-xs">
                          <span>Đáp số: .................................................... {(q as ShortAnswerQuestion).unit}</span>
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="font-bold text-sm border-b-2 border-slate-900 pb-1 mt-8 mb-4 text-slate-900 flex justify-between items-center">
                  <span>PHẦN II: TỰ LUẬN (4,0 Điểm)</span>
                  <span className="text-xs font-normal italic">(Học sinh trình bày bài làm và phép tính chi tiết vào phần giấy dưới đây)</span>
                </div>

                {currentQuestions.filter(q => q.type === 'written').map((q) => {
                  return (
                    <div key={q.id} className="mb-6 avoided-break-block">
                      <div className="text-slate-950 flex items-start mb-2">
                        <span className="mr-1.5 shrink-0 font-bold">
                          Câu {q.id} <span className="font-semibold text-slate-700">[{q.levelLabel} - {q.points}đ]:</span>
                        </span>
                        <span className="font-medium text-slate-900" dangerouslySetInnerHTML={{ __html: q.text }} />
                      </div>

                      {/* Dòng kẻ chấm cho học sinh làm bài */}
                      <div className="border border-slate-300 rounded-lg p-3 bg-white text-slate-400 space-y-3 min-h-[100px] text-xs">
                        <div className="border-b border-dotted border-slate-300 pb-2">Bài giải:</div>
                        <div className="border-b border-dotted border-slate-300 pb-2">&nbsp;</div>
                        <div className="border-b border-dotted border-slate-300 pb-2">&nbsp;</div>
                        <div className="border-b border-dotted border-slate-300 pb-2">&nbsp;</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dấu bản quyền cuối đề kiểm tra bản in */}
              <div className="mt-6 pt-4 border-t border-slate-400 text-center text-xs font-bold text-slate-800 avoided-break-block">
                <p>--- HẾT ---</p>
                <p className="text-[11px] text-slate-600 font-semibold mt-1">
                  (Cán bộ coi kiểm tra không giải thích gì thêm • Đề thi bám sát chương trình GDPT 2018)
                </p>
                <p className="text-[11px] text-indigo-900 font-bold mt-1">
                  © BẢN QUYỀN ĐỀ THI THUỘC VỀ GIÁO VIÊN: VŨ THỊ THÚY HÀ - NHẠC A
                </p>
              </div>

              {/* PHẦN ĐÁP ÁN & HƯỚNG DẪN CHẤM Ở DƯỚI CÙNG TRANG IN */}
              {printShowAnswers && (
                <div className="mt-12 pt-8 border-t-4 border-double border-slate-800 print-break" id="printable-answers-section">
                  <GradingGuide isPrintVersion={true} semester={semester} examId={examId} />
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===================== TAB 3: GRADING GUIDE & MATRIX ===================== */}
        {activeTab === 'guide' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 max-w-5xl mx-auto" id="grading-guide-tab-content">
            <GradingGuide semester={semester} examId={examId} />
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6 text-center text-xs text-slate-500 no-print">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full text-amber-900 font-bold mb-2 shadow-xs">
          <Award className="w-4 h-4 text-amber-600" />
          <span>Bản quyền nội dung & Biên soạn: Giáo viên Vũ Thị Thúy Hà - Nhạc A</span>
        </div>
        <p className="font-bold text-slate-700">BỘ ĐỀ KIỂM TRA ĐỊNH KỲ MÔN TOÁN LỚP 3 - CHUẨN THÔNG TƯ 27/2020/TT-BGDĐT</p>
        <p className="mt-1">Tương thích toàn diện SGK Toán 3 - Bộ sách Kết nối tri thức với cuộc sống • Bản quyền chuyên môn © Giáo viên Vũ Thị Thúy Hà - Nhạc A</p>
      </footer>
    </div>
  );
}
