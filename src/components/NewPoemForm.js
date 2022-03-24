import React, {useState} from "react";

function NewPoemForm({addNewPoem}) {
  const [titleNew, setTitleNew] = useState("");
  const [authorNew, setAuthorNew] = useState("");
  const [contentNew, setContentNew] = useState("");

function handleSubmit(e) {
  e.preventDefault();

}


console.log(handleSubmit)
// addNewPoem({title, author, content});

// let newPoem ={
//   "title": title,
//   "content": content,
//   "author": author
//   };




  return (
    <form className="new-poem-form"   >
      <input placeholder="Title" onChange={(e) => setTitleNew(e.target.value)} />
      <input placeholder="Author" onChange={(e) => setAuthorNew(e.target.value)} />
      <textarea placeholder="Write your masterpiece here..." rows={10}
      onChange={(e) => setContentNew(e.target.value)} />
      <input type="submit" value="Share your masterpiece" onSubmit={handleSubmit}  />
    </form>
  );
}

export default NewPoemForm;

// "id": 1,
// "title": "The Song About the Song",
// "content": "This is the song about the show! And it's a show with a song about The Songs we're gonna sing We'll sing you the songs about The song about the show! Songs about the singing we'll do! Songs about the songs about The song about the show! Songs that we'll be singing to you! You'll hear us singing songs about The songs about the songs, The songs about the songs about the songs-- Songs about the songs about The songs about the songs, The songs about the songs about the show!",
// "author": "Bryan Higgins"