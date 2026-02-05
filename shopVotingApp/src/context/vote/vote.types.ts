import { Vote } from '../../models/Vote';

export interface VoteState {
    votes: Vote[];
    isLoading: boolean;
    error: string | null;
}

export type VoteAction =
    | { type: 'FETCH_VOTES_START' }
    | { type: 'FETCH_VOTES_SUCCESS'; payload: Vote[] }
    | { type: 'FETCH_VOTES_FAILURE'; payload: string }
    | { type: 'SUBMIT_VOTE_START' }
    | { type: 'SUBMIT_VOTE_SUCCESS'; payload: Vote }
    | { type: 'SUBMIT_VOTE_FAILURE'; payload: string };
