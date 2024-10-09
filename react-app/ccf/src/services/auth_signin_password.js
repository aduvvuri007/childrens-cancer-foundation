import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from '../firebase_config/FireConfig'; // Assuming this initializes Firebase

const signInWithEmail = async (email, password) => {
    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        throw new Error('Failed to sign in');
    }
};

export { signInWithEmail };