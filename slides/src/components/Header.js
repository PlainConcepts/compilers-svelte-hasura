import React from 'react';
import { Image, Text, } from 'spectacle';

export default ({ logoSrc }) => (
  <React.Fragment>
      <Image src={logoSrc} className="header-logo"></Image>
      <Text className="header-twitter" textSize="large">
          <a href="https://twitter.com/plainconcepts">@plainconcepts</a>
      </Text>
  </React.Fragment>
);