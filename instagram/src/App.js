import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([]);
  
  // useEffect -> Runs a piece of code based on a specific condition

  useEffect(() => {
      // this is where the code runs
      db.collection('posts').onSnapshot(snapshot => {
      // every time a new post is added. this code is fired
      setPosts(snapshot.docs.map(doc => doc.data()));
      })
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="https://www.jing.fm/clipimg/full/87-879109_download-instagram-logo-png-instagram-name-logo-png.png"alt=""/>
      </div>
      <h1>Hello DIVI Let's build an Instagram Clone</h1>

      {
        posts.map(post => {
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        })
      }
      
      {/* <Post username="muskcool " caption="CyberTruck or me?" imageUrl="https://static.highsnobiety.com/thumbor/c1pBNVuvDgjPZG_4AxVScM7xlcU=/1600x1067/static.highsnobiety.com/wp-content/uploads/2019/11/26094436/musk-tesla-ford.jpg" />
      <Post username="zayn " caption="Pillowtalk crossed 1B views" imageUrl="https://upload.wikimedia.org/wikipedia/commons/4/48/Zayn_Wiki.jpg"/>
      <Post username="charlie " caption="Taking my dopamine." imageUrl="https://productplacementblog.com/wp-content/uploads/2017/05/Lavazza-%E2%80%93-Charlie-Puth-%E2%80%93-Attention-1.jpg"/> */}
    </div>
  );
}

export default App;
