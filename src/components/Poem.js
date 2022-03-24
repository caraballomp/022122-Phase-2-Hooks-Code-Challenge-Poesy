import React, {useState} from "react";




function Poem({poems}) {

// const {title, content, author} ={poems}
const  [read, setUnRead] = useState(true)

  return (
<>
    <div key={poems.id}>
      <h3>{poems.title} </h3>
      <p>{poems.content}</p>
      <p>
        <strong>-{poems.author}</strong>
      </p>
      <button onClick ={()=> read ? setUnRead (false): setUnRead(true)}>
      Mark as {read ? "read" : "unread"} </button>
      </div>
</>
  );
}

export default Poem;

// "id": 1,
// "title": "The Song About the Song",
// "content": "This is the song about the show! And it's a show with a song about The Songs we're gonna sing We'll sing you the songs about The song about the show! Songs about the singing we'll do! Songs about the songs about The song about the show! Songs that we'll be singing to you! You'll hear us singing songs about The songs about the songs, The songs about the songs about the songs-- Songs about the songs about The songs about the songs, The songs about the songs about the show!",
// "author": "Bryan Higgins"