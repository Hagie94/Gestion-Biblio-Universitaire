import React, { useState } from 'react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState(null); // Add state for image
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('genre', genre);

    // Check if an image was uploaded
    if (image) {
      formData.append('image', image);
    }

    // Submit the form data to your backend here (e.g., using axios)
    try {
      const response = await fetch('/your-backend-endpoint', {
        method: 'POST',
        body: formData,
      });
      const responseData = await response.json();
      console.log('Book submitted:', responseData);
      // Handle successful submission (e.g., clear form, display message)
    } catch (error) {
      console.error('Error submitting book:', error);
      // Handle submission error (e.g., display error message)
    }

    // Reset the form after submission
    setTitle('');
    setAuthor('');
    setGenre('');
    setImage(null);
    setIsSubmitted(false);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <div className="container">
    <div className="card mx-auto">
      <div className="card-header"><h1>Ajouter un livre</h1></div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Titre:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Auteur:</label>
            <input
              type="text"
              className="form-control"
              id="author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              className="form-control"
              id="genre"
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image de couverture:</label>
            <input
              type="file"
              className="form-control-file"
              id="image"
              onChange={handleImageChange}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitted}>
                Ajouter
            </button> 
          </div>

        </form>
      </div>
      </div>
    </div>
  );
};

export default AddBook;
