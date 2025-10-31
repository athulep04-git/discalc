import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function Calculator(){
  const [price,setprice]=useState("");
  const [discount,setdiscount]=useState("");
  const [offerprice,setofferprice]=useState("");

  const calculateofferprice=()=>{
    if (price&&discount&&price>0&&discount>0) {
      const opValue=price-price*(discount/100);
      setofferprice(opValue);
    } else {
      alert("Please enter  a valid value for both price and discount");
    }
  };
  const clearAll=()=>{
    setprice(" ");
    setdiscount(" ");
    setofferprice(" ");
  };

  return(
    <div>
      <Container className="text-center mt-2 p-4">
        <div
          className="p-4 mx-auto rounded"
          style={{ maxWidth: "600px", backgroundColor: "#ddffb3ff" }}
        >
          <h1 className="p-4">Discount Calculator</h1>
          <div className="text-center mt-3">
            <label>Original price</label>
            <input
              type="number"
              placeholder="Enter original price"
              value={price}
              onChange={(e) => setprice(e.target.value)}
              className=" mb-3 mx-auto rounded"
              style={{ maxWidth: "320px" }}
            />
            <br />
            <label>Discount percentage</label>
            <input
              type="number"
              placeholder="Discount percentage"
              value={discount}
              onChange={(e) => setdiscount(e.target.value)}
              className=" mb-3 mx-auto rounded"
              style={{maxWidth:"320px" }}
            />

            <Row className="mt-2">
              <Col>
                <Button
                  className="w-100"
                  variant="success"
                  onClick={calculateofferprice}
                >
                  Calculate
                </Button>
              </Col>
              <Col>
                <Button className="w-100" variant="danger" onClick={clearAll}>
                  Clear
                </Button>
              </Col>
            </Row>
            <h3 className="mt-3">Offer Price: ₹{offerprice}</h3>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Calculator;
