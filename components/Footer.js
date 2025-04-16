import React from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Nav,
  Row,
} from 'react-bootstrap'
// import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
// import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div
      sticky='bottom'
      className='footerClass'
      style={{ backgroundColor: '#1a3d3c', color: '#9ed6d5 !important' }}
    >
      <Container sticky='bottom' className=''>
        <Row></Row>
        <Row>
          <Col xs={12} md={6}>
            <br />
            <h2 className='text-center textColor' style={{ color: '#9ed6d5' }}>
              Chaunce.dev
            </h2>
            <br />
            <br />

            <Container>
              <Row>
                <Col xs={2} />
                <Col xs={8}>
                  <p
                    className='text-center'
                    style={{ color: '#9ed6d5' }}
                    target='blank'
                  >
                    ©2025
                  </p>
                </Col>
                <Col xs={2} />
              </Row>
            </Container>
            <br />
            <br />
            <br />
          </Col>

          <Col xs={12} md={6}>
            <br />
            <h3 className='text-center' style={{ color: '#9ed6d5' }}>
              Social Media
            </h3>
            <br />
            <br />
            <Container>
              <Row>
                <Col style={{ textAlign: 'center' }}>
                  <Button
                    href='https://github.com/chaunceyplum'
                    style={{
                      backgroundColor: '#80ffd5',
                      borderColor: '#225150',
                      color: '#1a3d3c',
                    }}
                    size='20em'
                  >
                    Github
                    {/* <FaGithub /> */}
                  </Button>
                </Col>
              </Row>
              <br />

              <Row>
                <Col style={{ textAlign: 'center' }}>
                  <Button
                    href='https://www.linkedin.com/in/chauncey-plummer-5457361bb/'
                    size='20em'
                    style={{
                      backgroundColor: '#80ffd5',
                      borderColor: '#225150',
                      textAlign: 'center',
                      color: '#1a3d3c',
                    }}
                  >
                    LinkedIn
                    {/* <FaLinkedin /> */}
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
          <br />
          <br />
          <br />
        </Row>
      </Container>
      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br />
    </div>
  )
}

export default Footer
