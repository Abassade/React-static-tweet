import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

const Avatar = ({hash})=> {
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return (
    <img
    src={url}
    className="avatar"
    alt="avatar" />
    );
    }

const Message = ({text})=> {
    return (
      <div className="message">
        {text}
      </div>
    );
}
        
        
const NameWithHandle = ({author})=> {
    const {name, handle} = author;
        return (
    <span className="name-with-handle">
    <span className="name">{name}</span>
    <span className="handle">@{handle}</span>
    </span>
    );
}

const Time = ({time}) => {
    const timeString = moment(time).fromNow();
    return(
        <span className="time">
            {timeString}
        </span>
    );
}

const getRetweetCount = (count)=> {
    if(count > 0) {
    return (
    <span className="retweet-count">
    {count}
    </span>
    );
    } else {
    return null;
    }

}
const getLikeCount = ({count})=>{
    if(count>0){
        return(
            <span className="like-count">
                {count}
            </span>
        );
    }
    else{
     return null;
    }

}
    const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
    );
    const RetweetButton = ({ count }) => (
        <span className="retweet-button">
        <i className="fa fa-retweet"/>
        {getRetweetCount(count)}
        </span>
        );
    const LikeButton = ({ count }) => (
        <span className="like-button">
        <i className="fa fa-heart"/>
        {getLikeCount({count})}
        </span>
        );

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
        );

        const Tweet = ({tweet})=> {
            return (
            <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
            <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
            <Message text={tweet.message}/>
            <div className="buttons">
            <ReplyButton/>
            <RetweetButton count={tweet.retweets}/>
            <LikeButton count={tweet.likes}/>
            <MoreOptionsButton/>
            </div>
            </div>
            </div>
            );
        }

        const testTweet = {
            message: "Man u just won now",
            gravatar: "2fab0935aea5e20e9b3a26a676b9d13d",
            author: {
            handle: "catperson",
            name: "IAMA Cat Person"
            },
            likes: 50,
            retweets: 17,
            timestamp: "2016-07-30 21:24:37"
            };

ReactDOM.render(<Tweet tweet={testTweet}/>,
document.querySelector('#root'));