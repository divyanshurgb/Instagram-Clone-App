import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post() {
    return (
        <div className="post">
            <h3>Username</h3>

            
            <img className="post__image"src="https://content.fortune.com/wp-content/uploads/2020/11/BPO01.21.gettyimages-1183851343-2048x2048-1.jpg?resize=2052,1368" />
            

            <h4 className="post__text"><strong>divimusic</strong>: Intuitive</h4>
            {/* username and caption */}
        </div>
    )
}

export default Post
