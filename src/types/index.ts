export interface Review {
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    imageUrl: string;
    images?: string[];
    category: string;
    sizes?: string[];
    badge?: 'NEW' | 'SALE' | 'HOT';
    inStock: boolean;
    reviews?: Review[];
}

export interface CartItem extends Product {
    cartKey?: string;
    quantity: number;
    selectedSize?: string;
}
