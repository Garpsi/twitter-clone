import React from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className='widgets__searchIcon' />
        <input type="text" placeholder='Search Twitter' />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={'1548018487792058372'} />

        <TwitterTimelineEmbed 
        sourceType='profile'
        screenName='techcrunch'
        options={{ height:400 }}
        />

        <TwitterShareButton 
        url='https://www.linkedin.com/in/garpsi-ho-74635021a/'
        options={{ text: "#reactjs is awesome", via: "garpsi1" }}
        />
      </div>
    </div>
  )
}

export default Widgets