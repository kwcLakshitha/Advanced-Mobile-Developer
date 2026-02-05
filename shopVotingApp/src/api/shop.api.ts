// import { db } from './firebase/firebase.config';
// import { collection, getDocs } from 'firebase/firestore';

export const shopApi = {
    getAllShops: async () => {
        // const snapshot = await getDocs(collection(db, 'shops'));
        // return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return Promise.resolve([
            { id: '1', name: 'Coffee Shop 1', description: 'Best coffee', rating: 4.5, voteCount: 10 },
            { id: '2', name: 'Coffee Shop 2', description: 'Okay coffee', rating: 3.5, voteCount: 5 },
        ]);
    }
};
