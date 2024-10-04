import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../index'

export const handleUpload = async (file: File): Promise<string> => {
    if (!file) {
      throw new Error('No file selected');
    }
  
    const storageRef = ref(storage, 'pdfs/' + file.name);
  
    try {
      const snapshot = await uploadBytes(storageRef, file);
      console.log('Uploaded a blob or file!');
      
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log('File available at', downloadURL);
      
      return 'File uploaded successfully!';
    } catch (error) {
      console.error('Upload failed', error);
      throw error;
    }
  };