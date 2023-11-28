import React, { useState } from 'react';
import { Button, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../HomePage.css'; // Make sure to update this CSS file as well

const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCreateFile = async () => {
        setLoading(true);
        try {
            const response = await axios.post('https://hz0aq1095f.execute-api.us-east-1.amazonaws.com/term-project/create');
            const fileId = response.data.fileId;
            navigate(`/${fileId}`);
        } catch (error) {
            console.error("Error creating file: ", error);
            message.error('Error creating file. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
    <div className="home-container">
      <h1 className="homepage-title">Collaborative Text Editor</h1>
      <h2 className="homepage-subtitle">Create, Edit, and Share Documents Seamlessly</h2>
      <p className="homepage-description">
        Jump right in and experience the ease of real-time collaborative editing. 
        Create a document and invite your team to collaborate instantly.
      </p>
      <Button 
        type="primary" 
        onClick={handleCreateFile}
        loading={loading}
        className="create-button"
      >
        Start Creating
      </Button>
    </div>
  );
};

export default HomePage;
