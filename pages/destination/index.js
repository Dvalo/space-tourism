import React, { useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { destinations } from "../../utils/utils";

export default function Destination() {
  const [activePlanet, setActivePlanet] = useState("moon");

  const updateActivePlanet = (planet) => {
    if (activePlanet !== planet) {
      setActivePlanet(planet);
    }
  };

  return (
    <main className="sp-main">
      <section className={"sp-destination-page active-" + activePlanet}>
        <Container>
          <div className="sp-page-title">
            <h5>
              <span>01</span>Pick your destination
            </h5>
          </div>
          <Row>
            <Col xs={6}>
              <div className="destination-image-wrapper">
                {destinations.map(({ name, images }) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={name}
                    src={images.png}
                    alt={name}
                    className={"destination-img destination-" + name}
                    width={445}
                    height={445}
                  />
                ))}
              </div>
            </Col>
            <Col xs={5}>
              <div className="destination-tabs">
                {destinations.map(({ name }) => (
                  <div
                    key={name}
                    className={"destination-tab nav-text tab-" + name}
                    onClick={() => updateActivePlanet(name)}
                  >
                    {name}
                  </div>
                ))}
              </div>
              <div className="destination-info-wrapper">
                {destinations.map(({ name, description, distance, travel }) => (
                  <div
                    className={"destination-info destination-" + name}
                    key={name}
                  >
                    <div className="destination-name">
                      <h2>{name}</h2>
                    </div>
                    <div className="destination-desc">
                      <p>{description}</p>
                    </div>
                    <div className="destination-details">
                      <div className="destination-detail">
                        <div className="destination-detail-title subheading-2">
                          avg. distance
                        </div>
                        <div className="destination-detail-fact subheading-1">
                          {distance}
                        </div>
                      </div>
                      <div className="destination-detail">
                        <div className="destination-detail-title subheading-2">
                          est. travel time
                        </div>
                        <div className="destination-detail-fact subheading-1">
                          {travel}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
