import { ReviewType } from '../constant/types';

// Mock data for reviews
const reviews: ReviewType[] = [
  {
    id: 1,
    user: {
      id: '1',
      name: 'John Doe',
      avatar: 'avatar-max.jpg',
      isPro: true
    },
    offerId: 101,
    date: '2024-04-07',
    comment: 'Excellent service! The apartment was clean, spacious, and had a great view. The staff were friendly and helpful throughout our stay. Highly recommend!',
    rating: 5
  },
  {
    id: 2,
    user: {
      id: '2',
      name: 'Jane Smith',
      avatar: 'avatar-angelina.jpg',
      isPro: false
    },
    offerId: 102,
    date: '2024-04-06',
    comment: 'Disappointing experience. The hotel room was not as advertised - it was small and poorly maintained. Additionally, the staff were unprofessional and unhelpful.',
    rating: 2
  },
  {
    id: 3,
    user: {
      id: '3',
      name: 'David Johnson',
      avatar: 'avatar-max.jpg',
      isPro: true
    },
    offerId: 103,
    date: '2024-04-05',
    comment: 'Great value for money! The apartment was clean and comfortable, and the location was perfect for exploring the city. Will definitely stay here again.',
    rating: 4.5
  },
  {
    id: 4,
    user: {
      id: '4',
      name: 'Emily Brown',
      avatar: 'avatar-angelina.jpg',
      isPro: false
    },
    offerId: 104,
    date: '2024-04-04',
    comment: 'Fantastic hotel with top-notch amenities! The room was spacious and luxurious, and the staff went above and beyond to ensure our stay was perfect. Highly recommend!',
    rating: 5
  }
];

export default reviews;
