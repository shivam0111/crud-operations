import React,{useState,useEffect} from 'react';
import './App.css';
import axios from "axios"
import Navbar from "./Components/Homepage-AJ/navbar.js"
import Question from "./Components/Homepage-AJ/question.js"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Content from "./Components/Answers-Arora/Content.js"
import Prof from './Components/Profile-Adarsh/content';
import Button from "./Components/Answers-Arora/button"

function App() {
  const [posts,setPosts] = useState([]) //here posts is the state and setPosts is the hook and we can change the state using setState
  
  useEffect(()=>{
    axios.get('http://localhost:5000/questions')
    .then(res=>setPosts(res.data))
    .catch(error=>console.log(error));
  })

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={() => <Question />} />
          <Route path="/answers" exact render={() => <Content posts={posts}/>} /> {/* //here the first name posts(we can name it any name) and the second posts is the volume */}
          <Route path ="/profile" exact component={() => < Prof />} />
          <Route path="/add-article" component={Content}/>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
