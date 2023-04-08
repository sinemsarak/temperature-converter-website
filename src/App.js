import Fhr from "./fahrenheit";
import Celcius from "./celcius";
import Kelvin from "./kelvin";
import { Container, Col, Row } from "reactstrap";
import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import Picture from "./picture";

function App() {
  const [deger, setDeger] = useState("25");
  const degernumber = Number(deger);
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        display: "flex",
        backgroundColor: "#80ceff",
        height: "100vh",
        width: "100%",
      }}
    >
      <Container>
        <Row>
          <Col
            xs="8"
            style={{
              margin: "20px",
              marginLeft: "40px",
              marginRight: "40px",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                backgroundImage: `url(https://swall.teahub.io/photos/small/2-27230_clouds-background-hd-sky-hd-images-png.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: 280,
                width: 498,

                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingBottom: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Container style={{ color: " #003366", fontWeight: "bold" }}>
                <Row>
                  <Col>
                    <h2>Hava Sıcaklığı:</h2>
                    <br />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <label>Şu an sıcaklık</label> {"  "}
                      <input
                        id="girdi"
                        value={deger}
                        onChange={(a) => setDeger(a.target.value)}
                        type="number"
                        style={{
                          backgroundColor: "transparent",
                          color: "white",
                          width: "40px",
                          borderStyle: "solid",
                          borderColor: "black",
                          textAlign: "center"
                        }}
                      />
                      {"  "}
                      <label>derece</label>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <br />
                    <Button
                      size="sm"
                      outline
                      color="danger"
                      onClick={() => setDeger(degernumber + 1)}
                    >
                      {" "}
                      Sıcaklığı 1 derece arttır
                    </Button>
                  </Col>
                  <Col xs="4">
                    <br />
                    <Button
                      size="sm"
                      outline
                      color="primary"
                      onClick={() => setDeger(degernumber - 1)}
                    >
                      {" "}
                      Sıcaklığı 1 derece azalt
                    </Button>{" "}
                    <br></br> <br></br>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <Celcius derece={degernumber} />
                  </Col>
                  <Col xs="4">
                    <Fhr derece={degernumber} />
                  </Col>
                  <Col xs="4">
                    <Kelvin derece={degernumber} />
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
          <Col xs="3">
            <div
              style={{
                marginRight: "60px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingBottom: "20px",
                borderRadius: "10px",
              }}
            >
              <Picture derece={degernumber} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
