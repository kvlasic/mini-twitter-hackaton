import React from 'react'
import {Link, useParams} from "react-router-dom"

const Tweets = ({messages}) => {
    const {id} = useParams()

    const thisTweet = messages && messages.find((e) => e.timestamp === parseInt(id, 10));
    // == and not === because
    console.log('this article', thisTweet);

    return (
        <div className="tweet">
        <p>Here comes the original message</p>
            <b>Message: {thisTweet.message}</b><br/>
            <b>from User: {thisTweet.user}</b>        
        </div>
    )
}

export default Tweets
