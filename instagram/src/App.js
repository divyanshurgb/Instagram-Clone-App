import './App.css';
import Post from './Postc';

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img className="app__headerImage" src="https://www.jing.fm/clipimg/full/87-879109_download-instagram-logo-png-instagram-name-logo-png.png"alt=""/>
      </div>

      <Post />
      {/* Posts */}
    </div>
  );
}

export default App;
