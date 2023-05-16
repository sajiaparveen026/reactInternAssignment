import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const SecondPageComponent1 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'body', headerName: 'Body', width: 400 },
  ];

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'lightgray'}}>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={posts} columns={columns} pageSize={5} />
    </div>
    </div>
  );
};

export default SecondPageComponent1;
