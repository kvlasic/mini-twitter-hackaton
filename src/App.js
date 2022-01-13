import "./App.css";
import React, { useState, useEffect } from "react";
import MainPage from "./Components/MainPage";
import { Link, Routes, Route, useParams } from "react-router-dom";

function App() {
  const [users, setUsers] = useState({});
  const [messages, setMessages] = useState({});

  const fakeUserData = [
    {
      username: "astolli0",
      password: "v6GZTFwNH9",
      profilePic: "http://dummyimage.com/186x100.png/5fa2dd/ffffff",
    },
    {
      username: "fbainbridge1",
      password: "wzoxKEK4unvK",
      profilePic: "http://dummyimage.com/147x100.png/cc0000/ffffff",
    },
    {
      username: "jhanner2",
      password: "ygxe6bTDL5",
      profilePic: "http://dummyimage.com/168x100.png/ff4444/ffffff",
    },
    {
      username: "obartoszewicz3",
      password: "OPnBu4lUo",
      profilePic: "http://dummyimage.com/157x100.png/ff4444/ffffff",
    },
    {
      username: "mdimitru4",
      password: "YzYhY7FdMO",
      profilePic: "http://dummyimage.com/250x100.png/5fa2dd/ffffff",
    },
    {
      username: "lgallaccio5",
      password: "xV6eU7xVUep",
      profilePic: "http://dummyimage.com/130x100.png/5fa2dd/ffffff",
    },
    {
      username: "gperham6",
      password: "4xJytdCHa",
      profilePic: "http://dummyimage.com/207x100.png/ff4444/ffffff",
    },
    {
      username: "fmatzl7",
      password: "lGv607aTq9g",
      profilePic: "http://dummyimage.com/164x100.png/ff4444/ffffff",
    },
    {
      username: "bboughton8",
      password: "LyoWKNNfZYwV",
      profilePic: "http://dummyimage.com/249x100.png/5fa2dd/ffffff",
    },
    {
      username: "rardern9",
      password: "m3fdO6xkkL",
      profilePic: "http://dummyimage.com/242x100.png/dddddd/000000",
    },
  ];

  const fakeMessageData = [
    {
      message:
        "mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero",
      userId: "2047025443",
    },
    {
      message:
        "curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere",
      userId: "2086618433",
    },
    {
      message:
        "eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing",
      userId: "7926494666",
    },
    {
      message:
        "pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam",
      userId: "9303024672",
    },
    {
      message: "morbi odio odio elementum eu interdum eu tincidunt in leo",
      userId: "6612757892",
    },
    {
      message:
        "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat",
      userId: "2328038352",
    },
    {
      message:
        "vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla",
      userId: "5446844718",
    },
    {
      message:
        "libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu pede",
      userId: "4251927478",
    },
    {
      message:
        "nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec",
      userId: "7562613745",
    },
    {
      message:
        "integer ac leo pellentesque ultrices mattis odio donec vitae nisi",
      userId: "0040411869",
    },
    {
      message:
        "amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi",
      userId: "9794701815",
    },
    {
      message:
        "nunc donec quis orci eget orci vehicula condimentum curabitur in",
      userId: "9092332526",
    },
    {
      message:
        "tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula",
      userId: "9265098783",
    },
    {
      message:
        "consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat",
      userId: "6944619075",
    },lol
    {
      message:
        "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et",
      userId: "6205237105",
    },
    {
      message:
        "sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut",
      userId: "4407763027",
    },
    {
      message:
        "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
      userId: "6789310606",
    },
    {
      message:
        "vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit",
      userId: "0035054182",
    },
    {
      message:
        "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor",
      userId: "3062670479",
    },
    {
      message:
        "lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada",
      userId: "2994142287",
    },
  ];

  const fakeComments = [
    {
      _id: "1",
      comment:
        "posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi",
    },
    {
      _id: "2",
      comment:
        "risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis",
    },
    {
      _id: "3",
      comment:
        "enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at",
    },
    {
      _id: "4",
      comment:
        "turpis elementum ligula vehicula consequat morbi a ipsum integer a",
    },
    {
      _id: "5",
      comment:
        "pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu",
    },
    {
      _id: "6",
      comment:
        "ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida",
    },
    {
      _id: "7",
      comment:
        "id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio",
    },
    {
      _id: "8",
      comment:
        "tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque",
    },
    {
      _id: "9",
      comment:
        "luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio",
    },
    {
      _id: "10",
      comment: "dui luctus rutrum nulla tellus in sagittis dui vel nisl",
    },
  ];

  setUsers(fakeUserData);

  return (
    <div className="App">
      <Sidebar />
      <Message />
      <Searchbar />
      <User users={users} />
      <Routes>
        <Route exact path="/" />
        <Route path="/message/:id" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;

// https://twitter.com/wongmjane/status/1481698469031325698
