import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"


const MainPage = ({messages}) => {

  return (
  <div className="main">
    <div className="feed">
      {messages.map((message) => {
        return <Link key={message.timestamp} className="tweet__link" to={`/tweet/${message.timestamp}`}>
                <article key={message.timestamp}>{message.message}</article>
              </Link>
      })}
    </div>
    <div className="sidebar"></div>
  </div>
  )
};

export default MainPage