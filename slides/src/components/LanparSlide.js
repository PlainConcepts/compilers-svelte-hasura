import React from "react";
import Header from './Header';
import { Slide } from 'spectacle';

const bgImage = require('../assets/lanpar.png');
const plainLogo = require('../assets/plain-logo.png');

const containerStyle = {
  position: 'absolute',
  right: '10%',
  top: '15%',
  width: '40%',
  'vertical-align': 'middle',
  margin: 'auto',
  padding: '0 1rem'
};

export default ({ children }) => (
  <Slide
    bgImage={bgImage}
    bgRepeat="no-repeat"
    bgSize="25.5%"
    bgPosition="30%"
    bgColor="primary"
  >
    {(
      <React.Fragment>
        <Header logoSrc={plainLogo} />
        <div style={containerStyle}>
          {children}
        </div>
      </React.Fragment>
    )}
  </Slide>
);