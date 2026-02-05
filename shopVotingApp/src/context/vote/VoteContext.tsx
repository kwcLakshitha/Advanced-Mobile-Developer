import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { VoteState, VoteAction } from './vote.types';
import { voteReducer, initialVoteState } from './vote.reducer';

interface VoteContextProps {
    state: VoteState;
    dispatch: React.Dispatch<VoteAction>;
}

const VoteContext = createContext<VoteContextProps | undefined>(undefined);

export const VoteProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(voteReducer, initialVoteState);

    return (
        <VoteContext.Provider value={{ state, dispatch }}>
            {children}
        </VoteContext.Provider>
    );
};

export const useVote = () => {
    const context = useContext(VoteContext);
    if (!context) {
        throw new Error('useVote must be used within a VoteProvider');
    }
    return context;
};
