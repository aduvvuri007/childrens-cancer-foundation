import  { useState, ChangeEvent } from 'react';
import './App.css';
import { handleUpload } from './functions/storage';


function App() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const onUpload = async () => {
    if (!file) {
      setUploadStatus('Please select a file first!');
      return;
    }

    try {
      setUploadStatus('Uploading...');
      const result = await handleUpload(file);
      setUploadStatus(result);
      setFile(null);
    } catch (error) {
      console.error('Upload failed', error);
      setUploadStatus('Upload failed. Please try again.');
    }
  };

  return (
    <div className="App">
      <p>Cloud Storage Demo (Ryan and Tara):</p>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={onUpload}>Upload PDF</button>
      <p>{uploadStatus}</p>
    </div>
  );
}

export default App;
