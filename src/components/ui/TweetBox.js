import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')

  const sendTweet = e => {
    e.preventDefault()

    db.collection('posts').add({
      displayName: 'Garpsi',
      username: 'garpsi1',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSlLd8JCwegk25s5gBjfpJCBf62UyKQEDJg&usqp=CAU'
    })

    setTweetMessage('')
    setTweetImage('')
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSlLd8JCwegk25s5gBjfpJCBf62UyKQEDJg&usqp=CAU" />
          <input 
          onChange={e => setTweetMessage(e.target.value)}
          value={tweetMessage} placeholder="What's happening?" type="text" />
        </div>
        <input
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button 
        onClick={sendTweet}
        type='submit'
        className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
