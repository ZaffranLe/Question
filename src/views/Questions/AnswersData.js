const answersData = [
    {
        id: 0,
        idQuestion: 0,
        name: "3 Nội dung"
    },
    {
        id: 1,
        idQuestion: 0,
        name: "4 Nội dung"
    },
    {
        id: 2,
        idQuestion: 0,
        name: "5 Nội dung"
    },
    {
        id: 3,
        idQuestion: 0,
        name: "6 Nội dung"
    },
    {
        id: 0,
        idQuestion: 1,
        name: "Chủ nghĩa tam dân"
    },
    {
        id: 1,
        idQuestion: 1,
        name: "Chủ nghĩa hồi giáo cực đoan"
    },
    {
        id: 2,
        idQuestion: 1,
        name: "Chủ nghĩa Mác - Lênin"
    },
    {
        id: 3,
        idQuestion: 1,
        name: "Chủ nghĩa quốc gia - dân tộc"
    },
    {
        id: 0,
        idQuestion: 2,
        name: "Xây dựng đường lối chính trị"
    },
    {
        id: 1,
        idQuestion: 2,
        name: "Củng cố lập trường chính trị"
    },
    {
        id: 2,
        idQuestion: 2,
        name: "Nâng cao bản lĩnh chính trị của Đảng viên"
    },
    {
        id: 3,
        idQuestion: 2,
        name: "Phát triển 1 chế độ chính trị hoàn toàn mới"
    },
    {
        id: 0,
        idQuestion: 3,
        name: "Tư tưởng lý luận"
    },
    {
        id: 1,
        idQuestion: 3,
        name: "Đạo đức"
    },
    {
        id: 2,
        idQuestion: 3,
        name: "Chính trị"
    },
    {
        id: 3,
        idQuestion: 3,
        name: "Văn hóa - Xã hội"
    },
    {
        id: 0,
        idQuestion: 4,
        name: "Nguyễn Sinh Cung sáng lập ra Đảng Cộng Sản Việt Nam"
    },
    {
        id: 1,
        idQuestion: 4,
        name: "Đảng chân chính cần phải có đạo đức"
    },
    {
        id: 2,
        idQuestion: 4,
        name: "Đảng cần thay đổi chính sách khi nước lâm nguy"
    },
    {
        id: 3,
        idQuestion: 4,
        name: "Đảng Cộng Sản Việt Nam là 1 đảng cầm quyền"
    },
    {
        id: 0,
        idQuestion: 5,
        name: "Phê bình và tự phê bình"
    },
    {
        id: 1,
        idQuestion: 5,
        name: "Tập thể thảo luận, cá nhân thực hiện"
    },
    {
        id: 2,
        idQuestion: 5,
        name: "Đoàn kết, thống nhất trong nội bộ Đảng"
    },
    {
        id: 3,
        idQuestion: 5,
        name: "Tập trung tư tưởng, cải thiện Đảng viên"
    },
    {
        id: 0,
        idQuestion: 6,
        name: "Vấn đề cấp thiết hiện nay"
    },
    {
        id: 1,
        idQuestion: 6,
        name: "Quy luật phát triển đất nước"
    },
    {
        id: 2,
        idQuestion: 6,
        name: "Quy luật tồn tại và phát triển của Đảng"
    },
    {
        id: 3,
        idQuestion: 6,
        name: "Vấn đề chiến lược quan trọng"
    },
    {
        id: 0,
        idQuestion: 7,
        name: "Đoàn kết thống nhất trong Đảng"
    },
    {
        id: 1,
        idQuestion: 7,
        name: "Tập trung mọi nguồn lực để xây dựng và phát triển"
    },
    {
        id: 2,
        idQuestion: 7,
        name: "Xây dựng chậm rãi, vững chắc"
    },
    {
        id: 3,
        idQuestion: 7,
        name: "Đoàn kết toàn dân, nâng cao tri thức"
    },
    {
        id: 0,
        idQuestion: 8,
        name: "Người cán bộ phải đủ tài và đức"
    },
    {
        id: 1,
        idQuestion: 8,
        name: "Người cán bộ cần có khả năng tận dụng những thứ sẵn có, nắm bắt cơ hội"
    },
    {
        id: 2,
        idQuestion: 8,
        name: "Công tác cán bộ là công tác gốc của Đảng"
    },
    {
        id: 3,
        idQuestion: 8,
        name: "Cán bộ là cái dây chuyền của bộ máy, là khâu trung gian nối liền Đảng, Nhà nước và nhân dân"
    },
    {
        id: 0,
        idQuestion: 9,
        name: "Cậy thế, tư túng"
    },
    {
        id: 1,
        idQuestion: 9,
        name: "Đặc quyền, đặc lợi"
    },
    {
        id: 2,
        idQuestion: 9,
        name: "Trái phép, chia rẽ, kiêu ngạo"
    },
    {
        id: 3,
        idQuestion: 9,
        name: "Tham ô, lãng phí, quan liêu"
    },
    {
        id: 0,
        idQuestion: 10,
        name: "3 Điểm"
    },
    {
        id: 1,
        idQuestion: 10,
        name: "4 Điểm"
    },
    {
        id: 2,
        idQuestion: 10,
        name: "5 Điểm"
    },
    {
        id: 3,
        idQuestion: 10,
        name: "6 Điểm"
    },
    {
        id: 0,
        idQuestion: 11,
        name: "Tư tưởng; Học thức; Đạo đức, lối sống"
    },
    {
        id: 1,
        idQuestion: 11,
        name: "Chính trị; Tư tưởng; Tổ chức; Đạo đức, lối sống."
    },
    {
        id: 2,
        idQuestion: 11,
        name: "Chính trị; Đạo đức, lối sống; phong cách làm việc; Tinh thần trách nhiệm."
    },
    {
        id: 3,
        idQuestion: 11,
        name: "Tri thức; Văn hóa; Tinh thần trung với Đảng, hiếu với dân"
    },
    {
        id: 0,
        idQuestion: 12,
        name: "Để chia đều quyền lực, tránh trường hợp tập quyền."
    },
    {
        id: 1,
        idQuestion: 12,
        name: "Để có thể tập hợp được nhiều kinh nghiệm của nhiều người; Để tăng khả năng khả năng nhìn nhận các mặt của 1 vấn đề."
    },
    {
        id: 2,
        idQuestion: 12,
        name: "Để tăng sự cạnh tranh giữa các thành viên trong Đảng, kích thích tiềm năng phát triển."
    },
    {
        id: 3,
        idQuestion: 12,
        name: "Cả 3 ý trên"
    },
    {
        id: 0,
        idQuestion: 13,
        name: "Tuyển chọn cán bộ"
    },
    {
        id: 1,
        idQuestion: 13,
        name: "Đào tạo, huấn luyện, bồi dưỡng cán bộ."
    },
    {
        id: 2,
        idQuestion: 13,
        name: "Tuyển dụng, săp xếp, bố trí cán bộ"
    },
    {
        id: 3,
        idQuestion: 13,
        name: "Thường xuyên kiểm tra sàng lọc cán bộ"
    },
    {
        id: 0,
        idQuestion: 14,
        name: "Là đạo đức cán bộ"
    },
    {
        id: 1,
        idQuestion: 14,
        name: "Là đạo đức cách mạng."
    },
    {
        id: 2,
        idQuestion: 14,
        name: "Là đạo đức toàn dân"
    },
    {
        id: 3,
        idQuestion: 14,
        name: "Là đạo đức người lãnh đạo"
    },
    {
        id: 0,
        idQuestion: 15,
        name: "Bộ phận chi bộ."
    },
    {
        id: 1,
        idQuestion: 15,
        name: "Bộ phận giám sát"
    },
    {
        id: 2,
        idQuestion: 15,
        name: "Bộ phận tại khu vực"
    },
    {
        id: 3,
        idQuestion: 15,
        name: "Tất cả các bộ phận"
    },
];
export default answersData;