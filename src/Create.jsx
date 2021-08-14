import React, { useState, useEffect } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';

function Create(props) {
    const [finalNote, setFinalNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFinalNote((prev) => {
            return ({
                ...prev,
                [name]: value
            })
        });
    }
    function addItem(event) {
        props.onUpdate(finalNote);
        setFinalNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return <div>
        <form noValidate autoComplete="off" class="addform">
            <div class="inputfield">
                <TextField id="standard-basic" name="title" type="text" placeholder="Title" onChange={handleChange} value={finalNote.title} />
            </div>
            <div class="inputfield">
                <TextField name="content" type="text" placeholder="Take A Note" onChange={handleChange} value={finalNote.content} />
            </div>
            <div class="inputfield">
                <Fab onClick={addItem}>
                    <AddCircleIcon></AddCircleIcon>
                </Fab>
            </div>
        </form>
    </div>;
}

export default Create;