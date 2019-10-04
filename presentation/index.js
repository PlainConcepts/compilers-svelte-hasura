// Import React
import React from 'react';
import YglfTalk from './YglfTalk';
import Header from './Header';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Slide,
  Text,
  Quote
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import '../index.css';

const images = {
  plainLogo: require('../assets/plain-logo.png'),
  plainLogoDark: require('../assets/plain-logo-dark.png'),
  graceHopper: require('../assets/grace-hopper.png'),
  tomDale: require('../assets/tom-dale.png'),
  sveltesse: require('../assets/sveltesse.png'),
  svelteLogo: require('../assets/svelte.png'),
  svelteLogoDisabled: require('../assets/svelte-disabled.png'),
  introducingSvelte: require('../assets/introducing-svelte.png'),
  somethingChangedReact: require('../assets/something-changed-react.png'),
  plainBackgroundDark: require('../assets/plain-background-dark.png'),
  offices: require('../assets/offices.png')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#00D0FF',
    tertiary: '#43536D',
    quaternary: '#17212D'

  },
  {
    primary: 'Tw Cen MT',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide bgImage={images.graceHopper} bgRepeat="no-repeat" bgSize="60%" bgPosition="0%" bgColor="quaternary" padding="0 0 0 60%">
          <Heading size={2} textColor="secondary">
            Svelte and Hasura: the new hyped compilers
          </Heading>
          <Heading size={5} textColor="primary" margin="5% 0 0">
            26.10.2019
          </Heading>
          <Text textColor="primary" margin="5% 0 0">
            Marco de la Cruz Sánchez
          </Text>
          <Text textColor="primary">
            Iván Reinoso García
          </Text>
          <Image src={images.plainLogoDark} margin="10% 0 0 25%"></Image>
        </Slide>
        <Slide bgImage={images.graceHopper} bgRepeat="no-repeat" bgSize="60%" bgPosition="0%" bgColor="primary" padding="0 0 0 60%">
          <Heading size={3} textColor="secondary" margin="-15% 0 0 0">
            Grace Hopper
            </Heading>
          <Heading size={6} textColor="tertiary">
            Científica de la computación y militar
            </Heading>
          <Heading size={6} textColor="tertiary">
            Estados Unidos, 1906 - 1992
            </Heading>
          <Text textSize="smaller" textAlign="justify" padding="0 2%">
            <p>Grace Hopper es considerada la madre de la programación informática y creó el Lenguaje Común Orientado a Negocios (<mark>COBOL,</mark> por sus siglas en inglés): el primer lenguaje complejo de ordenador. Esta estadounidense obtuvo un doctorado en Matemáticas en Yale en 1934 y fue militar en la Armada estadounidense, donde alcanzó el grado de contraalmirante. Cuando Estados Unidos entró en la Segunda Guerra Mundial, abandonó su trabajo de profesora de matemáticas e ingresó en la Marina.</p>
          </Text>
          <Text textSize="smaller" textAlign="justify" padding="0 2%">
            <p>La Armada la envió a la Universidad de Harvard, donde trabajó como <mark>programadora del primer ordenador de gran capacidad, el Mark I.</mark> Cuando lo vio, pensó: “Caray, es el aparato más bonito que jamás he visto”. Tras la guerra, <mark>realizó el primer compilador</mark> para procesamiento de datos que usaba órdenes en inglés; sin saberlo, Hopper estaba abriendo el camino para hacer más fácil la codificación. En 1986 se retiró de la armada de EE UU de manera definitiva, siendo en ese momento la oficial de más edad. Tras retirarse, continuó dando conferencias, ejerció de consultora y participó en programas educativos.</p>
          </Text>
          <Quote textColor="tertiary" textSize="smaller">
            "Si es una buena idea, continuad y llevadla a cabo. Es mucho más fácil pedir disculpas que conseguir el permiso necesario"
            </Quote>
        </Slide>
        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo}></Header>
          <Heading size={3} textColor="tertiary">
          // TODO: Who we are and 4 more slides
          </Heading>
        </Slide>
        <Slide className="external-content-container">
          <Heading className="heading-top" size={3} textColor="primary">
            A dependency graph…
            </Heading>
          <YglfTalk slide={3} />
        </Slide>
        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo}></Header>
          <Heading size={3} textColor="tertiary">
            A reconciliation story...
            </Heading>
          <Text margin="5%">
            <a href="https://es.reactjs.org/docs/reconciliation.html">https://es.reactjs.org/docs/reconciliation.html</a>
          </Text>
        </Slide>
        <Slide className="external-content-container">
          <YglfTalk slide={9} />
        </Slide>
        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo}></Header>
          <Heading size={3} textColor="tertiary">
            A subliminal message...
          </Heading>
          <Text margin="5% 0 0" >
            Optimization
          </Text>
          <List>
            <ListItem textColor="tertiary"><a href="https://es.reactjs.org/docs/react-component.html#shouldcomponentupdate">shouldComponentUpdate</a></ListItem>
            <ListItem textColor="tertiary"><a href="https://es.reactjs.org/docs/react-api.html#reactpurecomponent">React.PureComponent</a></ListItem>
            <ListItem textColor="tertiary"><a href="https://es.reactjs.org/docs/hooks-reference.html#usememo">useMemo</a></ListItem>
            <ListItem textColor="tertiary"><a href="https://es.reactjs.org/docs/hooks-reference.html#usecallback">useCallback</a></ListItem>
          </List>
          <Text>
            Amortization
          </Text>
          <List>
            <ListItem textColor="tertiary"><a href="https://es.reactjs.org/blog/2018/11/27/react-16-roadmap.html#react-16x-q2-2019-the-one-with-concurrent-mode">Concurrent Mode</a></ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo}></Header>
          <Heading size={3} textColor="tertiary">
            A hidden engine...
          </Heading>
          <Image src={images.tomDale} margin="10% 18% 8%"></Image>
          <Text >
            <a href="https://tomdale.net/2017/09/compilers-are-the-new-frameworks">https://tomdale.net/2017/09/compilers-are-the-new-frameworks</a>
          </Text>
          <Text margin="3%">
            <a href="https://github.com/getify/You-Dont-Know-JS">https://github.com/getify/You-Dont-Know-JS</a>
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo}></Header>
          <Heading size={3} textColor="tertiary">
            Introducing...
          </Heading>
          <Image src={images.sveltesse} margin="5% 0 0 30%"></Image>
        </Slide>
        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo}></Header>
          <Heading size={3} textColor="tertiary">
            Introducing...
          </Heading>
          <Image src={images.svelteLogo} margin="5% 0 0 30%"></Image>
        </Slide>
        <Slide bgColor="primary" bgImage={images.svelteLogoDisabled} bgRepeat="no-repeat" bgSize="auto" >
          <Header logoSrc={images.plainLogo}></Header>
          <Heading size={3} textColor="tertiary">
            Introducing...
          </Heading>
          <Text margin="20% 0">
            adjective <span className="text-remark">/svelt/</span> attractively thin, graceful and stylish
            </Text>
          <Image src={images.introducingSvelte} margin="10% 0 0 15%"></Image>
        </Slide>
        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo}></Header>
          <Heading size={3} textColor="tertiary">
            Something has changed...
          </Heading>
          <Text margin="5% 0 0 0">React</Text>
          <Image src={images.somethingChangedReact} margin="0 35%"></Image>
        </Slide>
        <Slide className="external-content-container" >
          <iframe className="external-content" src="https://svelte.dev/repl/c5c0f9abe8354a1a9eb398e6ff914040?version=3.12.1"></iframe>
        </Slide>
        <Slide bgImage={images.plainBackgroundDark} bgRepeat="no-repeat" bgSize="60%" bgPosition="0%" bgColor="quaternary" padding="0 0 0 30%">
          <Heading size={3} textColor="primary">
            THANKS!
          </Heading>
          <Heading size={5} textColor="secondary">
            www.plainconcepts.com
          </Heading>
          <Heading size={5} textColor="secondary">
            @plainconcepts
          </Heading>
        </Slide>
        <Slide bgImage={images.offices} bgRepeat="no-repeat" bgSize="90%" bgPosition="40%" bgColor="quaternary">
        </Slide>
      </Deck>
    );
  }
}
