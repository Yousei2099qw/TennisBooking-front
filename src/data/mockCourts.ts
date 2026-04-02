// src/data/courts.ts

export type TimeSlot = {
  time: string;
  available: boolean;
};

export type Court = {
  id: string;
  name: string;
  type?: '室内' | '室外';
  price?: number; // 元 / 小时
  timeSlots: TimeSlot[];
};

export const mockCourts: Court[] = [
  {
    id: 'court-1',
    name: '中央公园 1 号场',
    type: '室外',
    price: 120,
    timeSlots: [
      { time: '09:00', available: true },
      { time: '10:00', available: false },
      { time: '11:00', available: true },
      { time: '12:00', available: true },
      { time: '13:00', available: true },
    ],
  },
  {
    id: 'court-2',
    name: '中央公园 2 号场',
    type: '室外',
    price: 100,
    timeSlots: [
      { time: '09:00', available: false },
      { time: '10:00', available: true },
      { time: '11:00', available: true },
      { time: '12:00', available: false },
      { time: '13:00', available: true },
    ],
  },
  {
    id: 'court-3',
    name: '市体育馆 A 场',
    type: '室内',
    price: 150,
    timeSlots: [
      { time: '09:00', available: true },
      { time: '10:00', available: true },
      { time: '11:00', available: true },
      { time: '12:00', available: false },
    ],
  },
];
``