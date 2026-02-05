import { Shop } from '../../models/Shop';

export interface ShopState {
    shops: Shop[];
    isLoading: boolean;
    error: string | null;
}

export type ShopAction =
    | { type: 'FETCH_SHOPS_START' }
    | { type: 'FETCH_SHOPS_SUCCESS'; payload: Shop[] }
    | { type: 'FETCH_SHOPS_FAILURE'; payload: string };
