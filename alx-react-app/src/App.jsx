
import React from 'react';

// The Header component that was causing the import error.
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-6 rounded-t-lg">
      <h1 className="text-4xl font-bold">My React App</h1>
      <p className="text-lg mt-2">Assembling components piece by piece.</p>
    </header>
  );
};

// The MainContent component.
const MainContent = () => {
  return (
    <main className="p-8 bg-white text-gray-800">
      <p className="text-gray-700 leading-relaxed">
        This is the main content area, assembled with the Header and Footer components to create a complete UI.
      </p>
    </main>
  );
};

// The Footer component.
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center text-sm rounded-b-lg">
      <p>&copy; 2024 My React App. All rights reserved.</p>
    </footer>
  );
};

// The main App component assembles all the other components.
const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans p-4">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-lg w-full">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default App;

<WelcomeMessage> 
import WelcomeMessage from './components/WelcomeMessage
</WelcomeMessage>
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

     <WelcomeMessage /> 

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
