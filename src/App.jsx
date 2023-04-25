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
    const newTheme = e.target.value;
    const generateRandomValue = () => Math.floor(Math.random() * 16).toString(16);
    const firstRandomHex = '#' + Array.from({ length: 6}).map(generateRandomValue).join('');
    const secondRandomHex = '#' + Array.from({ length: 6}).map(generateRandomValue).join('');

    switch(newTheme) {
      case 'neon':
        setTheme({
          color: 'var(--primaryClrDefault)',
          backgroundColor: 'var(--backgroundClrDefault)',
        });
        break;
      case 'light':
        setTheme({
          color: 'var(--primaryClrLight)',
          backgroundColor: 'var(--backgroundClrLight)',
        });
        break;
      case 'mellow':
        setTheme({
          color: 'var(--primaryClrMellow)',
          backgroundColor: 'var(--backgroundClrMellow)',
        });
        break;
      case 'random':
        setTheme({
          color: `${firstRandomHex}`,
          backgroundColor: `${secondRandomHex}`,
        });
        break;
        default: alert('something is wrong... maybe try hitting refresh')
    }
  }

  return (
    <div className='App' style={theme} >
      <div className='button-bar'>
        <div className='action-buttons'>
          <button
            disabled={circles.length === 0}
            onClick={handleUndo}
            className="buttons-action"
          >
            undo
          </button>
          <button
            disabled={removedCircles.length === 0}
            className="buttons-action"
            onClick={handleRedo}
          >
            redo
          </button>
          <button 
          disabled={circles.length === 0}
          onClick={handleErase}
          className='buttons-action'
          >erase
          </button>
        </div>
          <h1 className='title'>Click on screen to make circles</h1>
          {/* <input type='range' min='10' max='50' value='25' className='slider' ></input> */}
        <div className='theme-buttons'>
          <button
            disabled={theme.color === 'greenyellow'}
            onClick={handleThemeChange}
            className="buttons-theme"
            value='neon'
          >
            Neon
          </button>
          <button
            disabled={theme.color === 'rgb(0, 189, 227)'}
            onClick={handleThemeChange}
            className="buttons-theme"
            value='light'
          >
            Light
          </button>
          <button 
          disabled={theme.color === 'rgb(203, 203, 152)'}
          onClick={handleThemeChange}
          className='buttons-theme'
          value='mellow'
          >Mellow
          </button>
          <button
          onClick={handleThemeChange}
          className='buttons-theme'
          value='random'
          >Random
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
