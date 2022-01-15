import React from 'react'
import {useParams, Link} from "react-router-dom"
import { Card } from "react-bootstrap";

const Tweets = ({messages}) => {
    const {id} = useParams()
    // console.log(messages)
    const thisTweet = messages && messages.find((tweet) => tweet._id === id);
    // == and not === because
    console.log('this article', thisTweet);

    return (
                <Card>
                    <Card.Body>
                    Message: {thisTweet.message} <br/>
                    from User: {thisTweet.userId}<br/>
                    <Link to="/" >Back to Mainpage</Link>
                    </Card.Body>
                </Card>
    )
}

export default Tweets


// <Tweets key={messages._id} messages={messages} />

//             <b>Message: {thisTweet.message}</b><br/>
// <b>from User: {thisTweet.userId}</b>   

/*

    return (
        <div className="tweet">
        <p>Here comes the original message</p>
            <b>Message: </b><br/>
            <b>from User: </b>        
        </div>
    )
*/ 