import React from 'react'
import {useParams, Link} from "react-router-dom"
import { Card } from "react-bootstrap";

const Tweets = ({messages}) => {
    const {id} = useParams()
    // console.log(messages)
    const thisTweet = messages && messages.find((tweet) => tweet._id === id);
    // == and not === because
    // console.log('this article', thisTweet);

    return (
                <Card className="tweet">
                    <Card.Body>{thisTweet.message} <br/>
                    <Link to="/" >Back to Mainpage</Link>
                    </Card.Body>
                </Card>
    )
}

export default Tweets


