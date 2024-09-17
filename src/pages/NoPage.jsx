import React from "react";
import { Link } from 'react-router-dom';
import '../not_found.css'; 

function NoPage() {
  return (
    <>
      <div className="not-found-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Page Not Found</h2>
        <p className="error-description">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="back-home">
          Go Back to Home
        </Link>
      </div>
    </>
  );
}

export default NoPage;
