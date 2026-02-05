export interface Shop {
    id: string;
    name: string;
    description: string;
    imageUrl?: string;
    rating: number; // Average rating
    voteCount: number;
    location?: string;
}
