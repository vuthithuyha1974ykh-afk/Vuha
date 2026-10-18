import React from 'react';
import { IllustrationData } from '../types';

interface GeometryIllustrationProps {
  illustration: IllustrationData;
  isPrintVersion?: boolean;
}

export const GeometryIllustration: React.FC<GeometryIllustrationProps> = ({ illustration, isPrintVersion = false }) => {
  const { type, caption, data } = illustration;

  // Render specific SVG based on type
  const renderSvg = () => {
    switch (type) {
      // 1. Hình tròn tâm O, bán kính và đường kính
      case 'circle_radius_diameter': {
        const radiusText = data?.radiusText || '9 cm';
        return (
          <svg viewBox="0 0 280 180" className="w-full max-w-[260px] h-auto mx-auto select-none" aria-label="Hình tròn tâm O">
            {/* Vòng tròn */}
            <circle cx="140" cy="90" r="65" fill="#f0fdf4" stroke="#047857" strokeWidth="2.5" className="no-print:fill-emerald-50 print:fill-none print:stroke-black" />
            
            {/* Tâm O */}
            <circle cx="140" cy="90" r="4" fill="#0f172a" className="print:fill-black" />
            <text x="135" y="82" fontSize="13" fontWeight="bold" fill="#0f172a" className="print:fill-black">O</text>

            {/* Bán kính OA */}
            <line x1="140" y1="90" x2="205" y2="90" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 2" className="print:stroke-black" />
            <circle cx="205" cy="90" r="3.5" fill="#0284c7" className="print:fill-black" />
            <text x="210" y="94" fontSize="12" fontWeight="bold" fill="#0284c7" className="print:fill-black">A</text>
            <text x="160" y="84" fontSize="11" fontWeight="bold" fill="#0369a1" className="print:fill-black">{radiusText}</text>

            {/* Bán kính OB sang trái tạo đường kính */}
            <line x1="140" y1="90" x2="75" y2="90" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" className="print:stroke-black" />
            <circle cx="75" cy="90" r="3.5" fill="#64748b" className="print:fill-black" />
            <text x="62" y="94" fontSize="12" fontWeight="bold" fill="#64748b" className="print:fill-black">B</text>

            {/* Kí hiệu đường kính AB */}
            <path d="M 75 105 L 205 105" stroke="#475569" strokeWidth="1" markerEnd="url(#arrow)" className="print:stroke-black" />
            <line x1="75" y1="98" x2="75" y2="112" stroke="#475569" strokeWidth="1" className="print:stroke-black" />
            <line x1="205" y1="98" x2="205" y2="112" stroke="#475569" strokeWidth="1" className="print:stroke-black" />
            <text x="122" y="122" fontSize="11" fontWeight="600" fill="#475569" className="print:fill-black">d = ? cm</text>
          </svg>
        );
      }

      // 2. Thước kẻ đo chiếc bút sáp (4 cm 5 mm)
      case 'ruler_crayon_measure': {
        return (
          <svg viewBox="0 0 340 140" className="w-full max-w-[320px] h-auto mx-auto select-none" aria-label="Thước kẻ đo bút chì">
            {/* Chiếc bút sáp */}
            <g transform="translate(40, 20)">
              {/* Thân bút (từ 0 đến 4.5cm -> tỉ lệ: 1cm = 40px -> 4.5cm = 180px) */}
              <rect x="0" y="15" width="150" height="18" rx="3" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" className="print:fill-slate-200 print:stroke-black" />
              <line x1="0" y1="24" x2="150" y2="24" stroke="#d97706" strokeWidth="1" />
              <text x="50" y="28" fontSize="10" fontWeight="bold" fill="#78350f" className="print:fill-black">BÚT SÁP MÀU</text>
              {/* Đầu ngòi nhọn (từ 150 đến 180) */}
              <polygon points="150,15 180,24 150,33" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" className="print:fill-slate-300 print:stroke-black" />
              <polygon points="168,20.4 180,24 168,27.6" fill="#b45309" className="print:fill-black" />
              {/* Vạch gióng đo đầu & đuôi */}
              <line x1="0" y1="10" x2="0" y2="55" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" className="print:stroke-black" />
              <line x1="180" y1="10" x2="180" y2="55" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" className="print:stroke-black" />
            </g>

            {/* Cây thước kẻ (từ 0cm đến 6cm) */}
            <g transform="translate(40, 75)">
              <rect x="0" y="0" width="260" height="40" fill="#f8fafc" stroke="#334155" strokeWidth="2" rx="2" className="print:fill-white print:stroke-black" />
              
              {/* Vạch cm và số */}
              {[0, 1, 2, 3, 4, 5, 6].map((cm) => {
                const x = cm * 40;
                return (
                  <g key={cm}>
                    <line x1={x} y1="0" x2={x} y2="16" stroke="#0f172a" strokeWidth="1.5" className="print:stroke-black" />
                    <text x={x - (cm > 0 ? 3 : 0)} y="30" fontSize="11" fontWeight="bold" fill="#0f172a" className="print:fill-black">
                      {cm}
                    </text>
                    {/* Vạch nửa cm (5mm) */}
                    {cm < 6 && (
                      <line x1={x + 20} y1="0" x2={x + 20} y2="10" stroke="#475569" strokeWidth="1.2" className="print:stroke-black" />
                    )}
                    {/* Vạch 1mm */}
                    {cm < 6 && [4, 8, 12, 16, 24, 28, 32, 36].map((mm) => (
                      <line key={mm} x1={x + mm} y1="0" x2={x + mm} y2="6" stroke="#94a3b8" strokeWidth="0.8" className="print:stroke-black" />
                    ))}
                  </g>
                );
              })}
              <text x="235" y="30" fontSize="10" fontWeight="bold" fill="#64748b" className="print:fill-black">cm</text>
            </g>
          </svg>
        );
      }

      // 3. Khối lập phương 3D
      case 'cube_3d': {
        return (
          <svg viewBox="0 0 240 180" className="w-full max-w-[220px] h-auto mx-auto select-none" aria-label="Khối lập phương">
            {/* Mặt trước ABCD */}
            <polygon points="50,70 130,70 130,150 50,150" fill="#e0e7ff" stroke="#4338ca" strokeWidth="2" className="print:fill-none print:stroke-black" />
            
            {/* Mặt trên ABFE */}
            <polygon points="50,70 90,30 170,30 130,70" fill="#c7d2fe" stroke="#4338ca" strokeWidth="2" className="print:fill-none print:stroke-black" />
            
            {/* Mặt bên phải BCGF */}
            <polygon points="130,70 170,30 170,110 130,150" fill="#a5b4fc" stroke="#4338ca" strokeWidth="2" className="print:fill-none print:stroke-black" />

            {/* Các nét đứt khuất phía sau */}
            <line x1="50" y1="150" x2="90" y2="110" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4 3" className="print:stroke-black" />
            <line x1="90" y1="30" x2="90" y2="110" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4 3" className="print:stroke-black" />
            <line x1="90" y1="110" x2="170" y2="110" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4 3" className="print:stroke-black" />

            {/* Các đỉnh A, B, C, D, ... */}
            <circle cx="50" cy="70" r="3.5" fill="#1e1b4b" className="print:fill-black" />
            <text x="36" y="70" fontSize="11" fontWeight="bold" fill="#1e1b4b" className="print:fill-black">A</text>

            <circle cx="130" cy="70" r="3.5" fill="#1e1b4b" className="print:fill-black" />
            <text x="135" y="75" fontSize="11" fontWeight="bold" fill="#1e1b4b" className="print:fill-black">B</text>

            <circle cx="130" cy="150" r="3.5" fill="#1e1b4b" className="print:fill-black" />
            <text x="135" y="160" fontSize="11" fontWeight="bold" fill="#1e1b4b" className="print:fill-black">C</text>

            <circle cx="50" cy="150" r="3.5" fill="#1e1b4b" className="print:fill-black" />
            <text x="36" y="158" fontSize="11" fontWeight="bold" fill="#1e1b4b" className="print:fill-black">D</text>

            <circle cx="90" cy="30" r="3.5" fill="#1e1b4b" className="print:fill-black" />
            <text x="85" y="24" fontSize="11" fontWeight="bold" fill="#1e1b4b" className="print:fill-black">M</text>

            <circle cx="170" cy="30" r="3.5" fill="#1e1b4b" className="print:fill-black" />
            <text x="175" y="30" fontSize="11" fontWeight="bold" fill="#1e1b4b" className="print:fill-black">N</text>

            <circle cx="170" cy="110" r="3.5" fill="#1e1b4b" className="print:fill-black" />
            <text x="175" y="115" fontSize="11" fontWeight="bold" fill="#1e1b4b" className="print:fill-black">P</text>
          </svg>
        );
      }

      // 4. Bốn hình A, B, C, D để tìm hình tô màu 1/3 số ô vuông
      case 'fraction_colored_grid': {
        return (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-2 text-center select-none">
            {/* Hình A: 6 ô, tô 3 ô (tức 1/2) */}
            <div className="border border-slate-200 rounded-xl p-2 bg-slate-50 flex flex-col items-center">
              <svg viewBox="0 0 90 60" className="w-20 h-auto">
                <rect x="0" y="0" width="90" height="60" fill="#fff" stroke="#334155" strokeWidth="1.5" />
                {/* 6 ô vuông (3 cột x 2 hàng) */}
                <line x1="30" y1="0" x2="30" y2="60" stroke="#334155" strokeWidth="1.5" />
                <line x1="60" y1="0" x2="60" y2="60" stroke="#334155" strokeWidth="1.5" />
                <line x1="0" y1="30" x2="90" y2="30" stroke="#334155" strokeWidth="1.5" />
                {/* Tô màu 3 ô */}
                <rect x="0" y="0" width="30" height="30" fill="#0284c7" className="print:fill-slate-400" />
                <rect x="30" y="0" width="30" height="30" fill="#0284c7" className="print:fill-slate-400" />
                <rect x="60" y="0" width="30" height="30" fill="#0284c7" className="print:fill-slate-400" />
              </svg>
              <span className="font-bold text-xs mt-1.5 text-slate-800">Hình A</span>
            </div>

            {/* Hình B: 6 ô, tô 2 ô (tức 2/6 = 1/3) -> ĐÚNG */}
            <div className="border border-slate-200 rounded-xl p-2 bg-slate-50 flex flex-col items-center">
              <svg viewBox="0 0 90 60" className="w-20 h-auto">
                <rect x="0" y="0" width="90" height="60" fill="#fff" stroke="#334155" strokeWidth="1.5" />
                <line x1="30" y1="0" x2="30" y2="60" stroke="#334155" strokeWidth="1.5" />
                <line x1="60" y1="0" x2="60" y2="60" stroke="#334155" strokeWidth="1.5" />
                <line x1="0" y1="30" x2="90" y2="30" stroke="#334155" strokeWidth="1.5" />
                {/* Tô màu 2 ô */}
                <rect x="0" y="0" width="30" height="30" fill="#0284c7" className="print:fill-slate-400" />
                <rect x="30" y="30" width="30" height="30" fill="#0284c7" className="print:fill-slate-400" />
              </svg>
              <span className="font-bold text-xs mt-1.5 text-slate-800">Hình B</span>
            </div>

            {/* Hình C: 6 ô, tô 1 ô (1/6) */}
            <div className="border border-slate-200 rounded-xl p-2 bg-slate-50 flex flex-col items-center">
              <svg viewBox="0 0 90 60" className="w-20 h-auto">
                <rect x="0" y="0" width="90" height="60" fill="#fff" stroke="#334155" strokeWidth="1.5" />
                <line x1="30" y1="0" x2="30" y2="60" stroke="#334155" strokeWidth="1.5" />
                <line x1="60" y1="0" x2="60" y2="60" stroke="#334155" strokeWidth="1.5" />
                <line x1="0" y1="30" x2="90" y2="30" stroke="#334155" strokeWidth="1.5" />
                {/* Tô màu 1 ô */}
                <rect x="0" y="0" width="30" height="30" fill="#0284c7" className="print:fill-slate-400" />
              </svg>
              <span className="font-bold text-xs mt-1.5 text-slate-800">Hình C</span>
            </div>

            {/* Hình D: 6 ô, tô 4 ô (4/6 = 2/3) */}
            <div className="border border-slate-200 rounded-xl p-2 bg-slate-50 flex flex-col items-center">
              <svg viewBox="0 0 90 60" className="w-20 h-auto">
                <rect x="0" y="0" width="90" height="60" fill="#fff" stroke="#334155" strokeWidth="1.5" />
                <line x1="30" y1="0" x2="30" y2="60" stroke="#334155" strokeWidth="1.5" />
                <line x1="60" y1="0" x2="60" y2="60" stroke="#334155" strokeWidth="1.5" />
                <line x1="0" y1="30" x2="90" y2="30" stroke="#334155" strokeWidth="1.5" />
                {/* Tô màu 4 ô */}
                <rect x="0" y="0" width="30" height="30" fill="#0284c7" className="print:fill-slate-400" />
                <rect x="30" y="0" width="30" height="30" fill="#0284c7" className="print:fill-slate-400" />
                <rect x="0" y="30" width="30" height="30" fill="#0284c7" className="print:fill-slate-400" />
                <rect x="60" y="30" width="30" height="30" fill="#0284c7" className="print:fill-slate-400" />
              </svg>
              <span className="font-bold text-xs mt-1.5 text-slate-800">Hình D</span>
            </div>
          </div>
        );
      }

      // 5. Hình đa giác / tứ giác có góc vuông và góc không vuông
      case 'right_angles_shape': {
        return (
          <svg viewBox="0 0 260 160" className="w-full max-w-[240px] h-auto mx-auto select-none" aria-label="Hình nhận biết góc vuông">
            {/* Hình thang vuông ABCD với góc vuông tại A và D */}
            <polygon points="50,30 180,30 220,130 50,130" fill="#fdf4ff" stroke="#a21caf" strokeWidth="2.5" className="print:fill-none print:stroke-black" />
            
            {/* Kí hiệu góc vuông tại đỉnh A (50,30) */}
            <path d="M 50,45 L 65,45 L 65,30" fill="none" stroke="#ef4444" strokeWidth="1.5" className="print:stroke-black" />
            
            {/* Kí hiệu góc vuông tại đỉnh D (50,130) */}
            <path d="M 50,115 L 65,115 L 65,130" fill="none" stroke="#ef4444" strokeWidth="1.5" className="print:stroke-black" />

            {/* Các đỉnh A, B, C, D */}
            <text x="36" y="30" fontSize="13" fontWeight="bold" fill="#701a75" className="print:fill-black">A</text>
            <text x="185" y="26" fontSize="13" fontWeight="bold" fill="#701a75" className="print:fill-black">B</text>
            <text x="226" y="138" fontSize="13" fontWeight="bold" fill="#701a75" className="print:fill-black">C</text>
            <text x="34" y="140" fontSize="13" fontWeight="bold" fill="#701a75" className="print:fill-black">D</text>

            <text x="100" y="85" fontSize="11" fontWeight="600" fill="#86198f" className="print:fill-black">Hình tứ giác ABCD</text>
          </svg>
        );
      }

      // 6. Đoạn thẳng MN có trung điểm I
      case 'line_midpoint': {
        const totalLength = data?.totalLength || '12 cm';
        return (
          <svg viewBox="0 0 320 110" className="w-full max-w-[300px] h-auto mx-auto select-none" aria-label="Đoạn thẳng MN có trung điểm I">
            {/* Đoạn thẳng chính MN */}
            <line x1="40" y1="50" x2="280" y2="50" stroke="#0f172a" strokeWidth="3" className="print:stroke-black" />
            
            {/* Điểm M */}
            <circle cx="40" cy="50" r="4.5" fill="#0284c7" className="print:fill-black" />
            <text x="34" y="35" fontSize="13" fontWeight="bold" fill="#0284c7" className="print:fill-black">M</text>

            {/* Điểm I (Trung điểm) */}
            <circle cx="160" cy="50" r="4.5" fill="#ea580c" className="print:fill-black" />
            <text x="157" y="35" fontSize="13" fontWeight="bold" fill="#ea580c" className="print:fill-black">I</text>

            {/* Điểm N */}
            <circle cx="280" cy="50" r="4.5" fill="#0284c7" className="print:fill-black" />
            <text x="276" y="35" fontSize="13" fontWeight="bold" fill="#0284c7" className="print:fill-black">N</text>

            {/* Kí hiệu 2 đoạn MI = IN bằng 2 gạch chéo */}
            <line x1="97" y1="43" x2="103" y2="57" stroke="#ea580c" strokeWidth="1.8" className="print:stroke-black" />
            <line x1="217" y1="43" x2="223" y2="57" stroke="#ea580c" strokeWidth="1.8" className="print:stroke-black" />

            {/* Kích thước tổng MN = 12 cm */}
            <path d="M 40 70 L 280 70" stroke="#64748b" strokeWidth="1" className="print:stroke-black" />
            <line x1="40" y1="65" x2="40" y2="75" stroke="#64748b" strokeWidth="1" className="print:stroke-black" />
            <line x1="280" y1="65" x2="280" y2="75" stroke="#64748b" strokeWidth="1" className="print:stroke-black" />
            <text x="140" y="86" fontSize="11" fontWeight="bold" fill="#475569" className="print:fill-black">MN = {totalLength}</text>
          </svg>
        );
      }

      // 7. Đếm hình tam giác và hình tứ giác
      case 'triangle_quadrilateral_count': {
        return (
          <svg viewBox="0 0 260 160" className="w-full max-w-[240px] h-auto mx-auto select-none" aria-label="Hình đếm tam giác tứ giác">
            {/* Tam giác lớn ABC */}
            <polygon points="130,20 40,130 220,130" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2.5" className="print:fill-none print:stroke-black" />
            
            {/* Đường hạ từ đỉnh A xuống đoạn BC tại điểm D */}
            <line x1="130" y1="20" x2="130" y2="130" stroke="#0284c7" strokeWidth="2" className="print:stroke-black" />
            
            {/* Đường ngang MN cắt nửa trên tam giác */}
            <line x1="85" y1="75" x2="175" y2="75" stroke="#0284c7" strokeWidth="2" className="print:stroke-black" />

            {/* Các đỉnh và giao điểm */}
            <text x="125" y="14" fontSize="12" fontWeight="bold" fill="#0f172a" className="print:fill-black">A</text>
            <text x="24" y="136" fontSize="12" fontWeight="bold" fill="#0f172a" className="print:fill-black">B</text>
            <text x="127" y="146" fontSize="12" fontWeight="bold" fill="#0f172a" className="print:fill-black">D</text>
            <text x="226" y="136" fontSize="12" fontWeight="bold" fill="#0f172a" className="print:fill-black">C</text>
            <text x="68" y="76" fontSize="12" fontWeight="bold" fill="#0f172a" className="print:fill-black">M</text>
            <text x="180" y="76" fontSize="12" fontWeight="bold" fill="#0f172a" className="print:fill-black">N</text>
            <text x="134" y="70" fontSize="11" fontWeight="bold" fill="#0f172a" className="print:fill-black">K</text>
          </svg>
        );
      }

      // 8. Cân đĩa đo khối lượng (Bao đường thăng bằng với quả cân 500g + 200g)
      case 'pan_balance_scale': {
        return (
          <svg viewBox="0 0 300 160" className="w-full max-w-[280px] h-auto mx-auto select-none" aria-label="Cân đĩa thăng bằng">
            {/* Đế và cột cân */}
            <rect x="135" y="140" width="30" height="12" rx="2" fill="#334155" className="print:fill-black" />
            <line x1="150" y1="50" x2="150" y2="140" stroke="#334155" strokeWidth="4" className="print:stroke-black" />
            <circle cx="150" cy="50" r="6" fill="#e11d48" className="print:fill-black" />
            <line x1="150" y1="50" x2="150" y2="30" stroke="#e11d48" strokeWidth="2" />

            {/* Cần cân nằm ngang thăng bằng */}
            <line x1="50" y1="50" x2="250" y2="50" stroke="#1e293b" strokeWidth="3" className="print:stroke-black" />

            {/* Dây treo đĩa trái */}
            <line x1="50" y1="50" x2="30" y2="100" stroke="#64748b" strokeWidth="1.5" className="print:stroke-black" />
            <line x1="50" y1="50" x2="70" y2="100" stroke="#64748b" strokeWidth="1.5" className="print:stroke-black" />
            <ellipse cx="50" cy="100" rx="30" ry="6" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" className="print:fill-white print:stroke-black" />
            
            {/* Túi đường trên đĩa trái */}
            <rect x="35" y="65" width="30" height="32" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" className="print:fill-slate-200 print:stroke-black" />
            <text x="40" y="82" fontSize="9" fontWeight="bold" fill="#854d0e" className="print:fill-black">TÚI</text>
            <text x="37" y="92" fontSize="8" fontWeight="bold" fill="#854d0e" className="print:fill-black">ĐƯỜNG</text>

            {/* Dây treo đĩa phải */}
            <line x1="250" y1="50" x2="230" y2="100" stroke="#64748b" strokeWidth="1.5" className="print:stroke-black" />
            <line x1="250" y1="50" x2="270" y2="100" stroke="#64748b" strokeWidth="1.5" className="print:stroke-black" />
            <ellipse cx="250" cy="100" rx="30" ry="6" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" className="print:fill-white print:stroke-black" />

            {/* 2 quả cân trên đĩa phải: 500g và 200g */}
            <rect x="232" y="70" width="18" height="26" rx="2" fill="#94a3b8" stroke="#334155" strokeWidth="1.5" className="print:fill-slate-300 print:stroke-black" />
            <text x="233" y="86" fontSize="7" fontWeight="bold" fill="#0f172a" className="print:fill-black">500g</text>

            <rect x="254" y="77" width="16" height="19" rx="2" fill="#94a3b8" stroke="#334155" strokeWidth="1.5" className="print:fill-slate-300 print:stroke-black" />
            <text x="255" y="90" fontSize="7" fontWeight="bold" fill="#0f172a" className="print:fill-black">200g</text>

            <text x="95" y="152" fontSize="11" fontWeight="bold" fill="#0f172a" className="print:fill-black">Cân ở trạng thái thăng bằng</text>
          </svg>
        );
      }

      // 9. Ca đong nước có chia vạch dung tích
      case 'beaker_cylinder': {
        return (
          <svg viewBox="0 0 200 170" className="w-full max-w-[180px] h-auto mx-auto select-none" aria-label="Ca đong nước ml">
            {/* Thân ca đong */}
            <path d="M 60,30 L 60,140 Q 60,150 70,150 L 130,150 Q 140,150 140,140 L 140,30" fill="#f8fafc" stroke="#334155" strokeWidth="2" className="print:fill-white print:stroke-black" />
            {/* Miệng ca và mỏ rót */}
            <path d="M 50,30 L 60,30 L 140,30 L 145,30" stroke="#334155" strokeWidth="2" fill="none" className="print:stroke-black" />
            
            {/* Lượng nước trong ca (ở mức 350ml = 60px từ đáy) */}
            <path d="M 61,85 L 139,85 L 139,140 Q 139,149 130,149 L 70,149 Q 61,149 61,140 Z" fill="#38bdf8" fillOpacity="0.5" stroke="#0284c7" strokeWidth="1" className="print:fill-slate-200 print:stroke-black" />

            {/* Các vạch chia ml: 500, 400, 300, 200, 100 */}
            {[
              { ml: 500, y: 50 },
              { ml: 400, y: 72 },
              { ml: 300, y: 94 },
              { ml: 200, y: 116 },
              { ml: 100, y: 138 },
            ].map(({ ml, y }) => (
              <g key={ml}>
                <line x1="60" y1={y} x2="78" y2={y} stroke="#0f172a" strokeWidth="1.5" className="print:stroke-black" />
                <text x="82" y={y + 3.5} fontSize="9" fontWeight="bold" fill="#0f172a" className="print:fill-black">{ml}</text>
              </g>
            ))}
            <text x="106" y="44" fontSize="10" fontWeight="bold" fill="#0284c7" className="print:fill-black">ml</text>
          </svg>
        );
      }

      // 10. Mặt đồng hồ xem giờ
      case 'clock_face': {
        const hourAngle = data?.hourAngle || 245; // 8h15
        const minuteAngle = data?.minuteAngle || 90;
        const timeText = data?.timeText || 'Đồng hồ chỉ mấy giờ?';

        return (
          <svg viewBox="0 0 180 180" className="w-full max-w-[170px] h-auto mx-auto select-none" aria-label="Mặt đồng hồ">
            {/* Vành đồng hồ */}
            <circle cx="90" cy="90" r="75" fill="#f8fafc" stroke="#1e293b" strokeWidth="4" className="print:fill-white print:stroke-black" />
            <circle cx="90" cy="90" r="71" fill="none" stroke="#94a3b8" strokeWidth="1" />

            {/* Các số 1 đến 12 */}
            {[
              { num: 12, x: 90, y: 32 },
              { num: 1, x: 120, y: 40 },
              { num: 2, x: 142, y: 62 },
              { num: 3, x: 150, y: 94 },
              { num: 4, x: 142, y: 126 },
              { num: 5, x: 120, y: 148 },
              { num: 6, x: 90, y: 156 },
              { num: 7, x: 60, y: 148 },
              { num: 8, x: 38, y: 126 },
              { num: 9, x: 30, y: 94 },
              { num: 10, x: 38, y: 62 },
              { num: 11, x: 60, y: 40 },
            ].map(({ num, x, y }) => (
              <text key={num} x={x} y={y} textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a" className="print:fill-black">
                {num}
              </text>
            ))}

            {/* Kim giờ (ngắn, dày) */}
            <line 
              x1="90" 
              y1="90" 
              x2={90 + 35 * Math.sin((hourAngle * Math.PI) / 180)} 
              y2={90 - 35 * Math.cos((hourAngle * Math.PI) / 180)} 
              stroke="#0f172a" 
              strokeWidth="4" 
              strokeLinecap="round" 
              className="print:stroke-black"
            />

            {/* Kim phút (dài, mảnh hơn) */}
            <line 
              x1="90" 
              y1="90" 
              x2={90 + 55 * Math.sin((minuteAngle * Math.PI) / 180)} 
              y2={90 - 55 * Math.cos((minuteAngle * Math.PI) / 180)} 
              stroke="#0284c7" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              className="print:stroke-black"
            />

            {/* Trục tâm */}
            <circle cx="90" cy="90" r="4.5" fill="#e11d48" className="print:fill-black" />
          </svg>
        );
      }

      // 11. Hình chữ nhật trên lưới ô vuông 1 cm²
      case 'grid_area_rectangle': {
        const length = data?.length || '6 cm';
        const width = data?.width || '4 cm';
        return (
          <svg viewBox="0 0 280 180" className="w-full max-w-[260px] h-auto mx-auto select-none" aria-label="Hình chữ nhật tính diện tích">
            {/* Lưới ô vuông */}
            <g stroke="#cbd5e1" strokeWidth="0.8" className="print:stroke-slate-300">
              {[0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250].map((x) => (
                <line key={`v-${x}`} x1={15 + x} y1="15" x2={15 + x} y2="165" />
              ))}
              {[0, 25, 50, 75, 100, 125, 150].map((y) => (
                <line key={`h-${y}`} x1="15" y1={15 + y} x2="265" y2={15 + y} />
              ))}
            </g>

            {/* Hình chữ nhật ABCD (6 cột x 4 hàng ô vuông) */}
            <rect x="40" y="40" width="150" height="100" fill="#e0f2fe" fillOpacity="0.7" stroke="#0369a1" strokeWidth="3" className="print:fill-slate-100 print:stroke-black" />

            {/* Các đỉnh A, B, C, D */}
            <text x="26" y="38" fontSize="13" fontWeight="bold" fill="#0c4a6e" className="print:fill-black">A</text>
            <text x="195" y="38" fontSize="13" fontWeight="bold" fill="#0c4a6e" className="print:fill-black">B</text>
            <text x="195" y="152" fontSize="13" fontWeight="bold" fill="#0c4a6e" className="print:fill-black">C</text>
            <text x="26" y="152" fontSize="13" fontWeight="bold" fill="#0c4a6e" className="print:fill-black">D</text>

            {/* Kích thước */}
            <text x="100" y="32" fontSize="11" fontWeight="bold" fill="#0369a1" className="print:fill-black">Dài: {length}</text>
            <text x="200" y="95" fontSize="11" fontWeight="bold" fill="#0369a1" className="print:fill-black">Rộng: {width}</text>

            {/* 1 ô mẫu 1 cm² */}
            <rect x="40" y="40" width="25" height="25" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" className="print:fill-slate-300 print:stroke-black" />
            <text x="43" y="56" fontSize="8" fontWeight="bold" fill="#0369a1" className="print:fill-black">1cm²</text>
          </svg>
        );
      }

      // Default fallback
      default:
        return null;
    }
  };

  return (
    <div className={`my-3 p-2 sm:p-3 bg-slate-50/80 rounded-xl border border-slate-200/80 flex flex-col items-center justify-center ${isPrintVersion ? 'bg-white border-slate-300' : ''}`}>
      {renderSvg()}
      {caption && (
        <span className="text-[11px] font-semibold text-slate-500 mt-1 italic text-center">
          {caption}
        </span>
      )}
    </div>
  );
};
