import React from 'react';
import './App.css'

import { Footer, Blog, Possibillity, Features, Whatchat, Header } from './containers';
import { Cta, Brand, Navbar } from './components'

function App() {
  return (
    <div>
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand /> 
            <Whatchat />
            <Features />
            <Possibillity/>
            <Cta/>
            <Blog/>
            <Footer/>
        </div>
    </div>
  )
}

export default App