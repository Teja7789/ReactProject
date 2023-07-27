import React from 'react'
import ToogleNav from './ToogleNav'
import ToogleMain from './ToogleMain'
import './ToogleApp.css';
// import '../../../../App.css';
import { useState } from 'react'
export default function App() {
    const [darkMode,setDarkMode] = useState(true);
     function toggleDarkMode(){
        setDarkMode(prev => !prev);
        
    }
    return (
        <div className="container">
            <ToogleNav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <ToogleMain darkMode={darkMode} />
        </div>
    )
}