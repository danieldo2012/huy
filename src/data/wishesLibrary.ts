import type { WishTemplate } from '../types/card';

export const WISHES_LIBRARY: WishTemplate[] = [
  // ==========================================
  // DÀNH CHO MẸ (MOM) - 10+ MẪU PHONG PHÚ
  // ==========================================
  {
    id: 'mom-1',
    events: ['8-3', '20-10', 'mothers-day', 'other'],
    recipientTypes: ['mom'],
    tones: ['sincere'],
    lengths: ['medium'],
    emotions: ['gratitude', 'care'],
    title: 'Gửi Người Phụ Nữ Vĩ Đại Nhất',
    template: 'Cảm ơn Mẹ vì đã luôn là bến đỗ bình yên nhất che chở cho con trước mọi bão giông. Con chỉ mong Mẹ luôn khỏe mạnh, mỗi ngày trôi qua đều ngập tràn niềm vui và bình an.'
  },
  {
    id: 'mom-2',
    events: ['8-3', '20-10'],
    recipientTypes: ['mom'],
    tones: ['sweet'],
    lengths: ['short'],
    emotions: ['care', 'joy'],
    title: 'Chúc Mẹ Mãi Trẻ Trung & Rạng Rỡ',
    template: 'Nhân ngày đặc biệt hôm nay, con chúc Mẹ luôn xinh đẹp, nụ cười luôn nở trên môi và bớt lo toan vì chúng con nhé!'
  },
  {
    id: 'mom-3',
    events: ['mothers-day', '8-3', '20-10', 'birthday'],
    recipientTypes: ['mom'],
    tones: ['sincere'],
    lengths: ['long'],
    emotions: ['gratitude'],
    title: 'Biết Ơn Những Hy Sinh Thầm Lặng',
    template: 'Càng lớn lên và bước chân ra ngoài xã hội, con mới thấu hiểu hết những nhọc nhằn, hy sinh mà Mẹ đã trải qua vì con. Cảm ơn Mẹ đã dành cả cuộc đời nuôi nấng con nên người. Cả nhà mình yêu Mẹ nhiều lắm!'
  },
  {
    id: 'mom-4',
    events: ['8-3', '20-10'],
    recipientTypes: ['mom'],
    tones: ['cute', 'humorous'],
    lengths: ['medium'],
    emotions: ['joy'],
    title: 'Mẹ Là Số Một Trong Lòng Con',
    template: 'Chúc vị "nội tướng" quyền lực nhất gia đình một ngày lễ thật vui, nhận được thật nhiều hoa và quà! Hôm nay Mẹ cứ nghỉ ngơi thảnh thơi, mọi việc cứ để bố con con lo!'
  },
  {
    id: 'mom-5',
    events: ['birthday'],
    recipientTypes: ['mom'],
    tones: ['sincere'],
    lengths: ['medium'],
    emotions: ['gratitude', 'care'],
    title: 'Mừng Sinh Nhật Mẹ Yêu',
    template: 'Chúc mừng sinh nhật Mẹ yêu! Con không mong gì hơn ngoài việc Mẹ luôn có một sức khỏe dồi dào, tâm hồn luôn an nhiên và sống thật lâu bên con cháu.'
  },
  {
    id: 'mom-6',
    events: ['8-3', '20-10', 'mothers-day'],
    recipientTypes: ['mom'],
    tones: ['formal', 'sincere'],
    lengths: ['short'],
    emotions: ['gratitude'],
    title: 'Trọn Vẹn Lòng Hiếu Thảo',
    template: 'Kính chúc Mẹ một ngày lễ thật ý nghĩa, an khang trường thọ. Tình yêu thương và sự hy sinh của Mẹ là tài sản quý giá nhất đời con.'
  },
  {
    id: 'mom-7',
    events: ['other', 'mothers-day'],
    recipientTypes: ['mom'],
    tones: ['sweet'],
    lengths: ['medium'],
    emotions: ['care'],
    title: 'Nhắc Mẹ Yêu Bản Thân Hơn',
    template: 'Mẹ đã chăm sóc cho cả gia đình suốt bao năm qua rồi, từ nay Mẹ hãy dành nhiều thời gian hơn để chăm sóc cho chính mình Mẹ nhé. Bất cứ khi nào mệt mỏi, hãy nhớ rằng con luôn ở đây bên Mẹ.'
  },
  {
    id: 'mom-8',
    events: ['20-10', '8-3'],
    recipientTypes: ['mom'],
    tones: ['sincere'],
    lengths: ['long'],
    emotions: ['gratitude', 'encouragement'],
    title: 'Bông Hoa Đẹp Nhất Cuộc Đời Con',
    template: 'Dù ngoài kia có bao nhiêu điều mới lạ, đối với con, nơi ấm áp nhất vẫn là bữa cơm Mẹ nấu, là vòng tay dịu dàng của Mẹ. Chúc Mẹ của con một ngày lễ thật trọn vẹn và an lành.'
  },
  {
    id: 'mom-9',
    events: ['8-3', '20-10'],
    recipientTypes: ['mom'],
    tones: ['sweet'],
    lengths: ['short'],
    emotions: ['joy'],
    title: 'Nụ Cười Của Mẹ Là Nắng Ấm',
    template: 'Chỉ cần Mẹ cười vui mỗi ngày, thì ngày nào đối với con cũng là ngày lễ. Chúc Mẹ luôn bình an và hạnh phúc!'
  },
  {
    id: 'mom-10',
    events: ['birthday', 'other'],
    recipientTypes: ['mom'],
    tones: ['sincere'],
    lengths: ['medium'],
    emotions: ['gratitude'],
    title: 'Con Tự Hào Khi Là Con Của Mẹ',
    template: 'Cảm ơn cuộc đời đã cho con được làm con của Mẹ. Con cầu mong những điều dịu dàng và may mắn nhất sẽ luôn đồng hành cùng Mẹ trên mỗi chặng đường.'
  },

  // ==========================================
  // DÀNH CHO NGƯỜI YÊU / VỢ (LOVER) - 10+ MẪU
  // ==========================================
  {
    id: 'lover-1',
    events: ['8-3', '20-10'],
    recipientTypes: ['lover'],
    tones: ['romantic'],
    lengths: ['medium'],
    emotions: ['romance', 'care'],
    title: 'Gửi Em Bé Của Anh',
    template: 'Cảm ơn em đã bước vào cuộc đời anh, mang theo nụ cười rạng rỡ và sự dịu dàng sưởi ấm mọi ngóc ngách tâm hồn. Chúc cô gái nhỏ một ngày lễ ngập tràn hạnh phúc!'
  },
  {
    id: 'lover-2',
    events: ['8-3', '20-10', 'anniversary'],
    recipientTypes: ['lover'],
    tones: ['sweet'],
    lengths: ['short'],
    emotions: ['romance'],
    title: 'Bông Hoa Xinh Đẹp Nhất',
    template: 'Trong mắt anh, em luôn là bông hoa rực rỡ và đặc biệt nhất. Chúc em mãi giữ trọn nét hồn nhiên, đáng yêu và nụ cười tỏa nắng này nhé!'
  },
  {
    id: 'lover-3',
    events: ['anniversary', 'other'],
    recipientTypes: ['lover'],
    tones: ['romantic'],
    lengths: ['long'],
    emotions: ['romance', 'gratitude'],
    title: 'Hạnh Phúc Vì Có Em Bên Cạnh',
    template: 'Mỗi ngày trôi qua khi được cùng em chia sẻ những điều nhỏ nhặt đều là món quà vô giá với anh. Cảm ơn em vì đã cùng anh viết nên những kỷ niệm tuyệt đẹp. Mong rằng chúng ta sẽ mãi nắm chặt tay nhau như ngày đầu.'
  },
  {
    id: 'lover-4',
    events: ['8-3', '20-10'],
    recipientTypes: ['lover'],
    tones: ['cute', 'humorous'],
    lengths: ['medium'],
    emotions: ['joy', 'romance'],
    title: 'Công Chúa Hôm Nay Miễn Làm Việc!',
    template: 'Hôm nay là ngày của em, anh xin tình nguyện làm chân sai vặt, tài xế riêng và phục vụ mọi yêu cầu của "nóc nhà"! Chúc em luôn xinh đẹp, ăn ngon không béo và bớt giận dỗi anh nhé!'
  },
  {
    id: 'lover-5',
    events: ['birthday'],
    recipientTypes: ['lover'],
    tones: ['romantic'],
    lengths: ['medium'],
    emotions: ['romance', 'care'],
    title: 'Chúc Mừng Sinh Nhật Người Yêu',
    template: 'Chúc em tuổi mới ngày càng xinh đẹp, công việc thuận lợi và luôn cảm thấy được yêu thương trọn vẹn mỗi ngày. Anh luôn ở đây ủng hộ em trong mọi giấc mơ.'
  },
  {
    id: 'lover-6',
    events: ['8-3', '20-10'],
    recipientTypes: ['lover'],
    tones: ['sincere'],
    lengths: ['short'],
    emotions: ['care'],
    title: 'Dịu Dàng Dành Cho Em',
    template: 'Chúc em một ngày lễ bình yên, nhận được thật nhiều niềm vui. Hãy luôn nhớ rằng em xứng đáng với tất cả những điều tốt đẹp nhất trên đời này.'
  },
  {
    id: 'lover-7',
    events: ['anniversary'],
    recipientTypes: ['lover'],
    tones: ['sweet'],
    lengths: ['medium'],
    emotions: ['romance'],
    title: 'Kỷ Niệm Tình Yêu',
    template: 'Cảm ơn em vì đã cùng anh đi qua những ngày mưa lẫn ngày nắng. Dù thời gian có trôi đi bao lâu, tình yêu anh dành cho em vẫn vẹn nguyên và ngày một đong đầy hơn.'
  },
  {
    id: 'lover-8',
    events: ['other'],
    recipientTypes: ['lover'],
    tones: ['sweet'],
    lengths: ['short'],
    emotions: ['care'],
    title: 'Nhắn Nhủ Bất Ngờ',
    template: 'Không nhân dịp gì cả, chỉ là bất chợt nhớ em và muốn chúc em có một ngày thật vui vẻ, không áp lực và luôn mỉm cười!'
  },
  {
    id: 'lover-9',
    events: ['8-3', '20-10'],
    recipientTypes: ['lover'],
    tones: ['romantic'],
    lengths: ['long'],
    emotions: ['romance', 'encouragement'],
    title: 'Em Là Nguồn Động Lực Lớn Nhất',
    template: 'Có những ngày mệt mỏi, chỉ cần nhìn thấy em là anh cảm thấy mọi khó khăn đều tan biến. Chúc người con gái anh yêu luôn tự tin, tỏa sáng theo cách riêng của mình. Anh yêu em rất nhiều!'
  },
  {
    id: 'lover-10',
    events: ['birthday'],
    recipientTypes: ['lover'],
    tones: ['cute'],
    lengths: ['short'],
    emotions: ['joy'],
    title: 'Mừng Sinh Nhật Em Yêu',
    template: 'Sinh nhật vui vẻ nhé cô bé của anh! Chúc em tuổi mới xinh hơn, cười nhiều hơn và mãi là cô gái hạnh phúc nhất trần đời!'
  },

  // ==========================================
  // DÀNH CHO BẠN THÂN (BEST FRIEND) - 10+ MẪU
  // ==========================================
  {
    id: 'friend-1',
    events: ['8-3', '20-10'],
    recipientTypes: ['best-friend'],
    tones: ['cute', 'humorous'],
    lengths: ['medium'],
    emotions: ['joy'],
    title: 'Gửi Bạn Thân Cùng Cày Deadline',
    template: 'Chúc người bạn chí cốt một ngày lễ rực rỡ! Chúc mày sớm giàu, công việc suôn sẻ, lương về đầy ví và lúc nào cũng bao tao trà sữa nhé!'
  },
  {
    id: 'friend-2',
    events: ['8-3', '20-10'],
    recipientTypes: ['best-friend'],
    tones: ['sweet'],
    lengths: ['short'],
    emotions: ['care'],
    title: 'Luôn Tỏa Sáng Nhé Cô Bạn',
    template: 'Chúc cậu một ngày thật ngọt ngào, nhận được thật nhiều hoa và quà! Cảm ơn vì đã luôn ở bên lắng nghe tớ lảm nhảm suốt bao năm qua.'
  },
  {
    id: 'friend-3',
    events: ['birthday'],
    recipientTypes: ['best-friend'],
    tones: ['humorous'],
    lengths: ['medium'],
    emotions: ['joy'],
    title: 'Happy Birthday Cục Nợ Đáng Yêu',
    template: 'Chúc mừng sinh nhật bạn hiền! Thêm tuổi mới chúc mày bớt ngố, thêm xinh đẹp, sớm có bồ ngon nghẻ và mãi là đồng bọn tuyệt vời của tao!'
  },
  {
    id: 'friend-4',
    events: ['8-3', '20-10', 'other'],
    recipientTypes: ['best-friend'],
    tones: ['sincere'],
    lengths: ['long'],
    emotions: ['encouragement'],
    title: 'Tự Hào Về Mày Lắm Đới',
    template: 'Tao biết dạo này mày có nhiều áp lực và trăn trở, nhưng tao tin một cô gái kiên cường và giỏi giang như mày nhất định sẽ vượt qua tất cả. Cứ vững tin bước tiếp, tao luôn ở sau lưng mày bất cứ khi nào mày cần!'
  },
  {
    id: 'friend-5',
    events: ['8-3', '20-10'],
    recipientTypes: ['best-friend'],
    tones: ['cute'],
    lengths: ['short'],
    emotions: ['joy'],
    title: 'Mãi Mãi Xinh Đẹp',
    template: 'Chúc cậu ngày lễ ngập tràn niềm vui, xinh đẹp bất chấp camera thường và luôn giữ được tinh thần lạc quan đáng yêu này nha!'
  },
  {
    id: 'friend-6',
    events: ['anniversary', 'other'],
    recipientTypes: ['best-friend'],
    tones: ['sincere'],
    lengths: ['medium'],
    emotions: ['gratitude'],
    title: 'Tình Bạn Vàng Mười',
    template: 'Thật may mắn vì giữa muôn vàn người, tao lại tìm được một đứa bạn hợp cạ từ nết ăn đến nết chơi như mày. Cảm ơn vì đã làm thanh xuân của tao trở nên rực rỡ hơn rất nhiều.'
  },
  {
    id: 'friend-7',
    events: ['8-3', '20-10'],
    recipientTypes: ['best-friend'],
    tones: ['humorous'],
    lengths: ['short'],
    emotions: ['joy'],
    title: 'Chúc Nhanh Chóng Thoát Ế',
    template: 'Chúc bạn thân ngày lễ vui vẻ, sớm tìm được một anh người yêu vừa tâm lý vừa giàu để tao còn được ké ké vài bữa ăn ngon!'
  },
  {
    id: 'friend-8',
    events: ['other'],
    recipientTypes: ['best-friend'],
    tones: ['sweet'],
    lengths: ['short'],
    emotions: ['care'],
    title: 'Một Chút Vitamin Tích Cực',
    template: 'Gửi đến cậu một chút năng lượng dịu dàng! Dù hôm nay có bận rộn thế nào thì cũng nhớ ăn uống đầy đủ và nghỉ ngơi nhé.'
  },

  // ==========================================
  // DÀNH CHO CHỊ / EM GÁI (SISTER)
  // ==========================================
  {
    id: 'sister-1',
    events: ['8-3', '20-10'],
    recipientTypes: ['sister'],
    tones: ['sweet', 'cute'],
    lengths: ['medium'],
    emotions: ['care', 'joy'],
    title: 'Gửi Chị Gái / Em Gái Dễ Thương',
    template: 'Chúc người chị em ruột thịt của em/chị một ngày lễ thật vui vẻ! Chúc cho mọi dự định của chị/em đều thành hiện thực, ngày càng xinh đẹp và hạnh phúc!'
  },
  {
    id: 'sister-2',
    events: ['8-3', '20-10'],
    recipientTypes: ['sister'],
    tones: ['humorous'],
    lengths: ['short'],
    emotions: ['joy'],
    title: 'Bớt Bắt Nạt Tao Nhé!',
    template: 'Chúc mày ngày lễ ngập tràn quà cáp, xinh đẹp rạng ngời và bớt cãi nhau với tao lại! Cần gì cứ bảo, tao luôn sẵn sàng hỗ trợ.'
  },
  {
    id: 'sister-3',
    events: ['birthday'],
    recipientTypes: ['sister'],
    tones: ['sincere'],
    lengths: ['medium'],
    emotions: ['care', 'encouragement'],
    title: 'Mừng Tuổi Mới Em Gái Nhỏ',
    template: 'Chúc em gái tuổi mới ngày một trưởng thành, tự tin theo đuổi đam mê của mình. Hãy nhớ rằng gia đình luôn là chỗ dựa vững chắc nhất cho em.'
  },
  {
    id: 'sister-4',
    events: ['8-3', '20-10'],
    recipientTypes: ['sister'],
    tones: ['sincere'],
    lengths: ['long'],
    emotions: ['gratitude'],
    title: 'Cảm Ơn Vì Luôn Nhường Nhịn',
    template: 'Cảm ơn chị đã luôn là người chị tuyệt vời, che chở và chia sẻ mọi niềm vui nỗi buồn cùng em. Chúc chị luôn rạng ngời và sớm tìm được bến đỗ hạnh phúc trọn vẹn.'
  },

  // ==========================================
  // DÀNH CHO CÔ GIÁO (TEACHER)
  // ==========================================
  {
    id: 'teacher-1',
    events: ['8-3', '20-10', 'other'],
    recipientTypes: ['teacher'],
    tones: ['formal', 'sincere'],
    lengths: ['medium'],
    emotions: ['gratitude'],
    title: 'Tri Ân Người Gieo Mầm Tri Thức',
    template: 'Kính chúc Cô luôn dồi dào sức khỏe, tràn đầy nhiệt huyết và niềm vui trên bục giảng. Cảm ơn Cô vì những bài học quý giá và tấm lòng bao dung dành cho chúng em.'
  },
  {
    id: 'teacher-2',
    events: ['8-3', '20-10'],
    recipientTypes: ['teacher'],
    tones: ['sweet'],
    lengths: ['short'],
    emotions: ['care'],
    title: 'Kính Chúc Cô Mãi Tươi Trẻ',
    template: 'Kính chúc Cô một ngày lễ thật nhiều hoa tươi và lời chúc tốt lành. Mong Cô luôn giữ mãi ngọn lửa yêu nghề và nụ cười ấm áp!'
  },
  {
    id: 'teacher-3',
    events: ['8-3', '20-10'],
    recipientTypes: ['teacher'],
    tones: ['sincere'],
    lengths: ['long'],
    emotions: ['gratitude'],
    title: 'Biết Ơn Người Đưa Đò Thầm Lặng',
    template: 'Bao năm tháng trôi qua, công ơn dạy dỗ và sự chỉ bảo tận tình của Cô vẫn luôn là hành trang quý báu theo bước chân chúng em. Nhân ngày đặc biệt, chúng em xin gửi đến Cô lời tri ân sâu sắc nhất!'
  },

  // ==========================================
  // DÀNH CHO ĐỒNG NGHIỆP NỮ (COLLEAGUE)
  // ==========================================
  {
    id: 'colleague-1',
    events: ['8-3', '20-10'],
    recipientTypes: ['colleague'],
    tones: ['sweet', 'sincere'],
    lengths: ['short'],
    emotions: ['joy', 'encouragement'],
    title: 'Chúc Đồng Nghiệp Ngày Càng Thăng Tiến',
    template: 'Chúc bạn một ngày lễ ngập tràn niềm vui, công việc suôn sẻ, KPI đạt đỉnh và luôn giữ được tinh thần nhiệt huyết, rạng ngời!'
  },
  {
    id: 'colleague-2',
    events: ['8-3', '20-10'],
    recipientTypes: ['colleague'],
    tones: ['cute', 'humorous'],
    lengths: ['medium'],
    emotions: ['joy'],
    title: 'Cộng Sự Tuyệt Vời',
    template: 'Chúc chị em đồng nghiệp ngày lễ nhận quà mỏi tay, không lo deadline dí, tan làm đúng giờ và lúc nào cũng xinh tươi như hoa!'
  },
  {
    id: 'colleague-3',
    events: ['birthday'],
    recipientTypes: ['colleague'],
    tones: ['sincere'],
    lengths: ['short'],
    emotions: ['care'],
    title: 'Mừng Sinh Nhật Bạn Đồng Nghiệp',
    template: 'Chúc mừng sinh nhật cộng sự ăn ý! Chúc bạn tuổi mới thành công rực rỡ trong công việc và luôn ngập tràn niềm vui trong cuộc sống.'
  },

  // ==========================================
  // DÀNH CHO NGƯỜI ĐẶC BIỆT KHÁC (SPECIAL-OTHER)
  // ==========================================
  {
    id: 'special-1',
    events: ['8-3', '20-10', 'other'],
    recipientTypes: ['special-other'],
    tones: ['sweet'],
    lengths: ['medium'],
    emotions: ['care', 'free'],
    title: 'Gửi Đến Người Đặc Biệt',
    template: 'Gửi đến bạn những lời chúc bình an và dịu dàng nhất. Mong bạn luôn tìm thấy niềm vui trong những điều giản dị, được yêu thương và luôn nở nụ cười trên môi.'
  },
  {
    id: 'special-2',
    events: ['8-3', '20-10'],
    recipientTypes: ['special-other'],
    tones: ['sincere'],
    lengths: ['short'],
    emotions: ['care'],
    title: 'Chúc Bạn Một Ngày Thật Đẹp',
    template: 'Chúc bạn có một ngày lễ ngập tràn hạnh phúc, thảnh thơi và nhận được nhiều sự quan tâm từ những người xung quanh!'
  },
  {
    id: 'special-3',
    events: ['birthday', 'other'],
    recipientTypes: ['special-other'],
    tones: ['romantic', 'sweet'],
    lengths: ['medium'],
    emotions: ['romance'],
    title: 'Chút Yêu Thương Gửi Bạn',
    template: 'Có những điều dễ thương nên được nói ra. Chúc bạn luôn là phiên bản hạnh phúc nhất của chính mình, an yên giữa dòng đời vội vã.'
  }
];
