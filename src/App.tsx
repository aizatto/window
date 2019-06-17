import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Container, FormGroup, Label, Col, Table, Input } from 'reactstrap';
import Navbar from './Navbar';

import "./bootstrap.min.css";

const App: React.FC = () => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [outerHeight, setOuterHeight] = useState(window.outerHeight);
  const [outerWidth, setOuterWidth] = useState(window.outerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);
      setOuterHeight(window.outerHeight);
      setOuterWidth(window.outerWidth);
    }

    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  });


  return (
    <>
      <Navbar />
      <Container>
        <Table hover>
          <thead>
            <tr>
              <th style={{width: 200}}>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight">
                  window.innerHeight
                </a>
              </td>
              <td><code>{innerHeight}</code></td>
            </tr>
            <tr>
              <td>
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth">
                  window.innerWidth
                </a>
              </td>
              <td><code>{innerWidth}</code></td>
            </tr>
            <tr>
              <td>
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/outerHeight">
                  window.outerHeight
                </a>
              </td>
              <td><code>{outerHeight}</code></td>
            </tr>
            <tr>
              <td>
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/outerWidth">
                  window.outerWidth
                </a>
              </td>
              <td><code>{outerWidth}</code></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default App;
