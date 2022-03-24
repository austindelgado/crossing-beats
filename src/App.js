import logo from './logo.svg';
import './App.css';
import {Howl, Howler} from 'howler';

function App() {

  var sound = new Howl({
    src: ['/songs/scruffy6AM.mp3'],
    loop: true,
    onplayerror: function() {
      console.log('error');
    }
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => sound.play()}>
          PLAY
        </button>
      </header>
    </div>
  );
}

export default App;
