import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
    topText: '',
    imageUrl: '',
    bottomText: ''
}

const MemeInput = ({ createMeme }) => {
    const [ form, setForm ] = useState(INITIAL_STATE);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createMeme({ ...form, id: uuidv4() });
        setForm(INITIAL_STATE)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(f => ({ ...form, [name]: value }));
    };


    return (
        <div>
            <h1>Create a Meme!</h1>
            <form onSubmit={handleSubmit} className="input-container">
                <div className="inputs" id="image">
                    <label className="label" htmlFor="imageUrl">Input image URL</label>
                    <input 
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        onChange={handleChange}
                        value={form.imageUrl} />
                </div>
                <div className="inputs" id="image">
                    <label className="label" htmlFor="topText">Top text goes here.</label>
                    <input 
                        type="text"
                        name="topText"
                        id="topText"
                        onChange={handleChange}
                        value={form.topText} />
                </div>
                <div className="inputs" id="image">
                    <label className="label" htmlFor="bottomText">Bottom text goes here.</label>
                    <input 
                        type="text"
                        name="bottomText"
                        id="bottomText"
                        onChange={handleChange}
                        value={form.bottomText} />
                </div>
                <button className="submit" type="submit">Generate Meme!</button>
            </form>
        </div>
    );
}

export default MemeInput;