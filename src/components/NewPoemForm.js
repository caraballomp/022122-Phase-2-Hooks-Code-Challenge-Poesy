import React, {useState} from "react";

function NewPoemForm({ addPoem }) {

const [title, setTitle] = useState("");
const [author, setAuthor] = useState("");
const [content, setContent] = useState("");

function handleTitleChange(e) {
      setTitle(e.target.value);
    }
  
    function handleAuthorChange(e) {
      setAuthor(e.target.value);
    }
      function handleContentChange(e) {
      setContent(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      const formData ={
        title,
        author,
        content,
      }
      fetch("http://localhost:8004/poems", {
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then((r) => r.json())
      .then(newPoem => {addPoem(newPoem)})
      };
    

    return (
      <form className="new-poem-form" onSubmit= {handleSubmit} >
        <input placeholder="Title" onChange={handleTitleChange} />
        <input placeholder="Author" onChange={handleAuthorChange} />
        <textarea
          placeholder="Write your masterpiece here..."
          rows={10}
          onChange={handleContentChange}
        />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
    }

    export default NewPoemForm;

// "id": 1,
// "title": "The Song About the Song",
// "content": "This is the song about the show! And it's a show with a song about The Songs we're gonna sing We'll sing you the songs about The song about the show! Songs about the singing we'll do! Songs about the songs about The song about the show! Songs that we'll be singing to you! You'll hear us singing songs about The songs about the songs, The songs about the songs about the songs-- Songs about the songs about The songs about the songs, The songs about the songs about the show!",
// "author": "Bryan Higgins"