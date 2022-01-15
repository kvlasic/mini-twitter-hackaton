import React from "react";
import {Link} from "react-router-dom"
import { Card, Form } from "react-bootstrap";
import {Searchbar} from "./Searchbar";


const MainPage = ({messages, users}) => {

  // const thisUser = users && users.find((user) => user._id === message.userId);
  console.log(messages.map(m => m._id));
  // it message.user === user._id then show user.profilPic
  return (
  <div className="main">
    <div className="feed">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Write something ..." />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Form>
      {messages.length && users.length && messages.map((tweet) => {
        const user = users.find(u => u._id === tweet.user);
        let image = "";
        user && user.profilPic ? image = user.profilPic : image = 'https://avatars.githubusercontent.com/u/3663537?v=4'
        
        return <Link key={tweet._id} className="tweet__link" to={`/messages/${tweet._id}`}>
                <Card key={tweet._id}>
                  <Card.Body>
                    {<img src={image} width="40" className="user_thumbnail"/>}
                  {tweet.message}
                  </Card.Body>
                </Card>
              </Link>
      })}
    </div>
    <div className="sidebar"></div>
  </div>
  )
};

export default MainPage