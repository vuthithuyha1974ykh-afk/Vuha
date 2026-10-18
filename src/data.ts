import { Question, Semester, ExamId } from './types';

// ============================================================================
// HỌC KÌ I - ĐỀ SỐ 1
// (Bám sát SGK Toán 3 Tập 1 - Kết nối tri thức với cuộc sống • Chuẩn TT27)
// ============================================================================

export const semester1Questions_de1: Question[] = [
  // --- PHẦN I: TRẮC NGHIỆM KHÁCH QUAN & ĐIỀN ĐÁP ÁN (6,0 ĐIỂM) ---
  {
    id: 1,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Số gồm 7 trăm, 0 chục và 5 đơn vị được viết là:',
    options: ['750', '705', '507', '75'],
    answer: 1,
    explanation: 'Số gồm 7 trăm, 0 chục, 5 đơn vị được viết là 705 (SGK Bài 1).'
  },
  {
    id: 2,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Một phần tư (1/4) của 24 chiếc bút chì màu là:',
    options: ['4 chiếc', '6 chiếc', '8 chiếc', '12 chiếc'],
    answer: 1,
    explanation: 'Muốn tìm 1/4 của 24 chiếc bút chì màu, ta lấy 24 : 4 = 6 (chiếc) (SGK Bài 14).'
  },
  {
    id: 3,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 0.5,
    text: 'Quan sát hình tròn tâm O bên dưới có bán kính OA = 9 cm. Độ dài đường kính của hình tròn đó là:',
    illustration: {
      type: 'circle_radius_diameter',
      caption: 'Hình tròn tâm O có bán kính OA = 9 cm',
      data: { radiusText: '9 cm' }
    },
    options: ['18 cm', '9 cm', '3 cm', '27 cm'],
    answer: 0,
    explanation: 'Đường kính hình tròn dài gấp 2 lần bán kính: 9 × 2 = 18 (cm) (SGK Bài 17).'
  },
  {
    id: 4,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 0.5,
    text: 'Quan sát chiếc bút sáp màu được đo bằng thước kẻ bên dưới. Độ dài chiếc bút sáp màu theo đơn vị mi-li-mét (mm) là:',
    illustration: {
      type: 'ruler_crayon_measure',
      caption: 'Đo độ dài chiếc bút sáp bằng thước chia vạch cm và mm'
    },
    options: ['45 mm', '405 mm', '9 mm', '450 mm'],
    answer: 0,
    explanation: 'Độ dài chiếc bút sáp từ vạch 0 đến 4 cm 5 mm. Đổi 4 cm 5 mm = 40 mm + 5 mm = 45 mm (SGK Bài 30).'
  },
  {
    id: 5,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'statistics',
    strandLabel: 'Xác suất và thống kê',
    points: 0.5,
    text: 'Trong hộp kín có 4 quả bóng màu xanh và 3 quả bóng màu vàng. Mai nhắm mắt lấy ra 1 quả bóng. Khả năng sự kiện "Mai lấy được quả bóng màu đỏ" là:',
    options: ['Chắc chắn xảy ra', 'Có thể xảy ra', 'Không thể xảy ra', 'Chắc chắn lấy được bóng xanh'],
    answer: 2,
    explanation: 'Vì trong hộp chỉ có bóng xanh và vàng, không có quả bóng màu đỏ nào nên sự kiện này "Không thể xảy ra".'
  },
  {
    id: 6,
    type: 'mcq',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Trong phép chia 53 : 6, số dư của phép chia đó là:',
    options: ['5', '8', '3', '2'],
    answer: 0,
    explanation: 'Ta có 53 : 6 = 8 (dư 5) vì 6 × 8 = 48 và 53 - 48 = 5 (SGK Bài 25).'
  },
  {
    id: 7,
    type: 'mcq',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Bao ngô cân nặng 40 kg, bao đậu xanh có cân nặng giảm đi 5 lần so với bao ngô. Bao đậu xanh cân nặng là:',
    options: ['35 kg', '8 kg', '200 kg', '45 kg'],
    answer: 1,
    explanation: 'Muốn giảm 40 kg đi 5 lần, ta lấy: 40 : 5 = 8 (kg) (SGK Bài 27).'
  },
  {
    id: 8,
    type: 'mcq',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 0.5,
    text: 'Quan sát hình khối lập phương bên dưới. Khối lập phương có tất cả bao nhiêu đỉnh, bao nhiêu cạnh và bao nhiêu mặt?',
    illustration: {
      type: 'cube_3d',
      caption: 'Khối lập phương với các đỉnh, cạnh và mặt'
    },
    options: [
      '8 đỉnh, 12 cạnh, 6 mặt',
      '6 đỉnh, 12 cạnh, 8 mặt',
      '8 đỉnh, 6 cạnh, 12 mặt',
      '4 đỉnh, 6 cạnh, 4 mặt'
    ],
    answer: 0,
    explanation: 'Khối lập phương có 8 đỉnh, 12 cạnh có độ dài bằng nhau và 6 mặt đều là hình vuông (SGK Bài 21).'
  },
  {
    id: 9,
    type: 'true_false',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Điền Đ (Đúng) hoặc S (Sai) vào ô trống (0,5 điểm):',
    items: [
      {
        statement: 'Trung điểm của đoạn thẳng AB là điểm ở giữa A, B và chia đoạn thẳng AB thành 2 đoạn thẳng có độ dài bằng nhau.',
        isTrue: true
      },
      {
        statement: '1 kg = 1 000 g.',
        isTrue: true
      },
      {
        statement: 'Trong biểu thức có cả phép tính nhân và phép tính trừ, ta thực hiện phép nhân trước rồi thực hiện phép trừ sau.',
        isTrue: true
      },
      {
        statement: '1 m = 100 mm.',
        isTrue: false
      }
    ],
    explanation: 'a) Đúng theo định nghĩa trung điểm (SGK Bài 16). b) Đúng vì 1 kg = 1000 g (SGK Bài 31). c) Đúng theo quy tắc thứ tự tính biểu thức (SGK Bài 38). d) Sai vì 1 m = 1000 mm (1 m = 100 cm = 1000 mm).'
  },
  {
    id: 10,
    type: 'matching',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'statistics',
    strandLabel: 'Xác suất và thống kê',
    points: 0.5,
    text: 'Dưới đây là nhiệt độ không khí tại 4 địa phương đo vào buổi sáng: Hà Nội (28 °C), Sa Pa (12 °C), Đà Nẵng (30 °C), Đà Lạt (16 °C). Hãy nối mỗi câu ở cột A với kết quả ở cột B (0,5 điểm):',
    leftItems: [
      { id: 'L1', text: 'Địa phương có nhiệt độ cao nhất' },
      { id: 'L2', text: 'Địa phương có nhiệt độ thấp nhất' },
      { id: 'L3', text: 'Nhiệt độ tại Hà Nội cao hơn ở Đà Lạt là' }
    ],
    rightItems: [
      { id: 'R1', text: '12 °C' },
      { id: 'R2', text: 'Đà Nẵng (30 °C)' },
      { id: 'R3', text: 'Sa Pa (12 °C)' }
    ],
    correctPairs: {
      'L1': 'R2',
      'L2': 'R3',
      'L3': 'R1'
    },
    explanation: '- Nhiệt độ cao nhất: Đà Nẵng (30 °C).\n- Nhiệt độ thấp nhất: Sa Pa (12 °C).\n- Chênh lệch nhiệt độ Hà Nội và Đà Lạt: 28 - 16 = 12 (°C) (SGK Bài 33).'
  },
  {
    id: 11,
    type: 'short_answer',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Tìm thừa số x chưa biết trong phép tính: x × 4 = 184. Giá trị của x là:',
    unit: '',
    placeholder: 'Nhập số...',
    correctAnswers: ['46'],
    explanation: 'Muốn tìm một thừa số chưa biết, ta lấy tích chia cho thừa số đã biết: x = 184 : 4 = 46 (SGK Bài 13, 37).'
  },
  {
    id: 12,
    type: 'short_answer',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Giá trị của biểu thức 360 - (335 - 30) là:',
    unit: '',
    placeholder: 'Nhập kết quả...',
    correctAnswers: ['55'],
    explanation: 'Thực hiện phép tính trong ngoặc trước: 335 - 30 = 305. Sau đó: 360 - 305 = 55 (SGK Bài 40).'
  },

  // --- PHẦN II: TỰ LUẬN (4,0 ĐIỂM) ---
  {
    id: 13,
    type: 'written',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 1.0,
    text: '<strong>Bài 1: Đặt tính rồi tính (1,0 điểm):</strong><br/>a) 213 × 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) 162 × 4<br/>c) 848 : 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d) 740 : 5',
    explanation: '<strong>Hướng dẫn chấm & Thang điểm (Mỗi phép tính đúng 0,25 điểm):</strong><br/>' +
      'a) 213 × 3 = <strong>639</strong><br/>' +
      'b) 162 × 4 = <strong>648</strong><br/>' +
      'c) 848 : 4 = <strong>212</strong><br/>' +
      'd) 740 : 5 = <strong>148</strong>',
    scoringCriteria: [
      { step: 'Phép nhân: 213 × 3 = 639', points: 0.25 },
      { step: 'Phép nhân: 162 × 4 = 648', points: 0.25 },
      { step: 'Phép chia: 848 : 4 = 212', points: 0.25 },
      { step: 'Phép chia: 740 : 5 = 148', points: 0.25 }
    ]
  },
  {
    id: 14,
    type: 'written',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 1.0,
    text: '<strong>Bài 2 (Tính giá trị của biểu thức - 1,0 điểm):</strong><br/>' +
      'a) 731 - 680 + 19<br/>' +
      'b) 24 + 8 × 6',
    explanation: '<strong>Bài giải:</strong><br/>' +
      'a) 731 - 680 + 19 = 51 + 19 = <strong>70</strong> (0,5 đ)<br/>' +
      'b) 24 + 8 × 6 = 24 + 48 = <strong>72</strong> (0,5 đ)',
    scoringCriteria: [
      { step: 'Tính đúng biểu thức a: 731 - 680 + 19 = 51 + 19 = 70', points: 0.5 },
      { step: 'Tính đúng biểu thức b: 24 + 8 × 6 = 24 + 48 = 72', points: 0.5 }
    ]
  },
  {
    id: 15,
    type: 'written',
    level: 'Mức 3',
    levelLabel: 'Mức 3 (Vận dụng)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 1.0,
    text: '<strong>Bài 3 (Bài toán giải bằng hai bước tính - 1,0 điểm):</strong><br/>Một cửa hàng lương thực buổi sáng bán được 35 kg gạo. Buổi chiều cửa hàng bán được số gạo gấp 3 lần buổi sáng. Hỏi cả hai buổi cửa hàng đó bán được tất cả bao nhiêu ki-lô-gam gạo?',
    explanation: '<strong>Bài giải:</strong><br/>' +
      'Số ki-lô-gam gạo buổi chiều bán được là:<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;35 × 3 = 105 (kg) (0,5 đ)<br/>' +
      'Cả hai buổi cửa hàng bán được số ki-lô-gam gạo là:<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;35 + 105 = 140 (kg) (0,4 đ)<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Đáp số: 140 kg gạo. (0,1 đ)',
    scoringCriteria: [
      { step: 'Lời giải và phép tính tìm số gạo buổi chiều (35 × 3 = 105 kg)', points: 0.5 },
      { step: 'Lời giải, phép tính tìm tổng 2 buổi (35 + 105 = 140 kg) và đáp số', points: 0.5 }
    ]
  },
  {
    id: 16,
    type: 'written',
    level: 'Mức 3',
    levelLabel: 'Mức 3 (Vận dụng cao - Tư duy mở thực tiễn)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 1.0,
    isOpenEnded: true,
    text: '<strong>Bài 4 (Bài toán mở phát huy năng lực tư duy & giải quyết vấn đề - 1,0 điểm):</strong><br/>' +
      'Rô-bốt có hai chiếc ca đong: một ca loại <strong>150 ml</strong> và một ca loại <strong>400 ml</strong> (hai ca đều không có vạch chia khác). Chỉ dùng hai chiếc ca đong này và nước trong thùng lớn:<br/>' +
      'a) Em hãy nêu cách giúp Rô-bốt lấy được đúng <strong>250 ml</strong> nước.<br/>' +
      'b) Em hãy nêu cách giúp Rô-bốt lấy được đúng <strong>100 ml</strong> nước.',
    explanation: '<strong>Bài giải & Biểu điểm:</strong><br/>' +
      '<strong>a) Cách lấy đúng 250 ml nước (0,5 điểm):</strong><br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;• Bước 1: Múc nước đầy ca 400 ml.<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;• Bước 2: Rót từ ca 400 ml sang cho đầy ca 150 ml.<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;• Lượng nước còn lại trong ca 400 ml đúng bằng: 400 - 150 = 250 (ml).<br/>' +
      '<strong>b) Cách lấy đúng 100 ml nước (0,5 điểm):</strong><br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;• Bước 1: Sau khi có 250 ml nước trong ca 400 ml (như câu a), đổ hết nước ở ca 150 ml đi.<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;• Bước 2: Tiếp tục rót từ ca 400 ml sang cho đầy ca 150 ml lần thứ hai.<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;• Khi đó lượng nước còn lại trong ca 400 ml đúng bằng: 250 - 150 = 100 (ml).',
    scoringCriteria: [
      { step: 'Trình bày đúng quy trình lấy 250 ml nước: Múc đầy ca 400 ml rồi rót đầy ca 150 ml', points: 0.5 },
      { step: 'Trình bày đúng quy trình lấy 100 ml nước: Tiếp tục rót đầy ca 150 ml lần 2', points: 0.5 }
    ]
  }
];

// ============================================================================
// HỌC KÌ I - ĐỀ SỐ 2 (ĐỀ MỚI - ĐẦY ĐỦ HÌNH VẼ TRỰC QUAN CHO TRẮC NGHIỆM HÌNH)
// (Bám sát SGK Toán 3 Tập 1 - Kết nối tri thức với cuộc sống • Chuẩn TT27)
// ============================================================================

export const semester1Questions_de2: Question[] = [
  // --- PHẦN I: TRẮC NGHIỆM KHÁCH QUAN & ĐIỀN ĐÁP ÁN (6,0 ĐIỂM) ---
  {
    id: 1,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Số lớn nhất có 3 chữ số khác nhau là:',
    options: ['999', '987', '989', '978'],
    answer: 1,
    explanation: 'Số có 3 chữ số khác nhau lớn nhất chọn chữ số hàng trăm là 9, hàng chục là 8, hàng đơn vị là 7 -> Số đó là 987 (SGK Bài 1).'
  },
  {
    id: 2,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Quan sát 4 hình bên dưới, hình nào đã tô màu <strong>một phần ba (1/3)</strong> số ô vuông?',
    illustration: {
      type: 'fraction_colored_grid',
      caption: 'Quan sát các hình A, B, C, D gồm các ô vuông'
    },
    options: ['Hình A', 'Hình B', 'Hình C', 'Hình D'],
    answer: 1,
    explanation: 'Mỗi hình có tổng cộng 6 ô vuông. Một phần ba (1/3) của 6 ô vuông là: 6 : 3 = 2 (ô vuông). Hình B tô đúng 2 ô vuông trong 6 ô (SGK Bài 14).'
  },
  {
    id: 3,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 0.5,
    text: 'Quan sát hình tứ giác ABCD ở hình vẽ bên dưới. Trong hình vẽ có tất cả bao nhiêu <strong>góc vuông</strong>?',
    illustration: {
      type: 'right_angles_shape',
      caption: 'Hình tứ giác ABCD (Dùng ê ke để kiểm tra góc vuông)'
    },
    options: ['1 góc vuông', '2 góc vuông', '3 góc vuông', '4 góc vuông'],
    answer: 1,
    explanation: 'Trong hình tứ giác ABCD, có 2 góc vuông tại đỉnh A và đỉnh D; góc đỉnh B là góc tù và góc đỉnh C là góc nhọn (SGK Bài 15).'
  },
  {
    id: 4,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 0.5,
    text: 'Quan sát hình vẽ bên dưới, biết đoạn thẳng MN dài 12 cm và I là <strong>trung điểm</strong> của đoạn thẳng MN. Độ dài đoạn thẳng MI là:',
    illustration: {
      type: 'line_midpoint',
      caption: 'Đoạn thẳng MN dài 12 cm có điểm I là trung điểm',
      data: { totalLength: '12 cm' }
    },
    options: ['6 cm', '4 cm', '24 cm', '3 cm'],
    answer: 0,
    explanation: 'Vì I là trung điểm của MN nên độ dài MI = IN = MN : 2 = 12 : 2 = 6 (cm) (SGK Bài 16).'
  },
  {
    id: 5,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'statistics',
    strandLabel: 'Xác suất và thống kê',
    points: 0.5,
    text: 'Một hộp đựng 6 chiếc bút mực tím và không có chiếc bút mực nào khác. Nam nhắm mắt lấy ra 1 chiếc bút. Khả năng sự kiện "Nam lấy được 1 chiếc bút mực tím" là:',
    options: ['Không thể xảy ra', 'Có thể xảy ra', 'Chắc chắn xảy ra', 'Không xác định được'],
    answer: 2,
    explanation: 'Vì trong hộp tất cả bút đều là mực tím nên khi lấy ra 1 chiếc thì "Chắc chắn xảy ra" sự kiện lấy được bút mực tím (SGK Bài 34).'
  },
  {
    id: 6,
    type: 'mcq',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Giá trị của biểu thức <strong>36 + 24 : 6</strong> là:',
    options: ['10', '40', '4', '60'],
    answer: 1,
    explanation: 'Thực hiện phép tính chia trước rồi cộng sau: 36 + 24 : 6 = 36 + 4 = 40 (SGK Bài 38).'
  },
  {
    id: 7,
    type: 'mcq',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 0.5,
    text: 'Quan sát hình vẽ tam giác ABC bên dưới (có đoạn nối MN và đường AD). Hình vẽ bên có tất cả bao nhiêu <strong>hình tam giác</strong>?',
    illustration: {
      type: 'triangle_quadrilateral_count',
      caption: 'Hình vẽ tam giác ABC với các đoạn thẳng MN và AD'
    },
    options: ['4 hình tam giác', '6 hình tam giác', '8 hình tam giác', '3 hình tam giác'],
    answer: 1,
    explanation: 'Có 6 hình tam giác gồm: 2 tam giác đơn nửa trên (AMK, AKN), 1 tam giác nửa trên ghép (AMN), 2 tam giác lớn chia đôi (ABD, ADC), và 1 tam giác to nhất (ABC) -> Tổng cộng 6 hình tam giác (SGK Bài 20).'
  },
  {
    id: 8,
    type: 'mcq',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 0.5,
    text: 'Quan sát chiếc cân đĩa bên dưới đang ở trạng thái thăng bằng. Cân nặng của túi đường ở đĩa cân bên trái là:',
    illustration: {
      type: 'pan_balance_scale',
      caption: 'Cân đĩa thăng bằng: Đĩa trái có túi đường, đĩa phải có 2 quả cân 500g và 200g'
    },
    options: ['700 g', '300 g', '500 g', '200 g'],
    answer: 0,
    explanation: 'Vì cân thăng bằng nên khối lượng túi đường bằng tổng 2 quả cân ở đĩa bên phải: 500 g + 200 g = 700 g (SGK Bài 31).'
  },
  {
    id: 9,
    type: 'true_false',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Điền Đ (Đúng) hoặc S (Sai) vào mỗi nhận định sau (0,5 điểm):',
    items: [
      {
        statement: 'Số 0 chia cho bất kì số nào khác 0 cũng bằng 0.',
        isTrue: true
      },
      {
        statement: '1 lít (l) bằng 100 mi-li-lít (ml).',
        isTrue: false
      },
      {
        statement: 'Khối hộp chữ nhật có 6 mặt, 8 đỉnh và 12 cạnh.',
        isTrue: true
      },
      {
        statement: 'Khi đo nhiệt độ cơ thể người khỏe mạnh bình thường vào khoảng 37 °C.',
        isTrue: true
      }
    ],
    explanation: 'a) Đúng vì 0 : a = 0 (với a khác 0). b) Sai vì 1 l = 1 000 ml. c) Đúng theo tính chất khối hộp chữ nhật (SGK Bài 21). d) Đúng theo bài học về nhiệt độ °C (SGK Bài 33).'
  },
  {
    id: 10,
    type: 'matching',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'statistics',
    strandLabel: 'Xác suất và thống kê',
    points: 0.5,
    text: 'Bốn bạn học sinh gấp hạc giấy trang trí: Mai (18 con), Nam (24 con), Việt (30 con), Rô-bốt (12 con). Hãy nối mỗi câu ở cột A với kết quả ở cột B (0,5 điểm):',
    leftItems: [
      { id: 'L1', text: 'Bạn gấp được nhiều hạc giấy nhất là' },
      { id: 'L2', text: 'Số hạc giấy của Việt gấp số hạc giấy của Rô-bốt số lần là' },
      { id: 'L3', text: 'Tổng số hạc giấy của cả Mai và Nam là' }
    ],
    rightItems: [
      { id: 'R1', text: '2,5 lần (hoặc 30 : 12)' },
      { id: 'R2', text: 'Việt (30 con hạc)' },
      { id: 'R3', text: '42 con hạc' }
    ],
    correctPairs: {
      'L1': 'R2',
      'L2': 'R1',
      'L3': 'R3'
    },
    explanation: '- Bạn gấp nhiều nhất: Việt (30 con).\n- Số hạc của Việt so với Rô-bốt: 30 : 12.\n- Tổng số hạc của Mai và Nam: 18 + 24 = 42 (con).'
  },
  {
    id: 11,
    type: 'short_answer',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Tìm số chia y chưa biết trong phép tính: 72 : y = 8. Giá trị của y là:',
    unit: '',
    placeholder: 'Nhập số...',
    correctAnswers: ['9'],
    explanation: 'Muốn tìm số chia, ta lấy số bị chia chia cho thương: y = 72 : 8 = 9 (SGK Bài 13).'
  },
  {
    id: 12,
    type: 'short_answer',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Thùng thứ nhất có 48 lít dầu. Thùng thứ hai có lượng dầu giảm đi 4 lần so với thùng thứ nhất. Thùng thứ hai có số lít dầu là:',
    unit: 'lít',
    placeholder: 'Nhập số...',
    correctAnswers: ['12'],
    explanation: 'Lượng dầu thùng thứ hai: 48 : 4 = 12 (lít) (SGK Bài 27).'
  },

  // --- PHẦN II: TỰ LUẬN (4,0 ĐIỂM) ---
  {
    id: 13,
    type: 'written',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 1.0,
    text: '<strong>Bài 1: Đặt tính rồi tính (1,0 điểm):</strong><br/>a) 135 × 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) 218 × 3<br/>c) 648 : 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d) 515 : 5',
    explanation: '<strong>Bài giải & Biểu điểm (Mỗi phép tính đúng 0,25 điểm):</strong><br/>' +
      'a) 135 × 4 = <strong>540</strong> (0,25 đ)<br/>' +
      'b) 218 × 3 = <strong>654</strong> (0,25 đ)<br/>' +
      'c) 648 : 3 = <strong>216</strong> (0,25 đ)<br/>' +
      'd) 515 : 5 = <strong>103</strong> (0,25 đ - lưu ý lượt chia ở hàng chục 1 : 5 = 0 viết 0).',
    scoringCriteria: [
      { step: 'Phép nhân: 135 × 4 = 540', points: 0.25 },
      { step: 'Phép nhân: 218 × 3 = 654', points: 0.25 },
      { step: 'Phép chia: 648 : 3 = 216', points: 0.25 },
      { step: 'Phép chia: 515 : 5 = 103', points: 0.25 }
    ]
  },
  {
    id: 14,
    type: 'written',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 1.0,
    text: '<strong>Bài 2 (Tính giá trị của biểu thức - 1,0 điểm):</strong><br/>' +
      'a) (240 - 160) : 4<br/>' +
      'b) 125 + 75 × 3',
    explanation: '<strong>Bài giải:</strong><br/>' +
      'a) (240 - 160) : 4 = 80 : 4 (0,25 đ)<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <strong>20</strong> (0,25 đ)<br/>' +
      'b) 125 + 75 × 3 = 125 + 225 (0,25 đ)<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <strong>350</strong> (0,25 đ)',
    scoringCriteria: [
      { step: 'Tính đúng biểu thức có ngoặc: (240 - 160) : 4 = 80 : 4 = 20', points: 0.5 },
      { step: 'Tính đúng biểu thức không ngoặc (nhân trước cộng sau): 125 + 75 × 3 = 125 + 225 = 350', points: 0.5 }
    ]
  },
  {
    id: 15,
    type: 'written',
    level: 'Mức 3',
    levelLabel: 'Mức 3 (Vận dụng)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 1.0,
    text: '<strong>Bài 3 (Bài toán giải bằng hai bước tính - 1,0 điểm):</strong><br/>Mẹ đi chợ mua 25 quả trứng gà. Số trứng vịt mẹ mua gấp 2 lần số trứng gà. Hỏi mẹ đã mua tất cả bao nhiêu quả trứng gà và trứng vịt?',
    explanation: '<strong>Bài giải:</strong><br/>' +
      'Số quả trứng vịt mẹ mua là:<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;25 × 2 = 50 (quả) (0,5 đ)<br/>' +
      'Mẹ mua tất cả số quả trứng gà và trứng vịt là:<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;25 + 50 = 75 (quả) (0,4 đ)<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Đáp số: 75 quả trứng. (0,1 đ)',
    scoringCriteria: [
      { step: 'Lời giải và phép tính tìm số trứng vịt (25 × 2 = 50 quả)', points: 0.5 },
      { step: 'Lời giải, phép tính tìm tổng 2 loại trứng (25 + 50 = 75 quả) và đáp số', points: 0.5 }
    ]
  },
  {
    id: 16,
    type: 'written',
    level: 'Mức 3',
    levelLabel: 'Mức 3 (Vận dụng cao - Tư duy mở thực tiễn)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 1.0,
    isOpenEnded: true,
    text: '<strong>Bài 4 (Bài toán mở phát huy năng lực tư duy & giải quyết vấn đề - 1,0 điểm):</strong><br/>' +
      'Bác An có một thùng nước sạch đầy cùng hai chiếc xô: một xô loại <strong>3 lít</strong> và một xô loại <strong>5 lít</strong> (hai xô đều không có vạch chia). Bác An cần lấy đúng <strong>4 lít</strong> nước để tưới cây cảnh.<br/>' +
      'Em hãy hướng dẫn bác An các bước múc và rót nước giữa hai chiếc xô để lấy được đúng <strong>4 lít</strong> nước.',
    explanation: '<strong>Bài giải & Hướng dẫn chấm (1,0 điểm):</strong><br/>' +
      '<strong>Cách giải khoa học:</strong><br/>' +
      '• <strong>Bước 1:</strong> Múc đầy xô 5 lít từ thùng nước. (0,25 đ)<br/>' +
      '• <strong>Bước 2:</strong> Rót nước từ xô 5 lít sang cho đầy xô 3 lít. Khi đó trong xô 5 lít còn lại đúng: 5 - 3 = <strong>2 lít</strong> nước. (0,25 đ)<br/>' +
      '• <strong>Bước 3:</strong> Đổ hết nước trong xô 3 lít đi. Rồi đổ 2 lít nước từ xô 5 lít sang xô 3 lít (lúc này xô 3 lít đang chứa 2 lít, còn thiếu 1 lít nữa là đầy). (0,25 đ)<br/>' +
      '• <strong>Bước 4:</strong> Múc đầy lại xô 5 lít. Rót từ xô 5 lít sang xô 3 lít cho đến khi đầy (tức là rót thêm đúng 1 lít).<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;Khi đó trong xô 5 lít còn lại đúng: 5 - 1 = <strong>4 lít</strong> nước! (0,25 đ)<br/>' +
      '<em>(Học sinh nêu các bước hợp lý khác đều đạt điểm tối đa).</em>',
    scoringCriteria: [
      { step: 'Múc đầy xô 5l, rót đầy xô 3l để thu được 2 lít nước', points: 0.5 },
      { step: 'Chuyển 2 lít sang xô 3l, múc đầy xô 5l rồi rót bù 1l để còn lại đúng 4 lít trong xô 5l', points: 0.5 }
    ]
  }
];

// ============================================================================
// HỌC KÌ II - ĐỀ SỐ 1
// (Bám sát SGK Toán 3 Tập 2 - Kết nối tri thức với cuộc sống • Chuẩn TT27)
// ============================================================================

export const semester2Questions_de1: Question[] = [
  {
    id: 1,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Số "Tám mươi lăm nghìn không trăm bốn mươi hai" được viết là:',
    options: ['85 420', '85 042', '80 542', '85 402'],
    answer: 1,
    explanation: 'Số gồm 8 chục nghìn, 5 nghìn, 0 trăm, 4 chục và 2 đơn vị viết là 85 042 (SGK Bài 47).'
  },
  {
    id: 2,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Làm tròn số 47 682 đến hàng nghìn ta được số:',
    options: ['47 000', '48 000', '47 600', '47 700'],
    answer: 1,
    explanation: 'Chữ số hàng trăm là 6 (≥ 5), ta cộng thêm 1 vào hàng nghìn (7 + 1 = 8) -> 48 000 (SGK Bài 51).'
  },
  {
    id: 3,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 0.5,
    text: 'Quan sát hình chữ nhật ABCD trên lưới ô vuông bên dưới (mỗi ô vuông là 1 cm²). Diện tích của hình chữ nhật ABCD là:',
    illustration: {
      type: 'grid_area_rectangle',
      caption: 'Hình chữ nhật ABCD có chiều dài 6 cm, chiều rộng 4 cm',
      data: { length: '6 cm', width: '4 cm' }
    },
    options: ['20 cm²', '24 cm²', '10 cm²', '48 cm²'],
    answer: 1,
    explanation: 'Diện tích hình chữ nhật ABCD = chiều dài × chiều rộng = 6 × 4 = 24 (cm²) (SGK Bài 54).'
  },
  {
    id: 4,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 0.5,
    text: 'Diện tích của một hình vuông có cạnh dài 7 cm là:',
    options: ['28 cm²', '49 cm²', '14 cm²', '49 cm'],
    answer: 1,
    explanation: 'Diện tích hình vuông = cạnh × cạnh = 7 × 7 = 49 (cm²) (SGK Bài 55).'
  },
  {
    id: 5,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'statistics',
    strandLabel: 'Xác suất và thống kê',
    points: 0.5,
    text: 'Trong hộp có 5 viên bi đỏ và 5 viên bi xanh. Không nhìn vào hộp, Nam lấy ngẫu nhiên 1 viên bi. Khả năng Nam lấy được viên bi màu vàng là:',
    options: ['Chắc chắn xảy ra', 'Có thể xảy ra', 'Không thể xảy ra', 'Chắc chắn lấy được bi đỏ'],
    answer: 2,
    explanation: 'Vì trong hộp chỉ có bi đỏ và bi xanh, không có bi màu vàng nên sự kiện này "Không thể xảy ra" (SGK Bài 75).'
  },
  {
    id: 6,
    type: 'mcq',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Giá trị của biểu thức 18 000 + 12 000 : 4 là:',
    options: ['7 500', '21 000', '30 000', '20 000'],
    answer: 1,
    explanation: 'Thực hiện phép chia trước, cộng sau: 18 000 + 12 000 : 4 = 18 000 + 3 000 = 21 000 (SGK Bài 69).'
  },
  {
    id: 7,
    type: 'mcq',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 0.5,
    text: 'Quan sát mặt đồng hồ bên dưới. Đồng hồ đang chỉ mấy giờ?',
    illustration: {
      type: 'clock_face',
      caption: 'Đồng hồ kim: Kim giờ qua số 8, kim phút chỉ số 3',
      data: { hourAngle: 245, minuteAngle: 90, timeText: '8 giờ 15 phút' }
    },
    options: ['8 giờ 15 phút', '3 giờ 40 phút', '8 giờ 3 phút', '9 giờ 15 phút'],
    answer: 0,
    explanation: 'Kim ngắn qua số 8 (8 giờ), kim dài chỉ số 3 (3 × 5 = 15 phút) -> 8 giờ 15 phút (SGK Bài 44, 76).'
  },
  {
    id: 8,
    type: 'mcq',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Dãy số nào dưới đây được sắp xếp theo thứ tự từ bé đến lớn?',
    options: [
      '38 290 ; 38 920 ; 83 290 ; 83 920',
      '83 920 ; 83 290 ; 38 920 ; 38 290',
      '38 920 ; 38 290 ; 83 290 ; 83 920',
      '38 290 ; 83 290 ; 38 920 ; 83 920'
    ],
    answer: 0,
    explanation: 'So sánh các số: 38 290 < 38 920 < 83 290 < 83 920 (SGK Bài 49).'
  },
  {
    id: 9,
    type: 'true_false',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Điền Đ (Đúng) hoặc S (Sai) vào ô trống (0,5 điểm):',
    items: [
      {
        statement: 'Số liền sau của số lớn nhất có 4 chữ số (9 999) là số 10 000.',
        isTrue: true
      },
      {
        statement: 'Trong phép chia có dư với số chia là 6, số dư lớn nhất có thể nhận được là 6.',
        isTrue: false
      },
      {
        statement: 'Số 95 304 khi làm tròn đến hàng trăm ta được số 95 300.',
        isTrue: true
      },
      {
        statement: '1 mét vuông (1 m²) bằng 100 xăng-ti-mét vuông (100 cm²).',
        isTrue: false
      }
    ],
    explanation: 'a) Đúng vì 9 999 + 1 = 10 000. b) Sai vì số dư luôn nhỏ hơn số chia (số dư lớn nhất là 5). c) Đúng vì hàng chục là 0 (< 5). d) Sai vì 1 m² = 10 000 cm² (SGK Bài 60).'
  },
  {
    id: 10,
    type: 'matching',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'statistics',
    strandLabel: 'Xác suất và thống kê',
    points: 0.5,
    text: 'Nối mỗi mệnh giá tiền Việt Nam ở cột A với số tờ tương ứng ở cột B để có tổng bằng 100 000 đồng (0,5 điểm):',
    leftItems: [
      { id: 'L1', text: '2 tờ tiền mệnh giá 50 000 đồng' },
      { id: 'L2', text: '5 tờ tiền mệnh giá 20 000 đồng' },
      { id: 'L3', text: '10 tờ tiền mệnh giá 10 000 đồng' }
    ],
    rightItems: [
      { id: 'R1', text: '100 000 đồng (5 × 20 000)' },
      { id: 'R2', text: '100 000 đồng (2 × 50 000)' },
      { id: 'R3', text: '100 000 đồng (10 × 10 000)' }
    ],
    correctPairs: {
      'L1': 'R2',
      'L2': 'R1',
      'L3': 'R3'
    },
    explanation: 'Tất cả các phương án đều có giá trị bằng 100 000 đồng (SGK Bài 74).'
  },
  {
    id: 11,
    type: 'short_answer',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Một xưởng may trong 5 ngày may được 125 bộ quần áo. Hỏi trong 8 ngày với mức may như thế, xưởng đó may được bao nhiêu bộ quần áo?',
    unit: 'bộ',
    placeholder: 'Nhập số...',
    correctAnswers: ['200'],
    explanation: 'Bài toán rút về đơn vị: Mỗi ngày may: 125 : 5 = 25 (bộ). 8 ngày may: 25 × 8 = 200 (bộ) (SGK Bài 71).'
  },
  {
    id: 12,
    type: 'short_answer',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 0.5,
    text: 'Một tấm bìa hình vuông có chu vi là 36 cm. Diện tích của tấm bìa hình vuông đó là:',
    unit: 'cm²',
    placeholder: 'Nhập số...',
    correctAnswers: ['81'],
    explanation: 'Cạnh hình vuông = 36 : 4 = 9 (cm). Diện tích = 9 × 9 = 81 (cm²) (SGK Bài 55).'
  },
  {
    id: 13,
    type: 'written',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 1.0,
    text: '<strong>Bài 1: Đặt tính rồi tính (1,0 điểm):</strong><br/>a) 34 825 + 21 643 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) 76 950 - 28 416<br/>c) 14 216 × 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d) 48 360 : 6',
    explanation: '<strong>Bài giải:</strong><br/>' +
      'a) 34 825 + 21 643 = <strong>56 468</strong> (0,25 đ)<br/>' +
      'b) 76 950 - 28 416 = <strong>48 534</strong> (0,25 đ)<br/>' +
      'c) 14 216 × 4 = <strong>56 864</strong> (0,25 đ)<br/>' +
      'd) 48 360 : 6 = <strong>8 060</strong> (0,25 đ)',
    scoringCriteria: [
      { step: 'Cộng: 34 825 + 21 643 = 56 468', points: 0.25 },
      { step: 'Trừ: 76 950 - 28 416 = 48 534', points: 0.25 },
      { step: 'Nhân: 14 216 × 4 = 56 864', points: 0.25 },
      { step: 'Chia: 48 360 : 6 = 8 060', points: 0.25 }
    ]
  },
  {
    id: 14,
    type: 'written',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 1.0,
    text: '<strong>Bài 2 (Tính giá trị của biểu thức - 1,0 điểm):</strong><br/>' +
      'a) 25 000 + 15 000 × 3<br/>' +
      'b) (84 000 - 24 000) : 6',
    explanation: '<strong>Bài giải:</strong><br/>' +
      'a) 25 000 + 15 000 × 3 = 25 000 + 45 000 = <strong>70 000</strong> (0,5 đ)<br/>' +
      'b) (84 000 - 24 000) : 6 = 60 000 : 6 = <strong>10 000</strong> (0,5 đ)',
    scoringCriteria: [
      { step: 'Tính đúng biểu thức a: 25 000 + 45 000 = 70 000', points: 0.5 },
      { step: 'Tính đúng biểu thức b: 60 000 : 6 = 10 000', points: 0.5 }
    ]
  },
  {
    id: 15,
    type: 'written',
    level: 'Mức 3',
    levelLabel: 'Mức 3 (Vận dụng cao)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 1.0,
    text: '<strong>Bài 3 (Hình học & Đo lường - 1,0 điểm):</strong><br/>Một mảnh đất hình chữ nhật có chu vi bằng 64 m. Nếu tăng chiều rộng thêm 4 m thì mảnh đất đó trở thành một mảnh đất hình vuông.<br/>a) Tính chiều dài và chiều rộng của mảnh đất hình chữ nhật ban đầu.<br/>b) Tính diện tích của mảnh đất hình chữ nhật đó.',
    explanation: '<strong>Bài giải:</strong><br/>' +
      'a) Nửa chu vi mảnh đất là: 64 : 2 = 32 (m).<br/>' +
      'Hiệu chiều dài và chiều rộng là 4 m.<br/>' +
      'Chiều rộng: (32 - 4) : 2 = 14 (m); Chiều dài: 14 + 4 = 18 (m) (0,5 đ)<br/>' +
      'b) Diện tích mảnh đất: 18 × 14 = 252 (m²) (0,4 đ)<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Đáp số: a) Dài: 18 m, Rộng: 14 m; b) 252 m² (0,1 đ)',
    scoringCriteria: [
      { step: 'Tính đúng nửa chu vi (32 m) và hiệu dài - rộng = 4 m', points: 0.35 },
      { step: 'Tìm đúng chiều dài (18 m) và chiều rộng (14 m)', points: 0.35 },
      { step: 'Tính đúng diện tích mảnh đất (252 m²) và ghi đầy đủ đáp số', points: 0.3 }
    ]
  },
  {
    id: 16,
    type: 'written',
    level: 'Mức 3',
    levelLabel: 'Mức 3 (Vận dụng cao - Tư duy mở thực tế)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 1.0,
    isOpenEnded: true,
    text: '<strong>Bài 4 (Bài toán mở & Năng lực giải quyết vấn đề thực tiễn - 1,0 điểm):</strong><br/>Bác Ba dự định lát nền một phòng học hình chữ nhật có kích thước: chiều dài 8 m, chiều rộng 6 m bằng gạch men hình vuông.<br/>' +
      'a) Em hãy tính diện tích nền phòng học đó.<br/>' +
      'b) Cửa hàng có 2 loại gạch men hình vuông: Loại 1 (cạnh 40 cm, 25 000 đ/viên) và Loại 2 (cạnh 50 cm, 38 000 đ/viên).<br/>' +
      'Em hãy tư vấn giúp bác Ba nên chọn loại gạch nào để khi lát kín nền phòng học <strong>vừa khít, không phải cắt xén viên gạch nào</strong>? Hãy giải thích rõ vì sao và tính tổng số tiền mua số gạch đó.',
    explanation: '<strong>Bài giải:</strong><br/>' +
      'a) Diện tích phòng học: 8 × 6 = 48 (m²). (0,25 đ)<br/>' +
      'b) Đổi 8 m = 800 cm; 6 m = 600 cm.<br/>' +
      '• Cả 2 loại gạch 40cm và 50cm đều chia hết cho 800cm và 600cm nên đều lát vừa khít không phải cắt gạch.<br/>' +
      '• Nếu chọn gạch 40cm: Số viên = (800:40) × (600:40) = 20 × 15 = 300 viên. Tiền = 300 × 25 000 = 7 500 000 đồng.<br/>' +
      '• Nếu chọn gạch 50cm: Số viên = (800:50) × (600:50) = 16 × 12 = 192 viên. Tiền = 192 × 38 000 = 7 296 000 đồng.<br/>' +
      '-> Bác Ba nên chọn loại gạch 50cm để tiết kiệm chi phí hơn (7 296 000 đ < 7 500 000 đ). (0,75 đ)',
    scoringCriteria: [
      { step: 'Tính đúng diện tích phòng học: 8 × 6 = 48 (m²)', points: 0.25 },
      { step: 'Đổi đơn vị và chứng minh tính vừa khít của kích thước gạch', points: 0.35 },
      { step: 'Tính đúng số lượng viên gạch và tổng số tiền của phương án lựa chọn', points: 0.4 }
    ]
  }
];

// ============================================================================
// HỌC KÌ II - ĐỀ SỐ 2 (ĐỀ MỚI - ĐẦY ĐỦ HÌNH VẼ MINH HỌA HÌNH HỌC)
// (Bám sát SGK Toán 3 Tập 2 - Kết nối tri thức với cuộc sống • Chuẩn TT27)
// ============================================================================

export const semester2Questions_de2: Question[] = [
  {
    id: 1,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Số liền trước của số 60 000 là:',
    options: ['59 999', '60 001', '59 000', '50 000'],
    answer: 0,
    explanation: 'Số liền trước của 60 000 là 60 000 - 1 = 59 999 (SGK Bài 48).'
  },
  {
    id: 2,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Chữ số 7 trong số 74 520 có giá trị là:',
    options: ['70 000', '7 000', '700', '70'],
    answer: 0,
    explanation: 'Chữ số 7 đứng ở hàng chục nghìn nên có giá trị là 70 000 (SGK Bài 47).'
  },
  {
    id: 3,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 0.5,
    text: 'Quan sát hình tròn tâm O bên dưới có bán kính dài 14 cm. Độ dài đường kính của hình tròn đó là:',
    illustration: {
      type: 'circle_radius_diameter',
      caption: 'Hình tròn tâm O có bán kính OA = 14 cm',
      data: { radiusText: '14 cm' }
    },
    options: ['28 cm', '7 cm', '14 cm', '56 cm'],
    answer: 0,
    explanation: 'Đường kính = bán kính × 2 = 14 × 2 = 28 (cm) (SGK Bài 53).'
  },
  {
    id: 4,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 0.5,
    text: 'Một hình vuông có cạnh dài 9 cm. Chu vi của hình vuông đó là:',
    options: ['36 cm', '81 cm²', '18 cm', '36 cm²'],
    answer: 0,
    explanation: 'Chu vi hình vuông = cạnh × 4 = 9 × 4 = 36 (cm) (SGK Bài 52).'
  },
  {
    id: 5,
    type: 'mcq',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'statistics',
    strandLabel: 'Xác suất và thống kê',
    points: 0.5,
    text: 'Quay một vòng quay may mắn có 4 phần bằng nhau ghi các số 2, 4, 6, 8. Sự kiện "Mũi tên dừng ở ô ghi số lẻ" là:',
    options: ['Không thể xảy ra', 'Có thể xảy ra', 'Chắc chắn xảy ra', 'Chắc chắn dừng ở số 2'],
    answer: 0,
    explanation: 'Vì các số 2, 4, 6, 8 đều là số chẵn, không có số lẻ nào nên sự kiện này "Không thể xảy ra" (SGK Bài 75).'
  },
  {
    id: 6,
    type: 'mcq',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Thương của phép chia 36 000 : 9 là:',
    options: ['4 000', '400', '40 000', '3 000'],
    answer: 0,
    explanation: '36 nghìn : 9 = 4 nghìn (4 000) (SGK Bài 68).'
  },
  {
    id: 7,
    type: 'mcq',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 0.5,
    text: 'Quan sát ca đong nước bên dưới có vạch chia dung tích ml. Lượng nước đang có trong ca đong là:',
    illustration: {
      type: 'beaker_cylinder',
      caption: 'Ca đong nước có các vạch 100ml, 200ml, 300ml, 400ml, 500ml'
    },
    options: ['350 ml', '300 ml', '400 ml', '250 ml'],
    answer: 0,
    explanation: 'Mực nước nằm chính giữa vạch 300 ml và 400 ml nên lượng nước là 350 ml (SGK Bài 32, 60).'
  },
  {
    id: 8,
    type: 'mcq',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Làm tròn số 82 459 đến hàng chục nghìn ta được số:',
    options: ['80 000', '90 000', '82 000', '82 500'],
    answer: 0,
    explanation: 'Chữ số hàng nghìn là 2 (< 5), ta giữ nguyên chữ số hàng chục nghìn là 8 và viết các số sau thành 0 -> 80 000 (SGK Bài 51).'
  },
  {
    id: 9,
    type: 'true_false',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Điền Đ (Đúng) hoặc S (Sai) vào mỗi câu sau (0,5 điểm):',
    items: [
      {
        statement: 'Muốn tính diện tích hình chữ nhật ta lấy chiều dài nhân với chiều rộng (cùng đơn vị đo).',
        isTrue: true
      },
      {
        statement: 'Một năm nhuận có 365 ngày.',
        isTrue: false
      },
      {
        statement: 'Tờ tiền mệnh giá 100 000 đồng đổi được 5 tờ tiền mệnh giá 20 000 đồng.',
        isTrue: true
      },
      {
        statement: '1 dm² = 100 cm².',
        isTrue: true
      }
    ],
    explanation: 'a) Đúng theo quy tắc diện tích HCN (SGK Bài 54). b) Sai vì năm nhuận có 366 ngày (tháng 2 có 29 ngày). c) Đúng vì 5 × 20 000 = 100 000. d) Đúng vì 1 dm² = 100 cm² (SGK Bài 59).'
  },
  {
    id: 10,
    type: 'matching',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'statistics',
    strandLabel: 'Xác suất và thống kê',
    points: 0.5,
    text: 'Nối các tháng ở cột A với số ngày tương ứng trong năm ở cột B (0,5 điểm):',
    leftItems: [
      { id: 'L1', text: 'Tháng 1, Tháng 3, Tháng 7, Tháng 12' },
      { id: 'L2', text: 'Tháng 4, Tháng 6, Tháng 9, Tháng 11' },
      { id: 'L3', text: 'Tháng 2 (năm thường)' }
    ],
    rightItems: [
      { id: 'R1', text: 'Có 30 ngày' },
      { id: 'R2', text: 'Có 31 ngày' },
      { id: 'R3', text: 'Có 28 ngày' }
    ],
    correctPairs: {
      'L1': 'R2',
      'L2': 'R1',
      'L3': 'R3'
    },
    explanation: '- Các tháng có 31 ngày: 1, 3, 5, 7, 8, 10, 12.\n- Các tháng có 30 ngày: 4, 6, 9, 11.\n- Tháng 2 năm thường có 28 ngày (SGK Bài 43).'
  },
  {
    id: 11,
    type: 'short_answer',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 0.5,
    text: 'Mua 4 quyển vở cùng loại hết 36 000 đồng. Hỏi mua 7 quyển vở như thế hết bao nhiêu tiền?',
    unit: 'đồng',
    placeholder: 'Nhập số tiền...',
    correctAnswers: ['63000', '63 000'],
    explanation: 'Giá tiền 1 quyển vở: 36 000 : 4 = 9 000 (đồng). Mua 7 quyển hết: 9 000 × 7 = 63 000 (đồng) (SGK Bài 71).'
  },
  {
    id: 12,
    type: 'short_answer',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 0.5,
    text: 'Một hình chữ nhật có chiều dài 15 cm, chiều rộng bằng 1/3 chiều dài. Diện tích của hình chữ nhật đó là:',
    unit: 'cm²',
    placeholder: 'Nhập số...',
    correctAnswers: ['75'],
    explanation: 'Chiều rộng: 15 : 3 = 5 (cm). Diện tích: 15 × 5 = 75 (cm²) (SGK Bài 54).'
  },
  {
    id: 13,
    type: 'written',
    level: 'Mức 1',
    levelLabel: 'Mức 1 (Nhận biết)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 1.0,
    text: '<strong>Bài 1: Đặt tính rồi tính (1,0 điểm):</strong><br/>a) 42 618 + 35 247 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) 85 430 - 39 125<br/>c) 12 308 × 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d) 36 480 : 4',
    explanation: '<strong>Bài giải:</strong><br/>' +
      'a) 42 618 + 35 247 = <strong>77 865</strong> (0,25 đ)<br/>' +
      'b) 85 430 - 39 125 = <strong>46 305</strong> (0,25 đ)<br/>' +
      'c) 12 308 × 5 = <strong>61 540</strong> (0,25 đ)<br/>' +
      'd) 36 480 : 4 = <strong>9 120</strong> (0,25 đ)',
    scoringCriteria: [
      { step: 'Cộng: 42 618 + 35 247 = 77 865', points: 0.25 },
      { step: 'Trừ: 85 430 - 39 125 = 46 305', points: 0.25 },
      { step: 'Nhân: 12 308 × 5 = 61 540', points: 0.25 },
      { step: 'Chia: 36 480 : 4 = 9 120', points: 0.25 }
    ]
  },
  {
    id: 14,
    type: 'written',
    level: 'Mức 2',
    levelLabel: 'Mức 2 (Thông hiểu)',
    strand: 'numbers',
    strandLabel: 'Số và phép tính',
    points: 1.0,
    text: '<strong>Bài 2 (Tính giá trị của biểu thức - 1,0 điểm):</strong><br/>' +
      'a) 45 000 - 15 000 : 3<br/>' +
      'b) (18 500 + 11 500) × 2',
    explanation: '<strong>Bài giải:</strong><br/>' +
      'a) 45 000 - 15 000 : 3 = 45 000 - 5 000 = <strong>40 000</strong> (0,5 đ)<br/>' +
      'b) (18 500 + 11 500) × 2 = 30 000 × 2 = <strong>60 000</strong> (0,5 đ)',
    scoringCriteria: [
      { step: 'Tính đúng biểu thức a (chia trước trừ sau): 45 000 - 5 000 = 40 000', points: 0.5 },
      { step: 'Tính đúng biểu thức b (trong ngoặc trước): 30 000 × 2 = 60 000', points: 0.5 }
    ]
  },
  {
    id: 15,
    type: 'written',
    level: 'Mức 3',
    levelLabel: 'Mức 3 (Vận dụng cao)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 1.0,
    text: '<strong>Bài 3 (Hình học & Đo lường - 1,0 điểm):</strong><br/>Một khu vườn hình chữ nhật có chiều dài 28 m, chiều rộng bằng nửa chiều dài.<br/>a) Tính chu vi của khu vườn hình chữ nhật đó.<br/>b) Người ta dùng lưới rào xung quanh khu vườn, chừa lại 2 m để làm cổng vào. Hỏi cần bao nhiêu mét lưới để rào kín khu vườn?',
    explanation: '<strong>Bài giải:</strong><br/>' +
      'a) Chiều rộng khu vườn là: 28 : 2 = 14 (m). (0,25 đ)<br/>' +
      'Chu vi khu vườn là: (28 + 14) × 2 = 84 (m). (0,25 đ)<br/>' +
      'b) Số mét lưới cần dùng để rào kín khu vườn là:<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;84 - 2 = 82 (m). (0,4 đ)<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Đáp số: a) 84 m; b) 82 m lưới. (0,1 đ)',
    scoringCriteria: [
      { step: 'Tính chiều rộng (14 m) và chu vi khu vườn (84 m)', points: 0.5 },
      { step: 'Tính số mét lưới rào (84 - 2 = 82 m) và ghi đáp số', points: 0.5 }
    ]
  },
  {
    id: 16,
    type: 'written',
    level: 'Mức 3',
    levelLabel: 'Mức 3 (Vận dụng cao - Tư duy mở thực tế)',
    strand: 'geometry',
    strandLabel: 'Hình học và đo lường',
    points: 1.0,
    isOpenEnded: true,
    text: '<strong>Bài 4 (Bài toán mở & Năng lực giải quyết vấn đề thực tiễn - 1,0 điểm):</strong><br/>Một gia đình có mảnh sân hình chữ nhật chiều dài 9 m, chiều rộng 4 m muốn lát gạch sân chơi cho con.<br/>' +
      'a) Tính diện tích của mảnh sân đó.<br/>' +
      'b) Mỗi mét vuông cần 4 viên gạch lát sân loại lớn (giá 45 000 đồng/viên). Em hãy tính tổng số viên gạch cần mua và tổng số tiền mua gạch để lát kín toàn bộ mảnh sân.',
    explanation: '<strong>Bài giải:</strong><br/>' +
      'a) Diện tích mảnh sân hình chữ nhật là:<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;9 × 4 = 36 (m²). (0,4 đ)<br/>' +
      'b) Tổng số viên gạch cần mua là:<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;36 × 4 = 144 (viên gạch). (0,3 đ)<br/>' +
      'Tổng số tiền mua gạch là:<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;144 × 45 000 = 6 480 000 (đồng). (0,2 đ)<br/>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Đáp số: a) 36 m²; b) 144 viên gạch và 6 480 000 đồng. (0,1 đ)',
    scoringCriteria: [
      { step: 'Tính đúng diện tích mảnh sân: 9 × 4 = 36 (m²)', points: 0.4 },
      { step: 'Tính đúng số lượng viên gạch (144 viên) và tổng số tiền (6 480 000 đ)', points: 0.6 }
    ]
  }
];

// Helper to get questions by semester and examId
export function getQuestions(semester: Semester, examId: ExamId = 'de1'): Question[] {
  if (semester === 'ky1') {
    return examId === 'de2' ? semester1Questions_de2 : semester1Questions_de1;
  } else {
    return examId === 'de2' ? semester2Questions_de2 : semester2Questions_de1;
  }
}

// Backward compatibility helper
export function getQuestionsBySemester(semester: Semester): Question[] {
  return getQuestions(semester, 'de1');
}

// Matrix helper per semester & exam
export function getMatrixSummary(semester: Semester, examId: ExamId = 'de1') {
  const currentQuestions = getQuestions(semester, examId);
  return {
    totalQuestions: currentQuestions.length,
    totalPoints: 10.0,
    levels: {
      m1: {
        label: 'Mức 1 (Nhận biết)',
        count: currentQuestions.filter(q => q.level === 'Mức 1').length,
        points: currentQuestions.filter(q => q.level === 'Mức 1').reduce((sum, q) => sum + q.points, 0),
        percentage: '40%'
      },
      m2: {
        label: 'Mức 2 (Thông hiểu / Kết nối)',
        count: currentQuestions.filter(q => q.level === 'Mức 2').length,
        points: currentQuestions.filter(q => q.level === 'Mức 2').reduce((sum, q) => sum + q.points, 0),
        percentage: '40%'
      },
      m3: {
        label: 'Mức 3 (Vận dụng / Tư duy mở)',
        count: currentQuestions.filter(q => q.level === 'Mức 3').length,
        points: currentQuestions.filter(q => q.level === 'Mức 3').reduce((sum, q) => sum + q.points, 0),
        percentage: '20%'
      }
    },
    strands: {
      numbers: {
        label: 'Số và phép tính',
        count: currentQuestions.filter(q => q.strand === 'numbers').length,
        points: currentQuestions.filter(q => q.strand === 'numbers').reduce((sum, q) => sum + q.points, 0),
        percentage: '55%'
      },
      geometry: {
        label: 'Hình học và đo lường',
        count: currentQuestions.filter(q => q.strand === 'geometry').length,
        points: currentQuestions.filter(q => q.strand === 'geometry').reduce((sum, q) => sum + q.points, 0),
        percentage: '35%'
      },
      statistics: {
        label: 'Xác suất và thống kê',
        count: currentQuestions.filter(q => q.strand === 'statistics').length,
        points: currentQuestions.filter(q => q.strand === 'statistics').reduce((sum, q) => sum + q.points, 0),
        percentage: '10%'
      }
    },
    formats: {
      mcq: currentQuestions.filter(q => q.type === 'mcq').length,
      trueFalse: currentQuestions.filter(q => q.type === 'true_false').length,
      matching: currentQuestions.filter(q => q.type === 'matching').length,
      shortAnswer: currentQuestions.filter(q => q.type === 'short_answer').length,
      written: currentQuestions.filter(q => q.type === 'written').length
    }
  };
}

export const getMatrixSummaryBySemester = (semester: Semester) => getMatrixSummary(semester, 'de1');
export const matrixSummary = getMatrixSummary('ky1', 'de1');
export const questions = semester1Questions_de1;
