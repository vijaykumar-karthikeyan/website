import React from 'react';
import './App.css';  // Import the CSS file for styling
import pandaLogo from './assets/panda2.png'; // logo

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <img
          src={pandaLogo} // Replace with your actual logo URL or asset path
          alt="Logo"
          className="logo"
        />
        <h1 className="headerText">Welcome to My Website!</h1>
      </header>

      {/* About Me Section */}
      <section className="section">
        <h2 className="title">About Vijay</h2>
        <p className="text">
          Hi, I'm a first year undergradute student at UCLA studying Computer Science and Engineering. My interests include Computer Science, Bioengineering, Machine Learning, and their intersection.
          I am passionate about Research and Software Development.
          
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="section">
        <h2 className="title">My Portfolio</h2>
        <p className="text">
          Here are some of my recent projects:
        </p>
        <button className="button" onClick={() => alert('Navigating to Portfolio')}>
          View Portfolio
        </button>
      </section>

      {/* Contact Section */}
      <section className="section">
        <h2 className="title">Contact Me</h2>
        <p className="text">You can reach me at my email or through social media.</p>
        <button className="button" onClick={() => alert('Navigating to Contact')}>
          Contact Me
        </button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p className="footerText">&copy; 2025 Vijaykumar Karthikeyan. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
