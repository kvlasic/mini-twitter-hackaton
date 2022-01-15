import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap";
import { Home } from "./Home";


const MainPage = ({messages}) => {
  

  return (
  <div className="main">
  <Container>
  <Row>
    <Col sm={3}>left sidebar</Col>
    <Col sm={6}>
    <div className="feed">
      {messages.map((message) => {
        return <Link key={message._id} className="tweet__link" to={`/messages/${message._id}`}>
                <article key={message._id}>{message.message}</article>
              </Link>
      })}
    </div>
    </Col>
    <Col sm={3}>right Sidebar</Col>
    
  </Row>

</Container>
    <div className="sidebar"></div>
  </div>
  )
};

export default MainPage