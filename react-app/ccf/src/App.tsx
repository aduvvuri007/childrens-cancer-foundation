import { useState, ChangeEvent, useEffect } from 'react';
import './App.css';
import { 
  addApplicantUser, 
  addReviewerUser, 
  editApplicantUser, 
  editReviewerUser, 
  deleteApplicantUser, 
  deleteReviewerUser, 
  getApplicantUser, 
  getReviewerUser 
} from './functions/users';


function App() {
  // User management states
  const [userType, setUserType] = useState<'applicant' | 'reviewer'>('applicant');
  const [userId, setUserId] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userStatus, setUserStatus] = useState<string>('');

  // User management functions
  const handleAddUser = async () => {
    try {
      if (userType === 'applicant') {
        await addApplicantUser({
          userId,
          name: userName,
          email: userEmail,
          title: 'Dr.',
          institutionalAffiliation: 'Example University',
          principalInvestigator: 'Dr. Example',
          applyingFor: 'Research Grant',
          receivedPriorCCFFunding: false
        });
      } else {
        await addReviewerUser({
          userId,
          name: userName,
          email: userEmail,
          institutionalAffiliation: 'Example Hospital'
        });
      }
      setUserStatus(`${userType} user added successfully`);
    } catch (error) {
      console.error(`Error adding ${userType} user:`, error);
      setUserStatus(`Failed to add ${userType} user`);
    }
  };

  const handleEditUser = async () => {
    try {
      if (userType === 'applicant') {
        await editApplicantUser(userId, { name: userName, email: userEmail });
      } else {
        await editReviewerUser(userId, { name: userName, email: userEmail });
      }
      setUserStatus(`${userType} user updated successfully`);
    } catch (error) {
      console.error(`Error updating ${userType} user:`, error);
      setUserStatus(`Failed to update ${userType} user`);
    }
  };

  const handleDeleteUser = async () => {
    try {
      if (userType === 'applicant') {
        await deleteApplicantUser(userId);
      } else {
        await deleteReviewerUser(userId);
      }
      setUserStatus(`${userType} user deleted successfully`);
    } catch (error) {
      console.error(`Error deleting ${userType} user:`, error);
      setUserStatus(`Failed to delete ${userType} user`);
    }
  };

  const handleGetUser = async () => {
    try {
      let user;
      if (userType === 'applicant') {
        user = await getApplicantUser(userId);
      } else {
        user = await getReviewerUser(userId);
      }
      if (user) {
        setUserName(user.name);
        setUserEmail(user.email);
        setUserStatus(`${userType} user retrieved successfully`);
      } else {
        setUserStatus(`${userType} user not found`);
      }
    } catch (error) {
      console.error(`Error retrieving ${userType} user:`, error);
      setUserStatus(`Failed to retrieve ${userType} user`);
    }
  };

  return (
    <div className="App">
      <div>
        <h2>User data Firestore collections + functions demo</h2>
        <div>
          <label>
            User Type:
            <select value={userType} onChange={(e) => setUserType(e.target.value as 'applicant' | 'reviewer')}>
              <option value="applicant">Applicant</option>
              <option value="reviewer">Reviewer</option>
            </select>
          </label>
        </div>
        <div>
          <input 
            type="text" 
            placeholder="User ID" 
            value={userId} 
            onChange={(e) => setUserId(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Name" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={userEmail} 
            onChange={(e) => setUserEmail(e.target.value)} 
          />
        </div>
        <div>
          <button onClick={handleAddUser}>Add User</button>
          <button onClick={handleEditUser}>Edit User</button>
          <button onClick={handleDeleteUser}>Delete User</button>
          <button onClick={handleGetUser}>Get User</button>
        </div>
        <p>{userStatus}</p>
      </div>
    </div>
  );
}

export default App;
