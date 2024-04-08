import { OfferType } from '../constant/types';

export const offers: OfferType[] = [
  {
    id: 34218,
    type: 'apartment',
    name: 'Modern Canal View Apartment in Amsterdam',
    description: 'Stylish, fully furnished apartment with canal view. Prime location. Perfect for urban living',
    price: 100,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    city: {
      id: 1,
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 12
      }
    },
    rating: 4.5,
    isPremium: false,
    preview: 'apartment-01.jpg',
    isFavorite: true,
    photos: ['room.jpg', 'apartment-01.jpg', 'apartment-02.jpg',
      'apartment-03.jpg', 'studio-01.jpg'],
    owner: {
      id: '1',
      name: 'John Doe',
      avatar: 'avatar-max.jpg',
      isPro: true,

    },
    bedrooms: 1,
    maxAdults: 2,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine'],
  },
  {
    id: 45984,
    type: 'hotel',
    name: 'Amsterdam Urban Hub Hotel',
    description: 'Central hotel with vibrant atmosphere, comfy beds, and social spaces. Ideal for budget-conscious travelers',
    price: 25,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    city: {
      id: 1,
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 12
      }
    },
    rating: 2.5,
    isPremium: false,
    preview: 'apartment-02.jpg',
    isFavorite: false,
    photos: ['room.jpg', 'apartment-01.jpg', 'apartment-02.jpg',
      'apartment-03.jpg', 'studio-01.jpg'],
    owner: {
      id: '3',
      name: 'David Johnson',
      avatar: 'avatar-max.jpg',
      isPro: true
    },
    bedrooms: 1,
    maxAdults: 2,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine'],
  },
  {
    id: 48738,
    type: 'hotel',
    name: 'Regal Retreat: Luxe Hotel in Central London',
    description: 'Elegant accommodations, impeccable service, and prime location for exploring London\'s iconic landmarks.',
    price: 200,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12
    },
    city: {
      id: 1,
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 12
      }
    },
    rating: 4,
    isPremium: true,
    preview: 'apartment-03.jpg',
    isFavorite: false,
    photos: ['room.jpg', 'apartment-01.jpg', 'apartment-02.jpg',
      'apartment-03.jpg', 'studio-01.jpg'],
    owner: {
      id: '2',
      name: 'Jane Smith',
      avatar: 'avatar-angelina.jpg',
      isPro: false
    },
    bedrooms: 1,
    maxAdults: 2,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine'],
  },
  {
    id: 30748,
    type: 'apartment',
    name: 'Charming London Flat: City Living at Its Finest',
    description: 'Cosy apartment in central London. Modern amenities, close to attractions, perfect for urban exploration',
    price: 123,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12
    },
    city: {
      id: 1,
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 12
      }
    },
    rating: 3,
    isPremium: false,
    preview: 'studio-01.jpg',
    isFavorite: true,
    photos: ['room.jpg', 'apartment-01.jpg', 'apartment-02.jpg',
      'apartment-03.jpg', 'studio-01.jpg'],
    owner: {
      id: '4',
      name: 'Emily Brown',
      avatar: 'avatar-angelina.jpg',
      isPro: false
    },
    bedrooms: 1,
    maxAdults: 2,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine'],
  }
];
