import { useState } from 'react';
import './App.css';

function App() {
  const [circles, setCircles] = useState([]);
  const [removedCircles, setRemovedCircles] = useState([]);
  const [theme, setTheme] = useState({});

  const handleAdd = (e) => {
    const newCircle = {
      x: e.clientX,
      y: e.clientY,
    };
    setCircles([...circles, newCircle]);
  };

  const handleUndo = () => {
    const removedCircle = circles.pop();
    setRemovedCircles([...removedCircles, removedCircle]);
    setCircles([...circles]);
  };

  const handleRedo = () => {
    const addBack = removedCircles.shift();
    setCircles([...circles, addBack]);
  };

  const handleErase = () => {
    setCircles([]);
    setRemovedCircles([]);
  }

  const handleThemeChange = (e) => {
    let newTheme = e.target.value;
    switch(newTheme) {
      case 'neon':
        setTheme({
          color: 'greenyellow',
          backgroundColor: 'black',
          borderColor: 'greenyellow',
        });
        break;
      case 'light':
        setTheme({
          color: 'rgb(0, 189, 227)',
          backgroundColor: 'rgb(226, 217, 199)',
          borderColor: 'rgb(0, 189, 227)',
        });
        break;
      case 'mellow':
        setTheme({
          color: 'rgb(203, 203, 152)',
          backgroundColor: 'rgb(72, 100, 66)',
          borderColor: 'rgb(203, 203, 152)',
        })
    }
  }

  // const sliderChange = (e) => {
  //   e.target.value;
  // }

  return (
    <div className='App' style={theme} >
      <div className='button-bar'>
        <div className='action-buttons'>
          <button
            disabled={circles.length === 0}
            onClick={handleUndo}
            className="buttons"
          >
            undo
          </button>
          <button
            disabled={removedCircles.length === 0}
            className="buttons"
            onClick={handleRedo}
          >
            redo
          </button>
          <button 
          disabled={circles.length === 0}
          onClick={handleErase}
          className='buttons'
          >erase
          </button>
        </div>
          <h1 className='title'>Click on screen to make circles</h1>
          {/* <input type='range' min='10' max='50' value='25' className='slider' ></input> */}
        <div className='theme-buttons'>
          <button
            disabled={theme.color === 'greenyellow'}
            onClick={handleThemeChange}
            className="buttons"
            value='neon'
          >
            Neon
          </button>
          <button
            disabled={theme.color === 'rgb(0, 189, 227)'}
            onClick={handleThemeChange}
            className="buttons"
            value='light'
          >
            Light
          </button>
          <button 
          disabled={theme.color === 'rgb(203, 203, 152)'}
          onClick={handleThemeChange}
          className='buttons'
          value='mellow'
          >Mellow
          </button>
        </div>
      </div>
        <div className="board" onClick={handleAdd}>
          {circles.map((circle) => {
            return (
              <div
                className="circle"
                key={circle.x + circle.y + Math.floor(Math.random() * 10000000)}
                style={{
                  left: circle.x - 10,
                  top: circle.y - 10,
                }}
              ></div>
            );
          })}
        </div>
    </div>
  );
}

export default App;
