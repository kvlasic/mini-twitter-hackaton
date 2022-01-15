import "./App.css";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route, useParams } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Tweets from "./Components/Tweets"
import Home from "./Components/Home"

function App() {
  const [users, setUsers] = useState({});
  const [messages, setMessages] = useState([]); // Array with objects therefore [] and NOT {}

  const fakeUserData = [
    {
      username: "astolli0",
      _id: 1,
      password: "v6GZTFwNH9",
      profilePic: "http://dummyimage.com/186x100.png/5fa2dd/ffffff",
    },
    {
      username: "fbainbridge1",
      _id: 2,
      password: "wzoxKEK4unvK",
      profilePic: "http://dummyimage.com/147x100.png/cc0000/ffffff",
    },
    {
      username: "jhanner2",
      _id: 3,
      password: "ygxe6bTDL5",
      profilePic: "http://dummyimage.com/168x100.png/ff4444/ffffff",
    },
    {
      username: "obartoszewicz3",
      _id: 4,
      password: "OPnBu4lUo",
      profilePic: "http://dummyimage.com/157x100.png/ff4444/ffffff",
    },
    {
      username: "mdimitru4",
      _id: 5,
      password: "YzYhY7FdMO",
      profilePic: "http://dummyimage.com/250x100.png/5fa2dd/ffffff",
    },
    {
      username: "lgallaccio5",
      _id: 6,
      password: "xV6eU7xVUep",
      profilePic: "http://dummyimage.com/130x100.png/5fa2dd/ffffff",
    },
    {
      username: "gperham6",
      _id: 7,
      password: "4xJytdCHa",
      profilePic: "http://dummyimage.com/207x100.png/ff4444/ffffff",
    },
    {
      username: "fmatzl7",
      _id: 8,
      password: "lGv607aTq9g",
      profilePic: "http://dummyimage.com/164x100.png/ff4444/ffffff",
    },
    {
      username: "bboughton8",
      _id: 9,
      password: "LyoWKNNfZYwV",
      profilePic: "http://dummyimage.com/249x100.png/5fa2dd/ffffff",
    },
    {
      username: "rardern9",
      _id: 10,
      password: "m3fdO6xkkL",
      profilePic: "http://dummyimage.com/242x100.png/dddddd/000000",
    },
  ];

  const fakeMessageData = [
    {
    message: "blandit nam nulla integer pede justo lacinia eget tincidunt",
    _id: 1,
    user: "aglasson0",
    timestamp: 1636264561000
  }, {
    message: "platea dictumst morbi vestibulum velit id pretium iaculis diam erat",
    _id: 2,
    user: "ipickle1",
    timestamp: 1612800299000
  }, {
    message: "nec nisi vulputate nonummy maecenas tincidunt lacus at velit",
    _id: 3,
    user: "pdehooch2",
    timestamp: 1607779693000
  }, {
    message: "in felis eu sapien cursus",
    _id: 4,
    user: "bbeal3",
    timestamp: 1606047117000
  }, {
    message: "pede morbi porttitor lorem id",
    _id: 5,
    user: "btrain4",
    timestamp: 1616909416000
  }, {
    message: "vestibulum eget vulputate ut ultrices vel augue",
    _id: 6,
    user: "bfinnimore5",
    timestamp: 1613375434000
  }, {
    message: "habitasse platea dictumst morbi vestibulum velit id pretium",
    _id: 7,
    user: "dredman6",
    timestamp: 1619834337000
  }, {
    message: "non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
    _id: 8,
    user: "rendersby7",
    timestamp: 1629468154000
  }, {
    message: "id pretium iaculis diam erat fermentum justo nec condimentum neque",
    _id: 9,
    user: "gtotaro8",
    timestamp: 1627308866000
  }, {
    message: "vitae mattis nibh ligula nec sem duis",
    _id: 10,
    user: "tcrowcum9",
    timestamp: 1611394360000
  }]

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

  useEffect(() => {
    fetch("https://crossover-twitter.herokuapp.com/getmessages")
    .then((res) => res.json)
    .then((res) => setMessages(res))
  },[])

  // setUsers(fakeUserData);
  // setMessages(fakeMessageData)

  return (
    <div className="App">
    <Link to="/" >Home</Link>
      <Routes>
        <Route path="/" element={<MainPage messages={messages} />}/>
        <Route path="/messages/:id" element={<Tweets key={messages._id} messages={messages} />} />
      </Routes>
    </div>
  );
}

export default App;