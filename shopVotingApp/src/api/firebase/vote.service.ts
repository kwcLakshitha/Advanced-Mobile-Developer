// import { db } from './firebase.config';
// import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const voteService = {
    submitVote: async (voteData: any) => {
        // return addDoc(collection(db, 'votes'), voteData);
        console.log('Submit vote', voteData);
        return Promise.resolve(voteData);
    },
    getVotesForShop: async (shopId: string) => {
        // const q = query(collection(db, 'votes'), where('shopId', '==', shopId));
        // return getDocs(q);
        console.log('Get votes for shop', shopId);
        return Promise.resolve([]);
    }
};
