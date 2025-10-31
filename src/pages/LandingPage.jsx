import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
            <section className="d-flex flex-column justify-content-center align-items-center text-center my-5 py-5 bg-light rounded shadow-lg">
          <h1 className="mb-4 display-4 fw-bold">Movies</h1>
          <p className="mb-4 lead text-secondary">
          </p>
          <Link to="/movies">
            <Button variant="dark" size="lg" className="px-5 py-2">
              Get Started
            </Button>
          </Link>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center text-center my-5 py-5 bg-light rounded shadow-lg">
          <h1 className="mb-4 display-4 fw-bold">Discount calculator</h1>
          <p className="mb-4 lead text-secondary">
          </p>
          <Link to="/discount">
            <Button variant="dark" size="lg" className="px-5 py-2">
              Get Started
            </Button>
          </Link>
      </section>
      
    </div>
    
  )
}

export default LandingPage