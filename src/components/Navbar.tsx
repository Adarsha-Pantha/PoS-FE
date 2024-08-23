"use client"


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-section">
        <div className="logo">
          <img src="" alt="Logo" className="h-10" />
         
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
      <div className="search-bar-container">
        <div className="search-bar">
          <span role="img" aria-label="search" className="text-blue-500">
            🔍
          </span>
          <input type="text" placeholder="GG search" className="bg-transparent" />
        </div>
      </div>
      <div className="right-section">
        <div className="auth-buttons">
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
};



export default Navbar;

