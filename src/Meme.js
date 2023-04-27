import React from 'react';

const Meme = ({ id, topText, bottomText, imageUrl, deleteMeme }) => {
    const handleDeleteMeme = () => {
        deleteMeme(id)
    }

    const topTextAllCaps = topText.toUpperCase();
    const bottomTextAllCaps = bottomText.toUpperCase();

    return (
        <section id='meme-display'>
            <div className='meme'>
                <div className='container'>
                    <div className='top'>{ topTextAllCaps }</div>
                    <img className='meme-img' src={ imageUrl } alt='meme' width='500px'/>
                    <div className='bottom'>{ bottomTextAllCaps }</div>
                    <button className='delete-meme' onClick={handleDeleteMeme}>Goodbye Meme</button>
                </div>
            </div>
        </section>
    )
}

export default Meme;