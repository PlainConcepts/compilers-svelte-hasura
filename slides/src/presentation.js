import React from 'react';

import {
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Slide,
  Text,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

import { GraceHopperSlide, Header, RethinkingReactivity } from './components';

import './index.css';

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

const images = {
  plainLogo: require('./assets/plain-logo.png'),
  plainLogoDark: require('./assets/plain-logo-dark.png'),
  tomDale: require('./assets/tom-dale.png'),
  sveltesse: require('./assets/sveltesse.png'),
  svelteLogo: require('./assets/svelte.png'),
  svelteLogoDisabled: require('./assets/svelte-disabled.png'),
  introducingSvelte: require('./assets/introducing-svelte.png'),
  somethingChangedReact: require('./assets/something-changed-react.png'),
  importingComponents: require('./assets/importing-components.png'),
  thinking: require('./assets/thinking.png'),
  howObservableRuns: require('./assets/how-observable-runs.png'),
  introducingReactivity: require('./assets/introducing-reactivity.png'),
  smile: require('./assets/smile.png'),
  doubleSmile: require('./assets/double-smile.png'),
  performance1: require('./assets/performance1.png'),
  performance2: require('./assets/performance2.png'),
  plainBackgroundDark: require('./assets/plain-background-dark.png'),
  offices: require('./assets/offices.png')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>

        <Slide bgColor="quaternary">
          <Heading size={2} textSize={200} textColor="secondary">
            Compilers
          </Heading>
          <Heading size={2} textSize={75} textColor="secondary">
            The hype from the 50's returns
          </Heading>
          <Image src={images.plainLogoDark} width={250} height={250} />
        </Slide>

        <GraceHopperSlide />

        <GraceHopperSlide reveal />

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            TODO: Who we are and 4 more slides
          </Heading>
        </Slide>

        <Slide className="external-content-container">
          <Heading className="heading-top" size={3} textColor="primary">
            A dependency graph…
          </Heading>
          <RethinkingReactivity slide={3} />
        </Slide>

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            A reconciliation story...
          </Heading>
          <Text margin="5%">
            <a href="https://es.reactjs.org/docs/reconciliation.html">https://es.reactjs.org/docs/reconciliation.html</a>
          </Text>
        </Slide>

        <Slide className="external-content-container">
          <RethinkingReactivity slide={9} />
        </Slide>

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            A subliminal message...
          </Heading>
          <Text margin="5% 0 0">
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
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            A hidden engine...
          </Heading>
          <Image src={images.tomDale} margin="10% 18% 8%" />
          <Text >
            <a href="https://tomdale.net/2017/09/compilers-are-the-new-frameworks">
              https://tomdale.net/2017/09/compilers-are-the-new-frameworks
            </a>
          </Text>
          <Text margin="3%">
            <a href="https://github.com/getify/You-Dont-Know-JS">
              https://github.com/getify/You-Dont-Know-JS
            </a>
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            Introducing...
          </Heading>
          <Image src={images.sveltesse} margin="5% 0 0 30%" />
        </Slide>

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            Introducing...
          </Heading>
          <Image src={images.svelteLogo} margin="5% 0 0 30%" />
        </Slide>

        <Slide bgColor="primary" bgImage={images.svelteLogoDisabled} bgRepeat="no-repeat" bgSize="auto" >
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            Introducing...
          </Heading>
          <Text margin="20% 0">
            adjective <span className="text-remark">/svelt/</span> attractively thin, graceful and stylish
          </Text>
          <Image src={images.introducingSvelte} margin="10% 0 0 15%" />
        </Slide>

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            Something has changed...
          </Heading>
          <Text margin="5% 0 0 0">React</Text>
          <Image src={images.somethingChangedReact} margin="0 35%" />
        </Slide>

        <Slide className="external-content-container" >
          <iframe
            title="svelte-repl"
            className="external-content"
            src="https://svelte.dev/repl/c5c0f9abe8354a1a9eb398e6ff914040?version=3.12.1"
          />
        </Slide>

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            Importing components...
          </Heading>
          <Image src={images.importingComponents} />
        </Slide>

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            Reactive?
          </Heading>
          <Image src={images.thinking} />
        </Slide>

        <Slide className="external-content-container" >
          <iframe
            title="svelte-repl"
            className="external-content"
            src="https://codesandbox.io/s/dotnetmalagareact-not-reactive-qpwvu"
          />
        </Slide>

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Text><a href="https://observablehq.com/@observablehq/how-observable-runs">@mbostock</a></Text>
          <Text textSize="medium" textAlign="justify">
            <p>If you’ve used other interactive notebooks before, you’re probably accustomed to code running from top to bottom. The first cell runs first, the second cell runs second and can reference values defined in the first cell, and so on down the page.</p>
          </Text>
          <Text textSize="medium" textAlign="justify">
            <p>Observable is different: <mark>it functions like a spreadsheet</mark>, where cells (like formulas) <mark>run automatically</mark> whenever their referenced values change. Observable runs cells independently of their order in the notebook, giving you the flexibility to arrange your cells in whatever order you prefer for literate programming.</p>
          </Text>
          <Text textSize="medium" textAlign="justify">
            <p>Observable uses <mark>topological order</mark> to run cells, as determined by cell references. If cell B needs the value of cell A, Observable won’t run cell B until A is computed. Likewise whenever the value of cell A changes, cell B is automatically recomputed. Rather than a linear sequence of cells, an Observable notebook is a <mark>directed graph</mark> where values flow from top to bottom.</p>
          </Text>
          <Image src={images.howObservableRuns} margin="2% 10%" />
        </Slide>

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            Introducing reactivity...
          </Heading>
          <Image src={images.introducingReactivity} />
          <Text margin="3%">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label">
              https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
            </a>
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            Reactive
          </Heading>
          <Image src={images.smile} />
        </Slide>

        <Slide className="external-content-container" >
          <iframe
            title="svelte-repl"
            className="external-content"
            src="https://svelte.dev/repl/96bfb2fce133460f8eb16cb737def0f4?version=3.12.1"
          />
        </Slide>

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            Reactive<sup>2</sup>
          </Heading>
          <Image src={images.doubleSmile} />
        </Slide>

        <Slide className="external-content-container" >
          <iframe
            title="svelte-repl"
            className="external-content"
            src="https://svelte.dev/repl/cb9a18ab1a0c45709d33e607da443de0?version=3.12.1"
          />
        </Slide>

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            And about performance...
          </Heading>
          <Image src={images.performance1} margin="10% 18% 8%" />
          <Text >
            <a href="https://hacks.mozilla.org/2019/03/fast-bump-allocated-virtual-doms-with-rust-and-wasm/">
              https://hacks.mozilla.org/2019/03/fast-bump-allocated-virtual-doms-with-rust-and-wasm/
            </a>
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            And about performance...
          </Heading>
          <Image src={images.performance2} margin="3% 30%" />
          <Text >
            <a href="https://twitter.com/kentcdodds/status/1177653640862912512">
              @kentcdodds
            </a>
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            Beyond Svelte...
          </Heading>
          <Text margin="5% 0 0">
            <a href="https://sapper.svelte.dev/">Sapper</a>
          </Text>
          <List>
            <ListItem textColor="tertiary">Next/Gatsby-style framework...</ListItem>
            <ListItem textColor="tertiary">...except with much less JavaScript</ListItem>
            <ListItem textColor="tertiary">Automatic SSR & Code-Splitting</ListItem>
          </List>
          <Text margin="5% 0 0">
            <a href="https://svelte-native.technology/">Svelte Native</a>
          </Text>
          <List>
            <ListItem textColor="tertiary">Community-driven project</ListItem>
            <ListItem textColor="tertiary">Based on nativescript-vue</ListItem>
          </List>
          <Text margin="5% 0 0">
            <a href="https://github.com/Rich-Harris/svelte-gl">Svelte GL</a>
          </Text>
          <List>
            <ListItem textColor="tertiary">Like Three.js, but svelter</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary">
          <Header logoSrc={images.plainLogo} />
          <Heading size={3} textColor="tertiary">
            Give a try...
          </Heading>
          <Image src={images.svelteLogo} margin="5% 0 0 30%" />
          <Text margin="3%">
            <a href="https://svelte.dev/">
              https://svelte.dev/
            </a>
          </Text>
          <Text margin="3%">
            <a href="https://twitter.com/Rich_Harris">
              @Rich_Harris
            </a>
          </Text>
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

        <Slide bgImage={images.offices} bgRepeat="no-repeat" bgSize="75%" bgPosition="50%" bgColor="quaternary" />

      </Deck>
    );
  }
}
