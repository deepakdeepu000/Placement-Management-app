import React, { useState } from 'react';
import axios from 'axios';

function UploadForm({ setResult }) {
    const [video, setVideo] = useState(null);
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video', video);
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:5000/predict', formData);
            setResult(response.data.prediction);
        } catch (error) {
            console.error('Error uploading files', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} required />
            <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UploadForm;
