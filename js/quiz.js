// select all elements
const easy = document.getElementById("easy");
const difficult = document.getElementById("difficult");
const reload = document.getElementById("reload");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
  {
    question:
      "..... là một giai đoạn kiểm thử trong đó mô dun (đơn vị) riêng lẻ của một ứng dụng được kết hợp lại, giao tiếp dữ liệu giữa các mô dun này được kiểm tra",
    // imgSrc : "images/quiz/qblack.png",

    choiceA: "Kiểm Thử chấp nhận",
    choiceB: "Kiểm Thử hệ thống",
    choiceC: "Kiểm Thử tích hợp",
    choiceD: "Kiểm Thử đơn vị",
    correct: "C",
  },
  {
    question:
      "Phát biểu nào đúng về mối quan hệ giữa sai sót (error), lỗi (defect), hỏng hóc (failure)",
    // imgSrc : "images/quiz/qblack.png",
    choiceA: "Tất cả đều đúng",
    choiceB:
      "Một lỗi (defect) có thể không bao giờ bị kích hoạt do người dùng không dùng đến hay do cần thiết xảy ra nên hỏng hóc (failure) chưa xảy ra",
    choiceC:
      "Các dòng mã bị sai có thể được chia sửa hoặc bị vô hiệu hoá bởi những dòng mã tiếp theo",
    choiceD:
      "Các dòng mã (code) bị sai sot có thể không ảnh hưởng đến chức năng phần mềm, tức không gây ra lỗi",
    correct: "A",
  },
  {
    question:
      "Kiểm thử nào không được thử hiện mã lệnh (không chạy chương trình)",
    // imgSrc : "images/quiz/qblack.png",
    choiceA: "Kiểm cthử chức năng - hộp đen",
    choiceB: "Kiểm thử phi chức năng",
    choiceC: "Kiểm thử dựa vào cấu trúc (kiểm thử hộp trắng)",
    choiceD: "Kiểm thử tĩnh",
    correct: "D",
  },
  {
    question: "Ưu điểm của kiểm thử tự động so với kiểm thử thủ công là gì",
    // imgSrc : "images/quiz/qblack.png",
    choiceA:
      "Khó thưc hiện các tính toán phức tạp, ít khả năng tái sử dụng tốn nhiều thời gian kiểm thử, dễ sai sót hoặc nhầm lẫn của con người cần nhiều nhân lực hơn",
    choiceB:
      "Cần ít nhân lực có khả năng tái sử dụng, tăng mức độ bao phủ (test coverage) trong thời gian kiểm thử ngắn hơn, có độ tin cậy cao, có thể thự hiện song song nhiều ca kiểm thử (test case) nhanh",
    choiceC: "tất cả đều sai",
    choiceD:
      "Tốn thời gian phát biểu và bảo trì dự án kiểm thử, tốn chi phí mua công cụ (phần mềm kiểm thử ) cần cài đặt môi trường kiếm thử, sửa lỗi (gỡ rồi} cho tập lệnh kiểm thứ (test script) là vấn đề khó khăn ",
    correct: "B",
  },
  {
    question:
      "Chưa có đáp án) Tại sao kiểm thử tăng trưởng (incremetal testing) đc yêu thích hơn kiểm thử big bang",
    // imgSrc : "images/quiz/qblack.png",
    choiceA: "Thích hợp cho dự án nhỏ",
    choiceB: "Phải thực hiện nhiêu công việc hơn để kiểm thử một chương trình",
    choiceC: "Tất cả đều sai",
    choiceD:
      "Bởi vì kiểm thử tăng trưởng có khả năng sớm phát hiện, sàng lọc và cách ly lỗi tốt hơn",
    correct: "D",
  },
  {
    question: `Yếu tố chất lượng phần mềm nào của McCall được dùng để đáp ứng yêu cẳu sau đây?          
        lả việc kiểm thữ ở mức độ thắp nhất (các phương thức - method, hảm - function, lớp - class trong mã nguồn). Nỏ nhằm đảm bảo các thành phần này
        hoạt động đúng như yêu cảu. Việc tra ở giai đoạn này thưởng do chính các lập trinh viên (đeveloper) thực hiện trong quá trinh viết mã (coding).
        `,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: "Kiếm thử đơn ví",
    choiceB: "Kiếm thử hệ thống",
    choiceC: " Kiếm thử tích hợp",
    choiceD: "Kiếm thử chấp nhận",
    correct: "A",
  },
  {
    question: `... là một cách tiếp cận đế kiểm thử tích hợp, trong đó các mô-đun ở mức thấp nhất được kiểm tra trước, sau đó chúng được sử dụng để tạo điều kiện
        cho việc kiểm tra các mô-đun ở mức cao hơn. Quả trinh này được lặp lại cho đến khi mô-đun ở mức cao nhất được kiếm thử.`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: "Kiếm thứ từ trên xuõng (Top-down testing)",
    choiceB: " Kiếm thứ Big Bang",
    choiceC: "Kiếm thử tử dưới lên (Bottom-up testing)",
    choiceD: "Tất cả đêu đúng",
    correct: "C",
  },
  {
    question: "Các kỹ thuật kiếm thử höp đen bao gồm",
    // imgSrc : "images/quiz/qblack.png",
    choiceA: "Bao phủ câu lệnh, bao phủ nhánh",
    choiceB:
      "Phân vũng tương đương, phần tích giá trị biên, bảng quyết định, đõ thị chuyến đối trạng thải, và đoán lỗi",
    choiceC: "Bao phú vỗng lặp, bao phủ đưỡng đi cơ bản",
    choiceD: "Bao phù điều kiện, bao phú quyết định đa điều kiện",
    correct: "B",
  },
  {
    question:
      "Tai sao kiếm thừ tăng trưởng (Incremental testing] được yêu thích hơn kiếm thử Big Bang",
    // imgSrc : "images/quiz/qblack.png",
    choiceA: "Phải thực hiện nhiều công việc hơn đế kiếm thứ một chương trỉnh",
    choiceB: "Tất cả đều sai",
    choiceC:
      " Bởi vị kiếm thử tăng trưởng có khả năng sớm phát hiện, sảng lọc vả cách ly lỗi tốt hơn",
    choiceD: "Thích hợp cho dự án nhỏ",
    correct: "C",
  },
  {
    question: "Mối quan tâm chính của kiểm thử chấp nhận là",
    // imgSrc : "images/quiz/qblack.png",
    choiceA:
      "Kiếm thử hệ thống xem nó có vận hành tốt khi tích hợp với các hệ thống khác",
    choiceB: "Tìm lỗi trong hệ thống",
    choiceC:
      "Đảm bảo rằng hệ thống có thể chấp nhận được đổi với tất cả người dùng",
    choiceD:
      "Kiếm thử theo quan điểm công việc (xem các chức năng có đáp ứng công việc thực tế của người dùng thật sự không)",
    correct: "D",
  },
  {
    question:
      "Theo IEEE, đâu không phải là mảng hoạt đông của đảm bảo chất lượng (SQA}?",
    // imgSrc : "images/quiz/qblack.png",
    choiceA: "Đảm bảo chất lượng sản phẩm",
    choiceB: "Thiết lập (xây dựng) qui trình đảm bảo chất lượng phần mềm",
    choiceC: "Đảm bảo chất lượng qui trình",
    choiceD: "Đảm bảo chất lượng dịch vụ",
    correct: "D",
  },
  {
    question: `...... . là một loại kiểm thừ tích hợp mà tại đó các mô-đun phần mềm, cứng hoäc cả hai được tích hợp cùng mỗi lúc thánh một thánh phẩn hoặc một hệ
        thống tổng thể`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: "Kiếm thử tăng trưởng",
    choiceB: "Kiếm thử Big Bang",
    choiceC: "Kiếm thử HỘP ĐEN",
    choiceD: "Kiếm thử HỘP TRẮNG",
    correct: "B",
  },
  {
    question: `Phương pháp xét duyệt nào có sư tham gia của cán bổ cắp cao vả có mục tiêu chính là để dùng để phê duyệt các sản phẩm thiết kế?`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: "Thanh tra (Inspection)",
    choiceB: "Xét duyệt thiết kế hình thức",
    choiceC: "Tất cả đều đủng        ",
    choiceD: "Đi qua (Walkthrough)",
    correct: "B",
  },
  {
    question: `Một trường đầu vào lấy năm sinh từ 1900 đến 2021, phân tích giá trị biên (Boundary Value Analysis) chọn những giá trị nào cho trường này?`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: `1899, 1900, 2020, 2021, 1950`,
    choiceB: `Tất cả đều đúng`,
    choiceC: `1900, 1901, 2020, 2021, 1950`,
    choiceD: `1899, 1990, 2021, 2022, 1950`,
    correct: `D`,
  },
  {
    question: `
        Phương pháp xét duyệt nào có sự tham gia của cán bộ cấp cao và có mục tiêu chính là để dùng để phê duyệt các sản phẩm thiết kế?`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: `Xét duyệt thiết kế hình thức (Design review/DR)`,
    choiceB: `Thanh tra (Inspection)`,
    choiceC: `Tất cả đều đúng`,
    choiceD: `ĐI qua (Walkthrough)`,
    correct: `A`,
  },
  {
    question: `3 yếu tố chất lượng thường được quan tâm bởi các nhà phát triển nhưng ít được quan tâm từ phía khách hàng`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: `Tính khả chuyển, khả năng tái sử dụng, khả năng tương tác`,
    choiceB: `Tính khả chuyển, khả năng tái sử dụng, khả năng kiểm thử`,
    choiceC: `Tính chính xác, độ tin cậy, tính hiệu quả`,
    choiceD: `Độ tin cậy, tính hiệu quả, tính toàn vẹn`,
    correct: `B`,
  },
  {
    question: `
        … bao gồm cả hai tính năng của kiểm thử hộp đen và kiểm thử hộp trắng`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: `Kiểm thử hộp đen (Black box testing)`,
    choiceB: `Kiểm thử lai (Hybrid testing)`,
    choiceC: `Kiểm thử hộp trắng (White box testing)`,
    choiceD: `Tất cả đều sai`,
    correct: `D`,
  },
  {
    question: `
        Một đại lý bán hộp mực máy in.  Số lượng đặt hàng tối thiểu là 5. Có giảm giá 20% cho đơn hàng mua từ 100 hộp mực máy in trở lên. Dùng kỹ thuật Phân tích giá trị biên (Boundary Value Analysis), bạn được yêu cầu chuẩn bị các test case sử dụng các giá trị khác nhau cho số lượng hộp mực máy in đã đặt hàng. Nhóm đầu vào test case nào sau đây được dùng để kiểm thử cho trường hợp giá bán bình thường?`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: `5, 6, 99, 100, 50`,
    choiceB: `4, 5, 100, 101, 50`,
    choiceC: `5, 6, 100, 101, 50`,
    choiceD: `4, 5, 99, 100, 50`,
    correct: `D`,
  },
  {
    question: `
        Thành phần nào không nằm trong bốn thành phần mềm theo IEEE?`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: `Các thiết bị được dùng để cài đặt phần mềm`,
    choiceB: `Các dữ liệu cần thiết cho việc vận hành hệ thống phần mềm`,
    choiceC: `Các chương trình máy tính`,
    choiceD: `Các thủ tục và tài liệu`,
    correct: `A`,
  },
  {
    question: `
        Ưu điểm của Selenium so với các công cụ kiểm thử tự động khác như QuickTest Professional (QTP) và IBM RTF là gì?`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: `Thực hiện kiểm thử nhanh, chính xác, tốn ít nguồn lực con người để kiểm thử, hỗ trợ kiểm thử hồi quy, giúp kiểm thử thường xuyên, không cần nhân viên kiểm thử luôn có mặt tại máy tính khi kiểm thử đang chạy`,
    choiceB: `Mã nguồn mở, chi phí thấp, tốn ít tài nguyên phần cứng khi sử dụng, tương thích nhiều trình duyệt, hỗ trợ đa ngôn ngữ lập trình, thân thiện, hỗ trợ nhiều hệ điều hành`,
    choiceC: `Thiếu nhân viên hỗ trợ kỹ thuật, cần kinh nghiệm lập trình, chỉ kiểm thử cho ứng dụng web`,
    choiceD: `Chỉ chạy trên hệ điều hành Windows, không cần kinh nghiệm lập trình`,
    correct: `B`,
  },
  {
    question: `Trong …., mã lệnh (code) của chương trình sẽ được thực thi (chạy).`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: `Kiểm thử động (Dynamic testing)`,
    choiceB: `Kiểm thử tĩnh (Static testing)`,

    correct: `A`,
  },
  {
    question: `Mối quan tâm chính của kiểm thử chấp nhận là:`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: `Tìm lỗi trong hệ thống`,
    choiceB: `Kiểm thử hệ thống xem nó có vận hành tốt khi tích hợp với các hệ thống khác`,
    choiceC: `Kiểm thử theo quan điểm công việc (xem các chức năng có đáp ứng công việc thực tế của người dùng thật sự không)`,
    choiceD: `Đảm bảo rằng hệ thống có thể chấp nhận được đối với tất cả người dùng`,
    correct: `D`,
  },
  {
    question: `…. là hình thức kiểm thử mà kiểm thử viên biết được các cấu trúc bên trong của chương trình (mã nguồn, xử lý dữ liệu, …). Việc kiểm thử được dựa trên các phân tích về cấu trúc bên trong của các thành phần (hoặc hệ thống).`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: `Kiểm thử hộp đen`,
    choiceB: `Kiểm thử tích hợp`,
    choiceC: `Kiểm thử hộp đen`,
    choiceD: `Kiểm thử hộp trắng`,
    correct: `D`,
  },
  {
    question: `Lợi ích chính của việc thực hiện các hoạt động đảm bảo chất lượng (ví dụ, thanh tra) từ rất sớm trong vòng đời dự án là gì?`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: `Phát hiện sớm nhiều lỗi`,
    choiceB: `Tất cả đều đúng`,
    choiceC: `Giúp ngăn chặn các lỗi sẽ được đưa vào mã lệnh (code)`,
    choiceD: `Giúp gia tăng năng suất và giảm giá phát triển phần mềm`,
    correct: `B`,
  },
  {
    question: ` 

        Đâu không phải là mục đích chính của kiểm thử hồi qui?`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: `Để tiết kiệm công sức phải kiểm thử lại toàn bộ hệ thống`,
    choiceB: `Để đảm bảo các chức năng mới được thêm vào không có lỗi`,
    choiceC: `Để đảm bảo các ca kiểm thử (test case) mới không trùng với các ca kiểm thử cũ`,
    choiceD: `Để đảm bảo phiên bản mới của phần mềm không làm hỏng các chức năng đang hoạt động tốt`,
    correct: `C`,
  },
  {
    question: `Lỗi phần mềm (fault/defect/bug) được tìm và được ghi lại bởi ai (như là nhiệm vụ chính của mình)?`,
    // imgSrc : "images/quiz/qblack.png",
    choiceA: `Kiểm thử viên`,
    choiceB: `Khách hàng`,
    choiceC: `Lập trình viên`,
    choiceD: `Tất cả đều đúng`,
    correct: `A`,
  },
  {
    question: `Hiệu quả loại bỏ lỗi (Defect removal effectiveness): Nếu số lượng lỗi ở giai đoạn hiện tại (ví dụ, thiết kế) là 30 và hiệu quả lọc lỗi FE (Filtering Effectiveness) của hoạt động SQA ở giai đoạn này (ví dụ, thanh tra thiết kế) là 60%, thì bao nhiêu lỗi sẽ được loại bỏ, vầ bao nhiêu lỗi vẫn còn sot lại và di chuyển đến giai đoạn phát triển phần mềm tiếp theo.`,
    choiceA: `18; 12`,
    choiceB: `12; 18`,
    choiceC: `20; 10`,
    choiceD: `10; 20`,
    correct: `A`,
  },
  {
    question: `Kiểm thử nào trong các kiểm thử sau đây có khả năng hưởng lợi nhiều nhất từ việc sử dụng các công cụ kiểm thử (test tools); các công cụ này cung cấp phương tiện để thu thập kết quả kiểm thử và chạy lại kiểm thử?`,
    choiceA: `Kiểm thử tích hợp `,
    choiceB: `Kiểm thử hồi quy `,
    choiceC: `Kiểm thử chấp nhạn của người dùng `,
    choiceD: `Kiểm tra hệ thống `,
    correct: ` B`,
  },
  {
    question: `
        Các kỹ thuật kiểm thử hộp đen bao gồm: `,
    choiceA: `Bao phủ điều kiện, bao phủ quyết định đa điều kiện. `,
    choiceB: `Phân vùng tương đương, phân tích giá trị biên, bảng quyết định, đồ thị chuyển đổi trạng thái, và đoán lỗi. `,
    choiceC: `Bảo phủ vòng lặp, bao phủ đường đi cơ bản. `,
    choiceD: `Bao phủ câu lệnh, bao phủ nhánh. `,
    correct: `B `,
  },
  {
    question: `
        Trong quá trình kiểm thử một mô-đun, kiểm thử viên ‘X’ đã tìm thấy một lỗi và yêu cầu nhà phất triển sửa chữa nó. Nhưng nhà phát triển bác bỏ điều này, và nói rằng đó không phải là một lỗi. Kiểm thử viên ‘X’ nên làm gì?`,
    choiceA: `Tự đi sửa chữa lỗi đó `,
    choiceB: `Tất cả đều đúng `,
    choiceC: `Không làm gì cả `,
    choiceD: `Gửi cho nhà phát triển thông tin chi tiết về lỗi đã gặp và kiểm khả năng tái tạo tại lỗi đó `,
    correct: `D `,
  },
  {
    question: `Các giai đoạn kiểm thử (testing levels) nào thường được dùng trong mô hình V (V-model)`,
    choiceA: `Kiểm thử đơn vị, kiểm thử tích hợp, kiểm thử hệ thống và kiểm thử chấp nhận `,
    choiceB: `Kiểm thử tích hợp, kiểm thử hệ thống, kiểm thử chấp nhận và kiểm thử hồi quy `,
    choiceC: `Kiểm thử Alpha, kiểm thử Beta, kiểm thử hộp đen và kiểm thử hộp trắng `,
    choiceD: `Kiểm thử tăng trưởng, kiểm thử Big Bang, kiểm thử theo hướng dữ liệu (data-driven testing) `,
    correct: `A `,
  },
  {
    question: `Sự khác nhau giữa kiểm thử hộp đen và kiểm thử hộp trắng là gì?`,
    choiceA: `Kiểm thử hộp đen có bao phủ câu lệnh rộng hơn kiểm thử hộp trắng `,
    choiceB: `Kiểm thử hộp đen là kiểm thử chức năng; kiểm thử hộp trắng là kiểm thử cấu trúc `,
    choiceC: `Kiểm thử hộp đen chỉ có thể được thực hiện sau kiểm thử hộp trắng `,
    choiceD: `Kiểm thử hộp đen là chức năng; kiểm thử hộp trắng là kiểm thử phi chức năng `,
    correct: ` B`,
  },
  {
    question: `… là hình thức kiểm thử mà kiểm thử viên không cần biết đến cách thức hoạt động, mã nguồn, xử lý dữ liệu bên trong một thành phần (hoặc hệ thống). Công việc mà kiểm thử viên cần làm là nhập dữ liệu đầu vào (input) và kiểm tra kết quả trả về có đúng như mong muốn hay không.`,
    choiceA: `Kiểm thử tích hợp `,
    choiceB: `Kiểm thử hộp đen `,
    choiceC: `Kiểm thử đơn vị `,
    choiceD: `Kiểm thử hộp trắng `,
    correct: `B `,
  },

  {
    question: `
        Yếu tố chất lượng phần mềm nào của McCall được dùng để đáp ứng yêu cầu sau đây?
        
        Bảng điểm Tổng Hợp Điểm Học Kỳ Lớp được dùng bởi Cố Vấn học tập phải trình bày đầy đủ với dữ liệu mới nhất về thông tin của từng sinh viên. Các thông tin này bao gồm: danh sách tất cả các học phần mà sinh viên đã học trong học kỳ , điểm của từng học phần, số tín chỉ đã học trong học kỳ, điểm trung  bình chung học kỳ, điểm trung bình chung tích lũy, điểm trung bình chung bình năm học, và điểm rèn luyện.`,
    choiceA: `Độ tin cậy (Reliability) `,
    choiceB: `Tính toàn vẹn (Intergrity) `,
    choiceC: `Tính hiệu quả (Efficiency) `,
    choiceD: `Tính chính xác (Correctness) `,
    correct: `D`,
  },

  // {
  //     question : ``,
  //     choiceA : ` `,
  //     choiceB : ` `,
  //     choiceC : ` `,
  //     choiceD : ` `,
  //     correct : ` `
  // },

  // {
  //     question : ``,
  //     choiceA : ` `,
  //     choiceB : ` `,
  //     choiceC : ` `,
  //     choiceD : ` `,
  //     correct : ` `
  // },

  // {
  //     question : ``,
  //     choiceA : ` `,
  //     choiceB : ` `,
  //     choiceC : ` `,
  //     choiceD : ` `,
  //     correct : ` `
  // },

  // {
  //     question : ``,
  //     choiceA : ` `,
  //     choiceB : ` `,
  //     choiceC : ` `,
  //     choiceD : ` `,
  //     correct : ` `
  // },
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let countdif = 0;
let stt = 1;
// times easy
const questionTime = 80; // 10s
// tines difficult
const questionTimedif = 6; //6s

const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
const gaugeUnitdif = gaugeWidth / questionTimedif;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";

  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}
//Easy
easy.addEventListener("click", easyQuiz);
// reload.addEventListener("click", easyQuiz );
function reloadQuiz() {
  easy.style.display = "none";
  quiz.style.display = "block";
  scoreDiv.style.display = "none";

  const game = document.querySelector("#progg");
  while (game.firstChild) {
    game.removeChild(game.lastChild);
  }
}
// easy quiz
function easyQuiz() {
  easy.style.display = "none";
  document.getElementById("scoreContainer").style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    // progress.innerHTML += "<div class='prog'  id="  + qIndex+ "></div>";
    progress.innerHTML +=
      "<div class='prog'  id=" + qIndex + " >" + (qIndex + 1) + "</div>";
  }
}

// counter render
function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++;
  } else {
    count = 0;
    // change progress color to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// checkAnwer

function checkAnswer(answer) {
  console.log(questions[runningQuestion].correct);
  var dapan = "";

  if (questions[runningQuestion].correct == "A") {
    console.log(questions[runningQuestion].choiceA);
    dapan += questions[runningQuestion].choiceA;
  } else if (questions[runningQuestion].correct == "B") {
    console.log(questions[runningQuestion].choiceB);
    dapan += questions[runningQuestion].choiceB;
  } else if (questions[runningQuestion].correct == "C") {
    console.log(questions[runningQuestion].choiceC);
    dapan += questions[runningQuestion].choiceC;
  } else {
    console.log(questions[runningQuestion].choiceD);
    dapan += questions[runningQuestion].choiceD;
  }
  document.getElementById(
    "dapan"
  ).innerHTML = `<h3 class="dapandung">Đáp án câu trước đó: ${dapan}</h3>`;
  if (answer == questions[runningQuestion].correct) {
    // answer is correct

    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red

    answerIsWrong();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
   
    document.getElementById("date").style.display="block"
    document.getElementById("reload").style.display="block"
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "images/5.png" :
              (scorePerCent >= 60) ? "images/4.png" :
              (scorePerCent >= 40) ? "images/3.png" :
              (scorePerCent >= 20) ? "images/2.png" :
              "images/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
        
let currentDate = new Date()
var str= `${currentDate.getHours()}:${currentDate.getMinutes()} <br /> ${currentDate.getDate()}/${currentDate.getMonth() +1}/${currentDate.getFullYear()}`
    // scoreDiv.innerHTML += `<p>${scorePerCent} %</p>   `
    // scoreDiv.innerHTML += `<hr/> <p style="font-size:16px ">${str}</p>`
    document.getElementById("date").innerHTML=`<p style="">${str}</p>`
    document.getElementById("reload").innerHTML=`<p style="">Chơi lại</p>`
}


difficult.addEventListener("click", difficultQuiz );
//difficult quiz 
function difficultQuiz(){
    difficult.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounterdif();
    TIMER = setInterval(renderCounterdif,1000); // 1000ms = 1s
}

// counter render 2
function renderCounterdif(){
    if(countdif <= questionTimedif){
        counter.innerHTML = countdif;
        timeGauge.style.width = countdif * gaugeUnitdif + "px";
        countdif++;
    }else{
        countdif = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

















