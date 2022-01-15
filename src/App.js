import "./App.css";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link} from "react-router-dom";
import MainPage from "./Components/MainPage";
import Tweet from "./Components/Tweet"
import { Container, Row, Col } from "react-bootstrap";
import Home from "./Components/Home";
import {Searchbar} from "./Components/Searchbar";

function App() {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]); // Array with objects therefore [] and NOT {}
  
  useEffect(() => {
    fetch("https://crossover-twitter.herokuapp.com/getmessages")
      .then((res) => res.json())
      .then((res) => setMessages(res));
  }, []);

  useEffect(() => {
    fetch("https://crossover-twitter.herokuapp.com/get")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  console.log(users)

  // console.log(messages);

  // setUsers(fakeUserData);
  // setMessages(fakeMessageData)

  // useEffect(() => {
  //   setUsers(fakeUserData);
  //   setMessages(fakeMessageData)
  // },[])

  return (
    <div className="App">
      <Container>
        <Row>
              <Col sm={3}>
                <Link to="/" ><Home /></Link>
            </Col>    
            <Col sm={6}>
      <Routes>
        <Route path="/" element={<MainPage messages={messages} users={users} />}/>
        <Route path="/messages/:id" element={<Tweet messages={messages} />} />
      </Routes>
      </Col>
      <Col sm={3}>
        <Searchbar />
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;