// Mock API Service for the Demo
export interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
}

export const PRODUCTS: Product[] = [
    { id: 1, name: 'Premium Watch', price: '$299', description: 'Elegant timepiece for professionals.', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'Wireless Headphones', price: '$199', description: 'Studio quality sound everywhere.', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'Sleek Laptop', price: '$1299', description: 'Power meets portability.', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400' },
    { id: 4, name: 'Minimalist Phone', price: '$799', description: 'Distraction-free communication.', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400' },
];

export const ApiService = {
    getProducts: async (): Promise<Product[]> => {
        await new Promise(res => setTimeout(res, 800)); // Simulate network lag
        return PRODUCTS;
    },
    getStats: async () => {
        await new Promise(res => setTimeout(res, 500));
        return {
            users: 1542,
            revenue: '$45,231',
            activeNow: 84
        };
    }
};
