import React, { useState } from "react";
import PostAddIcon from '@material-ui/icons/PostAdd';

function CreateArea(props) {

    const [notes, setNotes] = useState({
        title: "",
        content: ""
    });

    function handleOnchange(event) {
        const { name, value } = event.target;

        setNotes((prevNotes) => {
            return {
                ...prevNotes,
                [name]: value
            }
        })
    }

    function submitNote(event) {

        props.onAdd(notes);
        setNotes({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <form>
            <div>
                <input name="title" value={notes.title} onChange={handleOnchange}
                    placeholder="Enter Title" />
                <textarea name="content" value={notes.content} onChange={handleOnchange}
                    placeholder="Enter a Note..." rows="3" />
                <button onClick={submitNote}> <PostAddIcon /> </button>
            </div>
        </form>
    );
}

export default CreateArea;