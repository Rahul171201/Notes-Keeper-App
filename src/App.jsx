import React, { useState } from "react";
import Heading from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import Create from "./Create.jsx";

function App() {

    const [notes, setNotes] = useState([]);

    function addNewNote(val) {
        setNotes((prev) => {
            return ([...prev, val]);
        });
    }
    function deleteNote(id) {
        setNotes((prev) => {
            return (prev.filter((note, indx) => {
                return (indx !== id);
            }))
        });
    }

    return (<div><Heading></Heading>
        <Create onUpdate={addNewNote} ></Create>
        {notes.map((note, index) => {
            return (<Note content={note.content} title={note.title} onDelete={deleteNote} id={index}></Note>)
        })}
        <Footer></Footer></div>);
}

export default App;