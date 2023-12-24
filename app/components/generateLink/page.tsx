import React from 'react';
import axios from 'axios';


const GenerateLink = () => {
    const [title, setTitle] = useState('');

    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };

    const generateLink = async () => {
        try {
          const response = await axios.post('/api/buckets', { title });
          const { link } = response.data;
          // Do something with the generated link
        } catch (error) {
          console.error('Error:', error);
        }
      };

    const generateLink = async () => {
        try {
          const response = await axios.post('/api/buckets', { title });
          const { link } = response.data;
          // Do something with the generated link
        } catch (error) {
          console.error('Error:', error);
        }
      };


  return (
    <div>
      <h1>Generate Link</h1>
         <input type="text" value={title} onChange={handleTitleChange} />
      <button onClick={generateLink}>Generate Link</button>
    </div>
  )
}

export default GenerateLink