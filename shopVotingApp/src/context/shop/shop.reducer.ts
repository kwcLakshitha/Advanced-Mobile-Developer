import { ShopState, ShopAction } from './shop.types';

export const initialShopState: ShopState = {
    shops: [],
    isLoading: false,
    error: null,
};

export const shopReducer = (state: ShopState, action: ShopAction): ShopState => {
    switch (action.type) {
        case 'FETCH_SHOPS_START':
            return { ...state, isLoading: true, error: null };
        case 'FETCH_SHOPS_SUCCESS':
            return { ...state, isLoading: false, shops: action.payload };
        case 'FETCH_SHOPS_FAILURE':
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};
