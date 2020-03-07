import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note.jsx"
import Footer from "./Footer";
import CreateArea from "./CreateArea";



function App() {

    const [notes, setNotes] = useState([]);

    function addNotes(notesObj) {

        setNotes((prevNotes) => {
            return [...prevNotes, notesObj]
        });
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((notesObj, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNotes} />
            {notes.map((notesItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={notesItem.title}
                        content={notesItem.content}
                        onDelete={deleteNote}
                    />);
            })}
            <Footer />
        </div>
    );
}

export default App;
























{/* {notes.map(createNotes => (
                <Note key={createNotes.key}
                    name={createNotes.name}
                    content={createNotes.content}
                />))} */}