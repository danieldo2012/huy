import type { RecipientOption } from '../types/card';

export const RECIPIENTS: RecipientOption[] = [
  {
    id: 'mom',
    name: 'Mẹ',
    sampleSalutation: 'Mẹ yêu dấu',
    description: 'Người phụ nữ vĩ đại nhất, mang lại cho con bến đỗ bình yên nhất trên cuộc đời này.',
    iconName: 'Heart'
  },
  {
    id: 'lover',
    name: 'Người yêu / Bạn gái / Vợ',
    sampleSalutation: 'Em bé / Em yêu',
    description: 'Bông hoa xinh đẹp thắp sáng trái tim, mang lại nụ cười và sự dịu dàng mỗi ngày.',
    iconName: 'Flame'
  },
  {
    id: 'best-friend',
    name: 'Bạn thân',
    sampleSalutation: 'Mày / Cậu bạn thân mến',
    description: 'Chiếc hòm bí mật, người cùng cười đùa và đồng hành qua mọi thăng trầm thanh xuân.',
    iconName: 'Smile'
  },
  {
    id: 'sister',
    name: 'Chị / Em gái',
    sampleSalutation: 'Chị gái nhỏ / Bé con',
    description: 'Người đồng minh gắn bó ruột thịt, luôn đáng yêu và xứng đáng nhận mọi điều tốt lành.',
    iconName: 'Sparkles'
  },
  {
    id: 'teacher',
    name: 'Cô giáo',
    sampleSalutation: 'Kính gửi Cô giáo',
    description: 'Người gieo mầm tri thức, dìu dắt bằng cả sự tận tâm, lòng bao dung và tình thương.',
    iconName: 'GraduationCap'
  },
  {
    id: 'colleague',
    name: 'Đồng nghiệp nữ / Bạn cùng làm',
    sampleSalutation: 'Bạn đồng nghiệp quý mến',
    description: 'Cộng sự ăn ý, luôn truyền năng lượng tích cực và cùng vượt qua mọi deadline.',
    iconName: 'Coffee'
  },
  {
    id: 'special-other',
    name: 'Người đặc biệt khác',
    sampleSalutation: 'Người đặc biệt',
    description: 'Một tâm hồn dịu dàng mà bạn luôn trân trọng và muốn dành tặng một chút bất ngờ.',
    iconName: 'Send'
  }
];
