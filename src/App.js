import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Bloglist from './components/Bloglist'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BlogpostView from './components/BlogpostView'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import { PostContext } from './PostContext'

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)
  const [posts, setPosts] = useState([])
  const [currentState, setCurrentState] = useState('pending')

  const themes = {
    lightTheme: {
      width: '100%',
      overflow: 'hidden',
      background: 'white',
      color: 'black',
      transition: 'background-color 0.7s ease-out',
    },
    darkTheme: {
      width: '100%',
      overflow: 'hidden',
      background: '#252525',
      color: 'rgb(241, 241, 241)',
      transition: 'background-color 0.7s ease-out',
    },
  }
  // toggles the theme
  const toggleTheme = () => {
    setDarkModeEnabled(!darkModeEnabled)
  }
  // fetches all blogposts
  const getBlogPosts = async () => {
    let request = await fetch('http://localhost:8080/posts')
    let data = await request.json()
    return data
  }

  useEffect(() => {
    async function fetchData() {
      try {
        let blogPosts = await getBlogPosts()
        await setPosts(blogPosts)
        setCurrentState('loaded')
      } catch (err) {
        setCurrentState('error')
      }
    }
    fetchData()
  }, [])

  return (
    <div
      className="App"
      style={darkModeEnabled ? themes.darkTheme : themes.lightTheme}
    >
      <div className="wrapper">
        <Header
          darkModeEnabled={darkModeEnabled}
          changeTheme={toggleTheme}
        ></Header>
        {currentState === 'error' ? <ErrorMessage /> : null}
        {currentState === 'pending' ? <Loader /> : null}
        {currentState === 'loaded' ? (
          <Router>
            <div>
              <PostContext.Provider value={posts}>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Bloglist {...props} darkModeEnabled={darkModeEnabled} />
                  )}
                />
              </PostContext.Provider>
              <Route path="/BlogpostView" component={BlogpostView}></Route>
            </div>
          </Router>
        ) : null}
      </div>
    </div>
  )
}

export default App
