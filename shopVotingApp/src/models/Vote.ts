export interface Vote {
    id: string;
    userId: string;
    shopId: string;
    rating: number;
    comment?: string;
    createdAt: number; // Timestamp
}
