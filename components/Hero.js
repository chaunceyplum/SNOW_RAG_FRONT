import next from 'next'
import { Button, Col, Container, Row } from 'reactstrap'

const Hero = () => {
  return (
    <>
      <div style={{ backgroundColor: '#3f7675' }}>
        <Container>
          <Row>
            <Col>
              <br />
              <br />
              <h1 style={{ fontSize: 60, color: '#9ed6d5' }}>
                Welcome to SNOW RAG!
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <br />
              <br />
              <br />
              <br />
              <h3 style={{ fontSize: 40, color: '#9ed6d5' }}>
                Instant Answers from Your Snowflake Data
              </h3>
              <h4>
                <ul style={{ color: '#9ed6d5' }}>
                  <li>🧠 Built on Retrieval-Augmented Generation (RAG)</li>
                  <li>📊Supercharge your team with context-aware AI.</li>
                  <li>🔒 No setup or access required — just ask</li>
                  <li>⚡ Fast, relevant, and hallucination-free</li>
                </ul>
              </h4>
              <br />
              <br />
              <br />
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ textAlign: 'center' }}>
                <Button
                  href='/snow_rag'
                  style={{ backgroundColor: '#80ffd5', color: '#1a3d3c' }}
                >
                  Start Chatting
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  )
}

export default Hero
