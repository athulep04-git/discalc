import { Row, Col, Card, Button,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function AllMovies() {
  const baseurl = `https://api.tvmaze.com/shows`;
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const response = await fetch(baseurl);
    const movieData = await response.json();
    console.log(movieData);
    setMovies(movieData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-4">
      <section>
        <h1 className="text-center ">All Movies</h1>
        <Form>
      <Row className="justify-content-center align-items-center my-3">
        <Col  className="d-flex">
          <Form.Control
            type="text"
            placeholder="Search movie"
            className="rounded-start"
          />
          <Button variant="primary" className="rounded-end">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
        <Row className="p-5">
          {movies.length > 0 ? (
            movies.map((item) => (
              <Col key={item.name} className="mb-4">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img
                      variant="top"
                      src={item.image.medium}
                    />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        Rating: {item.rating.average} ⭐ <br />
                        Genre: {item.genres.join(',')}
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </Col>
            ))
          ) : 
           "empty"
          }
        </Row>
      </section>
    </div>
  );
}

export default AllMovies;
