q
const questions = [
  {
    question: "Ngày Nhà giáo Việt Nam 20/11 được tổ chức hằng năm nhằm mục đích gì?",
    icon: "🌷",
    options: [
      "Tôn vinh nghề giáo và tri ân thầy cô",
      "Kỉ niệm ngày thành lập Đoàn",
      "Tôn vinh những nhà khoa học",
      "Kỉ niệm ngày thành lập trường học đầu tiên"
    ],
    answer: 0,
    explanation: "Ngày 20/11 là dịp để tôn vinh các nhà giáo và thể hiện lòng biết ơn đối với những người làm công tác giáo dục."
  },
  {
    question: "Ngày Nhà giáo Việt Nam 20/11 được chọn chính thức theo quyết định của Hội đồng Bộ trưởng vào năm nào?",
    icon: "📅",
    options: [
      "1945",
      "1958",
      "1982",
      "1990"
    ],
    answer: 2,
    explanation: "Ngày 28/9/1982, Hội đồng Bộ trưởng quyết định lấy ngày 20/11 hằng năm là Ngày Nhà giáo Việt Nam."
  },
  {
    question: "Ngày 20/11 được tổ chức lần đầu ở miền Bắc Việt Nam vào năm nào?",
    icon: "🗓️",
    options: [
      "1945",
      "1954",
      "1958",
      "1982"
    ],
    answer: 2,
    explanation: "Ngày 20/11/1958 là dịp kỉ niệm Ngày Quốc tế Hiến chương các nhà giáo lần đầu được tổ chức ở miền Bắc Việt Nam."
  },
  {
    question: "Trong câu tục ngữ “Không thầy đố mày làm nên”, câu nói nhấn mạnh điều gì?",
    icon: "📖",
    options: [
      "Vai trò của người học giỏi nhất lớp",
      "Vai trò hướng dẫn, dạy dỗ của người thầy",
      "Sự quan trọng của điểm số",
      "Việc học chỉ cần có sách"
    ],
    answer: 1,
    explanation: "Câu tục ngữ đề cao vai trò dạy dỗ, hướng dẫn của người thầy trong quá trình học tập và trưởng thành."
  },
  {
    question: "Bài hát “Bụi phấn” thường gợi nhắc đến hình ảnh nào?",
    icon: "🎵",
    options: [
      "Những chuyến đi xa",
      "Cánh đồng mùa gặt",
      "Người thầy bên bảng đen",
      "Ngày hội thể thao"
    ],
    answer: 2,
    explanation: "“Bụi phấn” là ca khúc quen thuộc viết về người thầy, hình ảnh bụi phấn và tình cảm của học trò."
  },
  {
    question: "Nhà giáo Chu Văn An nổi tiếng trong lịch sử Việt Nam bởi phẩm chất nào?",
    icon: "🏛️",
    options: [
      "Thanh liêm, chính trực và tận tâm với giáo dục",
      "Tài buôn bán và hàng hải",
      "Khả năng chế tạo vũ khí",
      "Tài sáng tác nhạc hiện đại"
    ],
    answer: 0,
    explanation: "Chu Văn An là nhà giáo tiêu biểu trong lịch sử Việt Nam, nổi tiếng về đức độ, sự chính trực và tinh thần dạy học."
  },
  {
    question: "Hành động nào thể hiện lòng biết ơn thầy cô một cách thiết thực nhất?",
    icon: "💌",
    options: [
      "Chỉ tặng quà vào ngày 20/11",
      "Thi đua hơn thua với các lớp khác",
      "Hứa thật nhiều nhưng không thực hiện",
      "Chăm chỉ học tập, lễ phép và biết sửa lỗi"
    ],
    answer: 3,
    explanation: "Lòng biết ơn không chỉ thể hiện qua quà tặng mà còn qua thái độ, sự cố gắng và hành động hằng ngày."
  },
  {
    question: "Trong hoạt động tri ân 20/11, món quà nào có thể mang ý nghĩa tinh thần sâu sắc?",
    icon: "🎁",
    options: [
      "Một món đồ đắt tiền nhưng không có lời nhắn",
      "Một lá thư chân thành kể về điều em học được từ thầy cô",
      "Một món quà chỉ để khoe với bạn bè",
      "Một lời chúc sao chép mà không hiểu nội dung"
    ],
    answer: 1,
    explanation: "Sự chân thành và những kỉ niệm cụ thể thường làm cho lời tri ân trở nên ý nghĩa hơn giá trị vật chất."
  },
  {
    question: "Khi chưa hiểu bài, cách ứng xử nào phù hợp nhất với tinh thần tôn trọng thầy cô?",
    icon: "💡",
    options: [
      "Im lặng và bỏ mặc kiến thức đó",
      "Chép đáp án của bạn mà không tìm hiểu",
      "Chủ động hỏi lại, lắng nghe và cố gắng luyện tập",
      "Cho rằng thầy cô có trách nhiệm giải quyết mọi việc"
    ],
    answer: 2,
    explanation: "Chủ động đặt câu hỏi và nỗ lực học tập giúp em tiến bộ, đồng thời thể hiện sự nghiêm túc với việc học."
  },
  {
    question: "Điều gì giúp kỉ niệm giữa thầy cô và học trò trở nên đáng nhớ ngay cả sau khi rời mái trường?",
    icon: "✨",
    options: [
      "Những bài học, sự quan tâm và tình cảm chân thành",
      "Chỉ những buổi lễ thật hoành tráng",
      "Việc luôn đạt điểm cao hơn mọi người",
      "Những món quà có giá trị lớn"
    ],
    answer: 0,
    explanation: "Kiến thức, sự dìu dắt và những tình cảm chân thành có thể trở thành hành trang quý giá theo học trò trên chặng đường sau này."
  }
];
      
