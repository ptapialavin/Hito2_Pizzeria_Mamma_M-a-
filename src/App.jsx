import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';

function App() {
  const [view, setView] = useState('home'); // 'home' | 'login' | 'register'

  const renderView = () => {
    switch (view) {
      case 'register':
        return <RegisterPage />;
      case 'login':
        return <LoginPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar currentView={view} onNavigate={setView} />
      {renderView()}
      <Footer />
    </div>
  );
}

export default App;
