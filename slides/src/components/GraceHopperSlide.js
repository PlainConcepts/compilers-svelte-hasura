import React from "react";

import { Heading, Quote, Slide, Text } from 'spectacle';

const bgImage = require('../assets/grace-hopper.png');

const containerStyle = {
  position: 'absolute',
  right: '0',
  top: '15%',
  width: '40%',
  'vertical-align': 'middle',
  margin: 'auto',
  padding: '0 1rem'
};

const Paragraph = ({ children }) => (
  <Text textSize="smaller" textAlign="justify" padding="0 2%">
    <p>{children}</p>
  </Text>
);

export default ({ reveal }) => (
  <Slide
    bgImage={bgImage}
    bgRepeat="no-repeat"
    bgSize="60%"
    bgPosition="0%"
    bgColor="primary"
  >
    {reveal && (
      <div style={containerStyle}>
        <Heading size={3} textColor="secondary" margin="-15% 0 0 0">
          Grace Hopper
        </Heading>
        <Heading size={6} textColor="tertiary">
          Científica de la computación y militar
        </Heading>
        <Heading textSize={25} textColor="tertiary">
          Estados Unidos, 1906 - 1992
        </Heading>
        <Paragraph>
            Grace Hopper es considerada la madre de la programación informática
            y creó el Lenguaje Común Orientado a Negocios (<mark>COBOL,</mark>
            por sus siglas en inglés): el primer lenguaje complejo de ordenador.
            Esta estadounidense obtuvo un doctorado en Matemáticas en Yale en
            1934 y fue militar en la Armada estadounidense, donde alcanzó el
            grado de contraalmirante. Cuando Estados Unidos entró en la Segunda
            Guerra Mundial, abandonó su trabajo de profesora de matemáticas e
            ingresó en la Marina.
        </Paragraph>
        <Paragraph>
            La Armada la envió a la Universidad de Harvard, donde trabajó como <mark>
            programadora del primer ordenador de gran capacidad, el Mark I.</mark>
            Cuando lo vio, pensó: “Caray, es el aparato más bonito que jamás he visto”.
            Tras la guerra, <mark>realizó el primer compilador</mark> para procesamiento
            de datos que usaba órdenes en inglés; sin saberlo, Hopper estaba abriendo
            el camino para hacer más fácil la codificación. En 1986 se retiró de la
            armada de EE UU de manera definitiva, siendo en ese momento la oficial de
            más edad. Tras retirarse, continuó dando conferencias, ejerció de consultora
            y participó en programas educativos.
        </Paragraph>
        <Quote textColor="tertiary" textSize="smaller">
          "Si es una buena idea, continuad y llevadla a cabo. Es mucho más fácil pedir
          disculpas que conseguir el permiso necesario"
        </Quote>
      </div>
    )}
  </Slide>
);