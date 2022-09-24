import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Infantile Drafty Wolverine</title>
        <meta property="og:title" content="Infantile Drafty Wolverine" />
      </Helmet>
      <h1 className="home-text">
        <span>Animech at home, btw these are BP files</span>
        <br></br>
      </h1>
      <select className="home-select">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <select className="home-select1">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <iframe
        src="https://www.youtube.com/embed/RUu_RtRxsTY"
        className="home-iframe"
      ></iframe>
    </div>
  )
}

export default Home
