import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const signUpWithEmail = async (email, password) => {
    const auth = getAuth();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        throw new Error('Failed to sign up');
    }
};

export { signUpWithEmail };