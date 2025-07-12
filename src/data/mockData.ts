import { User, Item, DashboardStats } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150',
    joinDate: '2024-01-15',
    status: 'active',
    itemsListed: 12,
    swapsCompleted: 8
  },
  {
    id: '2',
    name: 'Mike Chen',
    email: 'mike.chen@email.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=150',
    joinDate: '2024-02-20',
    status: 'active',
    itemsListed: 6,
    swapsCompleted: 4
  },
  {
    id: '3',
    name: 'Emma Wilson',
    email: 'emma.w@email.com',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=150',
    joinDate: '2024-03-10',
    status: 'suspended',
    itemsListed: 3,
    swapsCompleted: 1
  }
];

export const mockItems: Item[] = [
  {
    id: '1',
    title: 'Vintage Denim Jacket',
    description: 'Classic blue denim jacket in excellent condition. Perfect for casual wear.',
    category: 'Jackets',
    size: 'M',
    condition: 'Excellent',
    images: ['https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?w=300'],
    user: mockUsers[0],
    status: 'pending',
    dateSubmitted: '2024-12-15',
    tags: ['vintage', 'denim', 'casual']
  },
  {
    id: '2',
    title: 'Designer Silk Blouse',
    description: 'Elegant silk blouse from a premium brand. Barely worn.',
    category: 'Tops',
    size: 'S',
    condition: 'Like New',
    images: ['https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?w=300'],
    user: mockUsers[1],
    status: 'approved',
    dateSubmitted: '2024-12-14',
    tags: ['designer', 'silk', 'formal']
  },
  {
    id: '3',
    title: 'Leather Boots',
    description: 'High-quality leather boots with minimal wear.',
    category: 'Shoes',
    size: '8',
    condition: 'Good',
    images: ['https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?w=300'],
    user: mockUsers[2],
    status: 'pending',
    dateSubmitted: '2024-12-13',
    tags: ['leather', 'boots', 'winter']
  }
];

export const mockStats: DashboardStats = {
  totalUsers: 2847,
  totalItems: 12456,
  pendingItems: 89,
  swapsCompleted: 5623,
  monthlyGrowth: 12.5,
  activeUsers: 1897
};