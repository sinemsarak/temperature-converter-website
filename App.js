import Fhr from "./fahrenheit";
import Celcius from "./celcius";
import Kelvin from "./kelvin";
import { Container, Col, Row } from "reactstrap";
import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import Picture from "./picture";
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sicak: 25,
    };
  }

  artir = () => {
    this.setState({
      sicak: this.state.sicak + 1,
    });
  };
  azalt = () => {
    this.setState({
      sicak: this.state.sicak - 1,
    });
  };

  render() {
    return (
      <div
        style={{
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
                marginTop: "70px",
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
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Şu an sıcaklık {this.state.sicak} derece</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="4">
                      <Button
                        size="sm"
                        outline
                        color="danger"
                        onClick={this.artir}
                      >
                        {" "}
                        Sıcaklığı 1 derece arttır
                      </Button>
                    </Col>
                    <Col xs="4">
                      <Button
                        size="sm"
                        outline
                        color="primary"
                        onClick={this.azalt}
                      >
                        {" "}
                        Sıcaklığı 1 derece azalt
                      </Button>{" "}
                      <br></br> <br></br>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="4">
                      <Celcius derece={this.state.sicak} />
                    </Col>
                    <Col xs="4">
                      <Fhr derece={this.state.sicak} />
                    </Col>
                    <Col xs="4">
                      <Kelvin derece={this.state.sicak} />
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col xs="3">
              <div
                style={{
                  marginTop: "60px",
                  marginRight: "60px",
                  paddingTop: "20px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingBottom: "20px",
                  borderRadius: "10px",
                }}
              >
                <Picture derece={this.state.sicak} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
