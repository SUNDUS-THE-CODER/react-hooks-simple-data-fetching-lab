import React, { useEffect, useState } from 'react'

const App = () => {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const fetchData = async () => {
        try {
            setLoading(true);
            let data = await fetch('https://dog.ceo/api/breeds/image/random');
            data = await data.json();
            setImage(data.message);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error.message);
        }
    }
    useEffect(() => {
      fetchData();
      return () => null;
    }, []);
  return (
    <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
    }}>
        {loading ? <p>Loading...</p> : (
            <img src={image} alt="A Random Dog" style={{ width: '400px', height: '400px' }} />
        )}
    </div>
  )
}

export default App