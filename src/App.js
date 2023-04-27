import React from 'react';
import './App.css';
import Meme from './Meme'
import MemeInput from './MemeInput';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const memes = useSelector(state => state.memes)
  const dispatch = useDispatch();

  const createMeme = (newMeme) => {
    dispatch({ type: 'ADD', meme: newMeme });
  }

  const deleteMeme = (id) => {
    dispatch({ type: 'DELETE', id })
  }

  const allMemes = memes.map(m => (
    <Meme
      key={m.id}
      topText={m.topText}
      bottomText={m.bottomText}
      imageUrl={m.imageUrl}
      deleteMeme={() => deleteMeme(m.id)}
    />
  ))

  return (
    <div className="App">
        <MemeInput createMeme={createMeme} />
        {allMemes}
    </div>
  );
}

export default App;
