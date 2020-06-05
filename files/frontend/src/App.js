import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    // const url = await uploadFile(file);

    const data = new FormData();
    data.append('name', name);
    data.append('file', file, file.name);

    await axios({
      method: 'POST',
      baseURL: 'http://localhost:8000',
      url: '/',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data,
    });
  }

  // async function uploadFile(file) {
  //   const data = new FormData();
  //   data.append('file', file, file.name);
  //   data.append('upload_preset', 'lesson-preset');

  //   const res = await axios({
  //     method: 'POST',
  //     baseURL: 'https://api.cloudinary.com/v1_1/simonmir',
  //     url: '/image/upload',
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     },
  //     data
  //   });

  //   return res.data.url;
  // }

  function readFile(file) {
    const reader = new FileReader();
    reader.onload = e => setImage(e.target.result);
    reader.readAsDataURL(file);
  }

  function handleImage(e) {
    console.log(e.target.files[0])
    readFile(e.target.files[0]);
    // uploadFile(e.target.files[0]);
    setFile(e.target.files[0]);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="file">name</label>
          <input
            type="file"
            accept="image/*"
            name="file"
            id="file"
            onChange={handleImage}
          />
        </fieldset>
        <button>Create</button>
      </form>
      {image && (
        <img
          src={image}
          alt="upload preview"
          width="300"
          height="300"
        />
      )}
    </div>
  );
}

export default App;
