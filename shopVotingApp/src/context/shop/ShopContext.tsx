import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { ShopState, ShopAction } from './shop.types';
import { shopReducer, initialShopState } from './shop.reducer';

interface ShopContextProps {
    state: ShopState;
    dispatch: React.Dispatch<ShopAction>;
}

const ShopContext = createContext<ShopContextProps | undefined>(undefined);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(shopReducer, initialShopState);

    return (
        <ShopContext.Provider value={{ state, dispatch }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => {
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error('useShop must be used within a ShopProvider');
    }
    return context;
};
