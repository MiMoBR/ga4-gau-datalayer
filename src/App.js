import logo from './logo.svg'
import './App.css'

function App() {

  const GtagEventGA4 = () => { 
    window.dataLayer.push({
      event: 'click Cta React',
      category: 'aHref Clicks',
      action: 'Follow Link',
      label: 'Click here!',
      value: 1981
    });
  } 

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p className="App-link"
            onClick={ () => { GtagEventGA4() }}
          >Click here!</p>
        </header>
      </div>
  );
}

export default App;
