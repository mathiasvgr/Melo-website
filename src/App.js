import React from 'react';
import './App.css';
import Description  from './components/Description'
import MainPage from './components/MainPage'
import ContentPage from './components/ContentPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Navbar />
            <MainPage />
            <Description />
            <ContentPage />
            <Footer />
        </div>
    );
}

export default App;
