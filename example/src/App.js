import React, { Component } from 'react'

import MasspaVoucherCarousel from 'masspa-voucher-carousel'


let data=[
  {
    arrBranch: '["38c1046a-3927-4638-a107-1dd061988b74"]',
    code: "16E43E458DD",
    createdAt: 1573097068765,
    description: "",
    discount: 899000,
    endedDate: 1573096921831,
    imageGallery: "[]",
    imgVoucher: null,
    itemTime: 0,
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    shortDescription: "Bảo Hành TRọn Đời ",
    startedDate: 1573096921831,
    times: 1,
    title: "Triệt Lông Vùng Nách Công Nghệ Diode Laser ",
    type: "value",
    updatedAt: 1572950930634
  },
  {
    arrBranch: '["38c1046a-3927-4638-a107-1dd061988b74"]',
    code: "16E39D5984A",
    createdAt: 1572923835562,
    description: "<p></p>↵",
    discount: 199000,
    endedDate: 1575088087270,
    imageGallery: "[]",
    imgVoucher: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572928328809.jpg",
    itemTime: 60,
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    shortDescription: "Mụn & thâm! Không còn là một nỗi lo âu nếu bạn điều trị đúng cách, đúng thời điểm, đúng nơi.",
    startedDate: 1572928087270,
    times: 1,
    title: "CHỈ 199K DA SẠCH MỤN, MỜ THÂM, NGĂN NGỪA MỤN ",
    type: "value",
    updatedAt: 1572923835562
  }
  ,
  {
    arrBranch: '["38c1046a-3927-4638-a107-1dd061988b74"]',
    code: "16E39E424D4",
    createdAt: 1572923835562,
    description: "<p><span>- Bí quyết làm đẹp cùng liệu pháp Sakura phép màu cho làn da trắng tuyết căng bóng mịn mướt.</span></p>↵<p><span >- Hấp trắng hồng da mặt cao cấp Sakura Nhật Bản</span></p>↵<p><span > - Detox thải độc sâu lỗ.chân.lông siêu bóng da</span></p>↵<p><span > - Căng mướt trắng hồng da cùng mặt nạ Sakura</span></p>↵<p><span > - Kích collagen tăng đàn hồi da công nghệ Biolight</span></p>↵<p><span > - Massage lưu thông mạch máu trẻ hoá làn da</span></p>↵<p><span > - ĐIện di mát lạnh serum collagen Thuỵ Sỹ se khít lỗ.chân.lông</span></p>↵<p><span >- Đây là liệu pháp bí truyền của nội địa Nhật Bản từ thời hoàng cung xưa bao gồm nhựa hoa anh đào, cánh hoa anh đào tươi và hoàng kỳ, dịch yến và thạch #collagen giúp thẩm thấu nhanh qua da như 1 liệu pháp giúp da bạn TRẮNG HỒNG sáng mịn căng mọng đến bất ngờ ngay LẦN ĐẦU TIÊN trải nghiệm kết hợp điện di lạnh Cryo Stamp thâm nhập cân bằng mô da kết hợp #collagen sống Thuỵ Sỹ giúp da c.ă.n.g b.óng mịn mướt.</span></p>↵<p><span >- Phương pháp này không chỉ giúp cho các bạn muốn có làn da trắng hồng rạng rỡ, #Dasạmđenkhôngđềumàu, còn mang đến hiệu quả hơn mong đợi với:</span></p>↵<p><span >- Cung cấp vitamin A,B,E, cung cấp độ ẩm căng mướt nhất </span></p>↵<p><span >#Sekhítlỗchânlông và giảm #cháynắng cực tốt </span></p>↵<p><span >- Tăng sinh collagen tự thân tái tạo sâu từ mao mạch giúp collagen kết dính tái tạo lại cấu trúc #hưtổn, #lãohóa từ môi trường và tác động của thời gian. Lấy lại làn da tươi trẻ #bóngmượtmịnmàng như em bé chỉ sau 75 phút trải nghiệm.</span></p>↵",
    discount: 399000,
    endedDate: 1575088869406,
    imageGallery: '["https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572929950666.jpg"]',
    imgVoucher: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572929281862.jpg",
    itemTime: 60,
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    shortDescription: "Chỉ 399K (Gốc 8̶̶0̶̶0̶̶K̶)",
    startedDate: 1572928869406,
    times: 1,
    title: "[CHỈ 399K] - SAKURA FACIAL PHƯƠNG THỨC BÍ TRUYỀN NHẬT BẢN",
    type: "value",
    updatedAt: 1572929952119
  },
  {
    arrBranch: '["38c1046a-3927-4638-a107-1dd061988b74"]',
    code: "16E39ECEF04",
    createdAt: 1572923835562,
    description: "<p><span >- Chỉ 399K ( gốc 80̶̶0̶̶k̶ )</span></p>↵<p><span >- Tắm siêu trắng body cao cấp bật tone ngay lần đầu tiên.</span></p>↵<p><span > - Detox thải độc siêu mịn da</span></p>↵<p><span > - Ủ dược mộc mix collagen sống Thuỵ Sỹ</span></p>↵<p><span > - Hấp siêu kích trắng hồng da công nghệ Châu Âu</span></p>↵<p><span > - Thoa lotion tuyết thạch USA cấp ẩm, mướt da</span></p>↵<p><span >- Nguyên liệu: Từ 36 loài hoa mộc cung đình Hàn Quốc làm trắng nhất, sâm quý thượng hạng kết hợp collagen sống Thuỵ Sỹ, hạt Orimi Nhật Bản tự vỡ thẩm thấu dưỡng chất nuôi dưỡng da.</span></p>↵<p><span >- Công dụng:</span></p>↵<p><span > Bổ sung dưỡng chất và chống oxy hoá cho da. Cấp nước khoá ẩm sâu giúp da căng mướt. Detox da xoá thâm, loại bỏ sắc tố melanin mang đến làn da rạng ngời mà không bị bắt nắng ngen.</span></p>↵<p></p>↵",
    discount: 399000,
    endedDate: 1575089789288,
    imageGallery: '["https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572929899274.jpg"]',
    imgVoucher: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572929858305.jpg",
    itemTime: 60,
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    shortDescription: "- Hãy ghé Kim Spa ngay lúc này Muốn da trắng như  ngen cả nhà ơi.",
    startedDate: 1572929789287,
    times: 1,
    title: "[399K] - SIÊU TRẮNG HỒNG BODY BẠCH VỊ HOÀNG CUNG",
    type: "value",
    updatedAt: 1572929986966
  }
  ,
  {
    arrBranch: '["38c1046a-3927-4638-a107-1dd061988b74"]',
    code: "16E3A3BDCD6",
    createdAt: 1572923835562,
    description: "<p><span > (Giá gốc 800K)</span></p>↵<p><span > - Áp dụng: Chỉ 49 nàng đăng ký nhanh nhất</span></p>↵<p>&nbsp;</p>↵<p><span >- Liệu pháp đánh tan mỡ bụng thon gọn vòng eo với tinh chất ốc sên thiên nhiên:</span></p>↵<p><span > - Massage cơ học giảm béo làm cho mô mỡ mềm kết hợp tinh chất ốc sên tan mỡ có độ nóng vừa phải giúp nhẹ nhàng đốt cháy lượng mỡ thừa tích tụ.</span></p>↵<p><span > - Đắp nạ bụng thực vật đại dương giúp cân bằng nhiệt và giúp làn da mịn màng, săn chắc hơn.</span></p>↵<p><span > - Quấn đai nóng ngái cứu đốt mỡ thừa thần tốc</span></p>↵<p><span > - Ấn nguyệt thải mỡ bài tiết qua đường nước tiểu </span></p>↵<p><span >- Cam kết giảm mỡ bụng:</span></p>↵<p><span > + Không tốn thời gian, công sức đi tập gym</span></p>↵<p><span > + Không mệt mỏi</span></p>↵<p><span > + Không đau</span></p>↵<p><span >- Lưu ý: Massage bụng mỗi ngày chỉ sau 5 - 10 lần giảm 5-7 cm</span></p>↵",
    discount: 399000,
    endedDate: 1575094967400,
    imageGallery: '["https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572935048431.jpg"]',
    imgVoucher: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572935030471.jpg",
    itemTime: 60,
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    shortDescription: "GIẢM NGAY 5-7cm SAU LIỆU TRÌNH",
    startedDate: 1572934967400,
    times: 1,
    title: "[CHỈ 399K] - LIỆU PHÁP ĐIÊU KHẮC ĐƯỜNG CONG NÓNG BỎNG ",
    type: "value",
    updatedAt: 1572935049817
  },
  {
    arrBranch: '["38c1046a-3927-4638-a107-1dd061988b74"]',
    code: "16E3A3DD2AA",
    createdAt: 1572923835562,
    description: "<p><span >Tặng: Cấy mô HA nhập khẩu Korea điêu khắc gương mặt chuẩn tỷ lệ vàng trị giá 30.000.000 ( 30 triệu )</span></p>↵<p><span >Hifu Ultherapy - Công nghệ nâng cơ, xoá nhăn, tạo mặt V-line, gọt hàm, xóa rãnh nhăn không phẫu thuật “không xâm lấn” số 1 Hoa Kỳ được FDA chứng nhận và hơn 60 quốc gia trên thế giới áp dụng thành công.</span></p>↵<p><span >Phương pháp HIFU là giải pháp hoàn hảo cho mọi cá nhân mong muốn điều chỉnh độ săn chắc, đàn hồi tại vùng da mặt và cổ mà không phải phẫu thuật.</span></p>↵<p><span >Phương pháp HIFU giúp đẩy lùi các dấu hiệu lão hóa, làm căng, đều mầu và săn chắc da bằng cách tập trung vào các cấu trúc da bị lão hóa từ sâu bên trong.</span></p>↵<p><span >Vậy HIFU là gì? High Intensity Focused Ultrasound, là một điều trị y khoa không xâm lấn, áp dụng sóng siêu âm tập trung cường độ cao nhằm tạo nhiệt tác động tại vùng điều trị, đem lại hiệu quả nâng và căng da. Với HIFU, bạn có thể hạn chế cảm giác khó chịu của việc nghỉ dưỡng, đồng thời cảm nhận quá trình nâng da bên trong và hiệu quả căng da trông thấy ở bên ngoài. Và số shoot tiêu chuẩn quốc tế cho 1 gương mặt là 600-650 shoot.</span></p>↵<p><span >��</span><span >Tại Mỹ, các ngôi sao hàng đầu như Sandra Bullock ở tuổi 52, Jennifer Lopez ở tuổi 47 hay vợ cũ Brad Pitt, Jennifer Aniston ở tuổi 48 đều vẫn quyến rũ và căng tràn sức sống.</span></p>↵<p><span >��</span><span > Tại Việt Nam, Diva Mỹ Linh, NSND Thu Hiền, Ca sĩ Việt Hoàn, MC Nguyên Khang và hàng ngàn ngôi sao khác ngày càng trẻ đẹp rạng rỡ hơn tuổi thật.</span></p>↵<p><span >Trị liệu Hifu Ultherapy giúp bạn:</span></p>↵<p><span >✔</span><span > Lấy lại 5-10 năm thanh xuân.</span></p>↵<p><span >✔</span><span > Nâng cung chân mày tự nhiên &amp; mí mắt sụp.</span></p>↵<p><span >✔</span><span > Xóa hoàn toàn bọng mỡ mắt, gọn hàm, xóa tan nọng cằm</span></p>↵<p><span >✔</span><span > Xóa rãnh nhăn vùng mũi - má, đuôi mắt, vết chân chim</span></p>↵<p><span >✔</span><span > Làm căng và săn chắc da, thu nhỏ lỗ chân lông.</span></p>↵<p><span >✔</span><span > Hiệu quả ngày càng rõ rệt sau trị liệu.</span></p>↵<p><span >✔</span><span > Được chứng nhận hiệu quả tương đương phẫu thuật</span></p>↵<p><span >-------------------------------------</span></p>↵<p><span >�</span><span > KIM SPA</span></p>↵<p><span >CAM KẾT:</span></p>↵<p><span >✅</span><span >Máy nhập khẩu từ USA</span></p>↵<p><span >✅</span><span >100% trị liệu HIFU được thực hiện bởi chuyên viên giàu kinh nghiệm.</span></p>↵<p><span >✅</span><span >Cam kết hiệu quả sau 1 lần duy nhất thực hiện.</span></p>↵<p><span >✅</span><span >Cam kết Authentic Hifu FDA chứng nhận.</span></p>↵<p><span >✅</span><span > Đội ngũ chuyên viên được đào tạo bài bản bởi chuyên gia thẩm mỹ.</span></p>↵<p><span >-------------</span><span >✪✪✪✪✪</span><span >-------------</span></p>↵<p><span >�</span><span >100% Số người comment SĐT vào đây sẽ NHẬN NGAY ƯU ĐÃI CAM KẾT KHỦNG NHẤT SÀI GÒN</span></p>↵<p><span >❣</span><span > Đạt tỉ lệ khách hàng hài lòng cao nhất 98%</span></p>↵<p><span >❣</span><span > Thực hiện nhiều ca trị liệu Ultherapy nhất (hơn 1000 ca)</span></p>↵<p>&nbsp;</p>↵<p><span >�</span><span >Với tiêu chuẩn spa chất lượng về dịch vụ và sản phẩm thiên nhiên 100% nhập khẩu từ Mỹ - hàn - được các chuyên gia - bác.sĩ thẩm định tiêu chuẩn và đạt hiệu quả điều trị cho hơn 15.000 khách hàng đến và điều trị tại KIM SPA.</span></p>↵",
    discount: 15000000,
    endedDate: 1575095057359,
    imageGallery: '["https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572935174783.jpg"]',
    imgVoucher: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572935159068.jpg",
    itemTime: 60,
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    shortDescription: " 25 TRIỆU GIẢM 10 TRIỆU CHỈ CÒN 15 TRIỆU‼",
    startedDate: 1572935057359,
    times: 1,
    title: "Trọn gói trẻ hoá toàn diện gương mặt Hifu Ultherapy ( 600-650 shoot )‼",
    type: "value",
    updatedAt: 1572935176034
  },
  {
    arrBranch: '["38c1046a-3927-4638-a107-1dd061988b74"]',
    code: "16E3A3F087A",
    createdAt: 1572923835562,
    description: "<p><span >�</span><span >Từ lâu tại Bắc Kinh, TRỊ LIỆU ĐÔNG Y kết hợp ấn nguyệt, massage thuốc thảo dược nóng và đắp thuốc thảo dược lên các khớp là bài thuốc chữa bệnh từ nguồn gốc thiên nhiên nâng cao được khả năng trị liệu kích hoạt năng lực tự chữa lành của cơ thể thông qua hệ kinh lạc theo nguyên lý Âm – Dương.</span></p>↵<p><span >�</span><span >Bấm huyệt trị liệu có tác dụng giúp giải phóng những đau nhức, căng thẳng của cơ thể và tâm trí, điều hoà chức năng của các cơ quan nội tạng bên trong cơ thể, nâng cao hệ miễn dịch, tăng cường thể lực, tăng cường dinh dưỡng và phòng ngừa bệnh tật. </span></p>↵<p><span >Bấm huyệt trị liệu Bắc Kinh được giới y học cổ truyền đánh giá là một phương pháp chữa trị hiệu quả và an toàn số 1 thế giới.</span></p>↵<p><span >Massage ấn nguyệt đả thông đi mạch </span></p>↵<p><span >Massage đá nóng núi lửa bazan kết hợp thuốc trị liệu đông y làm nóng người đả thông lục phủ ngũ tạng giúp thông máu, thấp khớp, trí não thư giãn.</span></p>↵<p><span >Đắp thuốc trị liệu đông y làm mịn da, ấm người sau liệu trình. </span></p>↵<p><span >�</span><span >Nguyên liệu dùng để trị liệu: Ngưu hoàng, Xạ hương, Hoàng liên, Uất kim, Chi tử, Hoàng linh, Tê giác hoặc Thuỷ tê giác, Trân châu (Ngọc trai tây tạng), Hoàng liên, Chu sa, Hùng hoàng, Hoàng cầm, Sơn chi, Băng phiến, Mật ong, Gừng đen, Bạc hà.</span></p>↵<p><span >�</span><span >Thành phần Xạ hương có tính chất lưu thông khai khiếu cực mạnh, làm cho khả năng khôi phục ý thức tốt hơn, tri giác phục hồi nhanh, và có chức năng thông mạch, Thủy tê giác, Hoàng cầm, Sơn chi, Hoàng liên .... thanh nhiệt an thần trấn kinh cực mạnh, giải phóng độc tố sâu bên trong. Vậy nên bài thuốc này giúp giảm mệt mỏi, đau nhức, thấp khớp, đột quỵ cực kì hiệu quả, hồi phục thể lực nâng cao một cách tự nhiên</span></p>↵",
    discount: 399000,
    endedDate: 1575095179489,
    imageGallery: '["https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572935252246.jpg"]',
    imgVoucher: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572935238412.jpg",
    itemTime: 60,
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    shortDescription: " - TRỊ LIỆU ĐÔNG Y BẮC KINH - ĐẢ THÔNG KINH MẠCH - NÃO BỘ",
    startedDate: 1572935179489,
    times: 1,
    title: "[399K] MASSAGE BODY",
    type: "value",
    updatedAt: 1572935253568
  },
  {
    arrBranch: '["38c1046a-3927-4638-a107-1dd061988b74"]',
    code: "16E3A4052CE",
    createdAt: 1572923835562,
    description: "<p><span >Trọn gói chỉ 15.000.000 ( không phát sinh thêm phí )</span></p>↵<p><span >( giá gốc 30.000.000 ) </span></p>↵<p><span > - Kim spa là nơi đi đầu về công nghệ trị sẹo rỗ không xâm lấn, sẹo đầy lên thấy rõ không xâm lấn không đau đớn không nghỉ dưỡng không cắt đáy sẹo không laser. Bất chấp sẹo rỗ lâu năm nhất.</span></p>↵",
    discount: 15000000,
    endedDate: 1575095256821,
    imageGallery: "[]",
    imgVoucher: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572935323253.jpg",
    itemTime: 60,
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    shortDescription: "KHUYẾN MÃI 50% CHO CẢ LIỆU TRÌNH",
    startedDate: 1572935256821,
    times: 1,
    title: "ĐIỀU SẸO RỖ VỚI 4.990.000 CHO LẦN ĐẦU TIÊN TRẢI NGHIỆM",
    type: "value",
    updatedAt: 1572935545508
  },
  {
    arrBranch: '["38c1046a-3927-4638-a107-1dd061988b74"]',
    code: "16E3A449FF7",
    createdAt: 1572923835562,
    description: "<p><span >�</span><span >Ưu đãi K.H.Ủ.N.G dành cho 10 khách đầu tiên đăng kí </span><span >�</span></p>↵<p><span >Chỉ 15 triệu trọn gói 5 lần ( giá gốc 30 triệu )</span></p>↵<p><span >----------------------------------------</span></p>↵<p><span >Các tế bào mỡ bị phân hủy và sẽ bị đào thải dần theo hệ bài tiết mồ hôi và đường tiểu.</span></p>↵<p><span >Hiệu quả giảm rõ sau 1 lần thực hiên.</span></p>↵<p><span >#Không_phẩu_thuật</span></p>↵<p><span >#Không_đau</span></p>↵<p><span >#Không_gây_mê</span></p>↵<p><span >#Không_cần_nghỉ_dưỡng</span></p>↵<p><span >#Không_tác_dụng_phụ</span></p>↵<p><span >=====================</span></p>↵<p><span >❓</span><span >Bạn muốn đi hút mỡ nhưng lại sợ dao kéo, sợ đau, sợ để lại di chứng, và bạn đang tìm cách giảm mỡ nhanh, hiệu quả, an toàn, tiết kiệm thời gian. Công nghệ đông lạnh mỡ Cryolipolysis chính là giải pháp hoàn hảo dành cho bạn.</span></p>↵<p><span >==============</span></p>↵<p><span >�</span><span >Công nghệ Cryolipolysis do hãng Zeltiq (Mỹ) sản xuất và đã được Cục Quản lý Thực, Dược phẩm của Mỹ (US FDA) cấp giấy chứng nhận chất lượng về độ an toàn và hiệu quả cao trong việc giảm mỡ, giúp thon gọn nhiều vùng trên cơ thể như eo, bụng, đùi, bắp tay, bắp chân... Được rất nhiều ngôi sao Hollywood và cả thế giới tin dùng.</span></p>↵<p>&nbsp;</p>↵<p><span >�</span><span >Khi điều trị, thiết bị sẽ tác động vào từng vùng mỡ thừa làm đông lạnh làm chết các tế bào mỡ, từ đó dẫn đến phân hủy, đào thải mỡ qua đường tự nhiên mà không cần phải phẫu thuật, không cần phải “hút mỡ”, không dùng đến kim tiêm, không gây hại da, không làm tổn thương đến các dây thần kinh và mạch máu chung quanh.</span></p>↵<p>&nbsp;</p>↵<p><span >�</span><span >Tự hào là spa đi tiên phong về phong cách làm đẹp từ nguyên liệu thiên nhiên nâng cao sức khỏe đầu tiên tại Việt Nam.</span></p>↵",
    discount: 15000000,
    endedDate: 1575095549911,
    imageGallery: '["https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572935621437.jpg"]',
    imgVoucher: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572935605136.jpg",
    itemTime: 60,
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    shortDescription: "Giảm béo Quang Đông Mỡ Cryolipolysis Không Phẩu Thuật",
    startedDate: 1572935549911,
    times: 1,
    title: "VÓC DÁNG THON GỌN - ĐƯỜNG CONG HOÀN HẢO",
    type: "value",
    updatedAt: 1572935623326
  },
  {
    arrBranch: '["38c1046a-3927-4638-a107-1dd061988b74"]',
    code: "16E34667686",
    createdAt: 1572600286228,
    description: "<p><span >COMBO THƯ GIÃN TRỊ LIỆU KHOẺ &amp; ĐẸP CHỈ 499K</span></p>↵<p><span > TẶNG: CHUYÊN SÂU THƯ GIÃN VÙNG MẮT</span></p>↵<p><span > Em còn thiếu ngủ, trong những lần phải chạy deadline ???</span></p>↵<p><span > Em quên ăn quên uống, quên cả việc  chải lại tóc tai ???</span></p>↵<p><span >Hãy thử cảm nhận sự tuyệt vời dù chỉ một lần nhé các nàng ơi. Sau những giờ làm việc mệt mỏi căng thẳng được thả mình vào không gian thiên nhiên tươi mát tận hưởng những phút giây thư giãn được chăm sóc nhẹ nhàng nâng niu và được đôi bàn tay khéo léo massage trị liệu sự căng cơ nhức mỏi khôi phục nguồn năng lượng tự nhiên thì vô cùng tuyệt vời đúng không ạ?!�</span></p>↵<p><span >Combo thư giãn trị liệu Khoẻ &amp; Đẹp sẽ chăm sóc kỹ lưỡng bạn từ da mặt đến body và Kim spa còn tặng kèm cho khách chuyên sâu giảm thâm vùng mắt nữa đó nha.</span><span >�</span></p>↵<p><span >Chăm sóc da mặt chuyên sâu với liệu pháp cung cấp collagen sống Thuỵ Sĩ căng bóng khoá ẩm với công nghệ Hàn Quốc (75'): Điện di lạnh Cryo Stamp thâm nhập cân bằng mô da, thu nhỏ lỗ_chân_lông nuôi dưỡng da từ sâu bên trong giúp da căng bóng mịn mướt, săn chắc tăng đàn hồi, trẻ hoá làn da. Đắp mặt nạ #Collagen tái tạo và duy trì độ ẩm giúp da căng mọng nước. Massage thư giãn làm hồng da, ấn huyệt lưu thông tuần hoàn máu . Kích thích làn da sáng rạng rỡ hồng hào và trông tươi tắn tràn đầy sức sống.</span></p>↵<p><span >Trị liệu body Đông Dược Dưỡng Sinh (90’): Từ lâu tại Bắc Kinh, TRỊ LIỆU DƯỠNG SINH PHƯƠNG PHÁP ĐÔNG Y BÍ TRUYỀN kết hợp ấn huyệt, massage dược liệu và đắp thuốc thảo dược là bài thuốc chữa bệnh từ nguồn gốc thiên nhiên giúp kích hoạt nguồn năng lượng tự chữa lành của cơ thể thông qua hệ kinh lạc theo nguyên lý Âm – Dương. Bấm huyệt trị liệu có tác dụng giúp giải phóng những đau nhức, căng thẳng của cơ thể và tâm trí, điều hoà chức năng của các cơ quan nội tạng bên trong cơ thể, tăng cường thể lực, phòng ngừa bệnh tật. Bấm huyệt trị liệu Bắc Kinh được giới y học cổ truyền đánh giá là một phương pháp chữa trị hiệu quả và an toàn số 1 thế giới.</span></p>↵",
    discount: 499000,
    endedDate: 1575083050998,
    imageGallery: '["https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572837507782.jpg"]',
    imgVoucher: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/voucher/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1572837159101.jpg",
    itemTime: 75,
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    shortDescription: "KHUYẾN MÃI SIÊU TO KHỔNG LỒ CỦA KIM SPA ĐÂY RỒI ",
    startedDate: 1572577443420,
    times: 1,
    title: "Đông Dượ Bắc Kinh ",
    type: "value",
    updatedAt: 1572937622182
  }
]

export default class App extends Component {
  render () {
    return (
      <div>
        <MasspaVoucherCarousel  vouchers={data} />
      </div>
    )
  }
}
