import { VoteState, VoteAction } from './vote.types';

export const initialVoteState: VoteState = {
    votes: [],
    isLoading: false,
    error: null,
};

export const voteReducer = (state: VoteState, action: VoteAction): VoteState => {
    switch (action.type) {
        case 'FETCH_VOTES_START':
        case 'SUBMIT_VOTE_START':
            return { ...state, isLoading: true, error: null };
        case 'FETCH_VOTES_SUCCESS':
            return { ...state, isLoading: false, votes: action.payload };
        case 'SUBMIT_VOTE_SUCCESS':
            return { ...state, isLoading: false, votes: [...state.votes, action.payload] };
        case 'FETCH_VOTES_FAILURE':
        case 'SUBMIT_VOTE_FAILURE':
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};
