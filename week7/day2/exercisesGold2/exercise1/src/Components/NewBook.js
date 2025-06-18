import { useState } from 'react';
import "./NewBook.css";

export default function NewBook() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    year: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Book:', formData);
    setSuccessMessage('Book submitted successfully!');
    setFormData({
      title: '',
      author: '',
      genre: '',
      year: ''
    });
  };

  return (
    <div className="form-wrapper">
      <h2>New Book</h2>
      {successMessage && <p className="success">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />

        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />

        <label>Year Published</label>
        <input
          type="text"
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
