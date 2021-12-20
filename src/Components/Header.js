import React from "react";
import Nav from "react-bootstrap/Nav";
import Select from "react-select";
import axios from "axios";
import { useEffect, useState } from "react";
import countries from "../utils/Countries.json";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const coinOptions = [
  {
    value: "polkadot",
    label: (
      <>
        <span>Polkadot</span>
        
      </>
    ),
  },
  { value: "kusama", label: "Kusama" },
];

function Header() {
  
  const [coinId, setCoinId] = useState("");
  const [price, setPrice] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState("");
  const [selectedFiat, setSelectedFiat] = useState("usd");
  console.log("selected crypto", selectedCrypto, selectedFiat);

  const fetchCurrencyPrice = async (currency, fiat) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/?coinId=${currency}&currency=${fiat.toLowerCase()}`
      );
      const data = res.data[currency];
      console.log(data);
      setPrice(data[fiat.toLowerCase()]);
      console.log("called price", data);
    } catch (e) {
      console.log(e, e.message);
    }
  };

  useEffect(() => {

    if (
      selectedCrypto &&
      selectedCrypto.length &&
      selectedFiat &&
      selectedFiat.length
    ) {
      fetchCurrencyPrice(selectedCrypto, selectedFiat);
    }
  }, [selectedCrypto, selectedFiat]);

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            Kusama <span>calculator</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="customNav">
            <Nav className="">
              <Nav.Link href="">Price</Nav.Link>
              <Nav.Link href="/EMA30">EMA30</Nav.Link>
              <Nav.Link href="/Stakes">Stakes</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="calContainer">
        <Container>
          
          <Row>
            <Col md={6}>
              <div className="imgBlock">
                <img src="./money-img.png" alt="" width="100%" />
              </div>
            </Col>

            <Col md={6}>
              
              <div className="customCard">
                <div className="inputContainer">
                  <div>
                   
                    <input
                      type="text"
                      name="kusama"
                      value={coinId}
                      onChange={(e) => setCoinId(e.target.value)}
                      id="kusama"
                      placeholder="1.00"
                    />
                  </div>

                  <div>
                    <Select
                      defaultValue={{ label: "Polkadot", value: 0 }}
                      options={coinOptions}
                      onChange={(item) => setSelectedCrypto(item.value)}
                    />
                  </div>
                </div>

                {/* <CustomSelect /> */}
                {/* text box */}
                <div className="inputContainer">
                  <div>
                
                    <input
                      type="text"
                      contentEditable={false}
                      name="currency"
                      value={coinId * price || 0}
                      id="inr"
                    />
                  </div>

                  <div>
                    <Select
                      options={countries.map((item) => ({
                        value: item.currency.code,
                        label: `${item.currency.code} - ${item.currency.name}`,
                      }))}
                      onChange={(option) => setSelectedFiat(option.value)}
                     
                    />
                  </div>
                </div>
                <div className="text-center">
                  <a href="/" className="currencyDisplay">
                    {coinId} {selectedCrypto} ={" "}
                    {
                      countries.filter(
                        (item) =>
                          item.currency.code === selectedFiat.toUpperCase()
                      )[0].currency.symbol
                    }
                    {/* {price} */}
                    {coinId * price || 0}
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Header;
