import logo from './logo.svg'
import './App.css'
import TagManager from 'react-gtm-module'

const tagManagerArgs = { gtmId: 'GTM-WV45BL3'}
TagManager.initialize(tagManagerArgs)

function App() {

  const eventClick = () => {
    window.dataLayer.push({
      event: 'click',
      category: 'link-href',
      action: 'click-cta',
      label: 'click here',
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>GAU - UA-98256327-1</p>
        <p>G-K6MBY9B33E</p>
        <p>GTM-WV45BL3</p>
        <p className="App-link"
          onClick={ () => {
            eventClick();
          }}
        >Click here!</p>
      </header>
    </div>
  );
}

export default App;
