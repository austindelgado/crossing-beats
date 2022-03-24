import logo from './logo.svg';
import './App.css';
import {Howl, Howler} from 'howler';
import Clock from './components/clock';

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
      <Clock></Clock>
      <button onClick={() => sound.play()}>
        PLAY
      </button>
    </div>
  );
}

export default App;
