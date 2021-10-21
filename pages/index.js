import { Container, Row, Col } from "react-bootstrap";
import Header from "../layout/Header";

export default function Home() {
  return (
    <main className="sp-main">
      <section className="sp-intro-page">
        <Container>
          <Row className="justify-content-between align-items-end">
            <Col xl={5}>
              <h5>So, you want to travel to</h5>
              <h1>Space</h1>
              <p>
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </Col>
            <Col xl={5}>
              <a href="/destination" className="sp-explore">
                <h4>Explore</h4>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
