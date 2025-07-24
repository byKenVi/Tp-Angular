import { Service } from './models/booking.interface';

export const SERVICES_DATA: Service[] = [
  {
    id: 'nutrition',
    title: 'Personalized nutrition plans',
    description: 'Empowering your balanced, fulfilling life.',
    price: 500,
    image: 'assets/images/nutrition.jpg',
    startPrice: 'Start from: $1,000',
    features: [
      'Customized Meal Plans',
      'Personalized to your unique dietary needs and preferences.',
      'Nutritional Guidance',
      'Expert advice to help you make healthy food choices.',
      'Adaptable Strategies',
      'Flexible plans that evolve with your progress.'
    ]
  },
  {
    id: 'weight',
    title: 'Weight management counseling',
    description: '',
    price: 1000,
    image: 'assets/images/weight.jpg',
    startPrice: 'Start from: $1,000',
    features: [
      'Personalized Weight Goals',
      'Customized plans to achieve realistic weight targets.',
      'Behavioral Support',
      'Strategies to build healthier eating habits.',
      'Sustainable Practices',
      'Long-term weight management techniques.'
    ]
  },
  {
    id: 'wellness',
    title: 'Health and wellness coaching',
    description: '',
    price: 800,
    image: 'assets/images/wellness.jpg',
    startPrice: 'Start from: $1,500',
    features: [
      'Holistic Health Assessment',
      'Evaluation of your overall well-being to create a balanced plan.',
      'Lifestyle Integration',
      'Strategies for incorporating healthy habits.',
      'Ongoing Motivation And Support',
      'Regular check-ins to track progress and adjust plans.'
    ]
  },
  {
    id: 'spiritual',
    title: 'Expand your spiritual knowledge',
    description: '',
    price: 1500,
    image: 'assets/images/spiritual.jpg',
    startPrice: 'Start from: $1,500',
    features: [
      'Mindfulness Techniques',
      'Practical methods to enhance your spiritual practice.',
      'Lifestyle Integration',
      'Practical tips for incorporating healthy habits.',
      'Inner Peace And Growth',
      'Focus on developing a deeper connection with your spiritual self.'
    ]
  }
];

export const TIME_SLOTS = [
  '08:00 am', '08:30 am', '09:00 am', '09:30 am',
  '10:00 am', '10:30 am', '11:00 am', '11:30 am',
  '12:00 pm', '12:30 pm', '01:00 pm', '01:30 pm',
  '02:00 pm', '02:30 pm', '03:00 pm', '03:30 pm',
  '04:00 pm'
];