import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

const App = (props) => {

  console.log(props)
  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper_content">
          <Route
            path='/dialogs'
            component={() => (
              <Dialogs 
                dialogsss={props.appState.dialogs} 
                messages={props.appState.messages} 
              />
            )} 
          />
          <Route 
            path='/profile' 
            component={() => (
              <Profile
                posts={props.appState.posts}
                addPost={props.addPost}
                newPostText={props.appState.appState} 
                updateNewPostText={props.updateNewPostText}
              />
            )}
          />
          <Route 
            path='/music' 
            component={() => <Music />} />
          <Route path='/news' 
            component={() => <News />} />
          <Route path='/settings' 
            component={() => <Settings />} />
          <Route path='/friends' 
            component={() => <Friends friends={props.appState.friends} />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
