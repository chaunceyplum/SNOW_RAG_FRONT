'use client'

import { useState } from 'react'
import { Col, Container, Input, Row } from 'reactstrap'
import Loader from './Loader'

export default function OllamaChat() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResponse('')

    try {
      const res = await fetch(`http://localhost:8000/question?query=${input}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({
        //   model: 'llama3.2', // change to your desired model
        //   prompt: input,
        //   stream: false,
        // }),
      })

      const data = await res.json()
      setResponse(data)
      console.log(data)
    } catch (err) {
      console.error(err)
      setResponse('Error connecting to Ollama server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className='max-w-xl mx-auto p-4'
      style={{ backgroundColor: '#3f7675' }}
    >
      <br />
      <br />
      <br />
      <br />
      <Container>
        <div
          className='rounded'
          style={{ backgroundColor: '#0e2020', padding: '50px 50px' }}
        >
          {response ? (
            <div></div>
          ) : (
            <div>
              <h1 style={{ Color: '#9ed6d5' }}>
                Ask anything — get smart answers straight from our Snowflake
                documentation.
              </h1>
              <br />
              <br />
              <h3 style={{ Color: '#9ed6d5' }}>
                Just type your question and hit submit — that’s it. The app
                pulls info from our Snowflake documentation and gives you a
                smart, easy-to-understand answer. No SQL, no setup — just ask
                whatever you’re curious about.
              </h3>
            </div>
          )}

          <strong style={{ Color: '#9ed6d5' }}>Answer:</strong>
          <br />
          <strong style={{ Color: '#9ed6d5' }}>
            {loading ? <Loader /> : response}
          </strong>
          {/* {response} */}
        </div>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <form onSubmit={handleSubmit} className='space-y-4 text-center'>
          <Container>
            <Row>
              <Col xs={12} md={10}>
                <br />
                <br />
                <Input
                  type='textarea'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: '#3f7675',
                    color: '#9ed6d5',
                  }}
                />
              </Col>
              <Col xs={12} md={2}>
                <br />
                <br />
                <button
                  type='submit'
                  className='px-4 py-2  text-dark rounded'
                  disabled={loading}
                >
                  {loading ? 'Thinking...' : 'Submit'}
                </button>
              </Col>
            </Row>
          </Container>
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </div>
  )
}
