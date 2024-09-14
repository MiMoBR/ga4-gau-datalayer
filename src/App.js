import logo from './logo.svg'
import './App.css'
//import ReactGA from 'react-ga' // 1 - Library GAU direct without dataLayer
import TagManager from 'react-gtm-module' // 2 - Library GTM to send event by dataLayer
//import ReactGA4 from "react-ga4" // 3 - Library GA4 direct without dataLayer - https://www.npmjs.com/package/react-ga4


//eactGA.initialize('UA-98256327-1')// 1 - Library GAU direct without dataLayer
//ReactGA4.initialize("G-K6MBY9B33E"); // 3 - Library GA4 direct without dataLayer

// GA4 - PROPERTY ID: 332041732 - MEASUREMENT ID G-DNMRELNT2D

const tagManagerArgs = { gtmId: 'GTM-WV45BL3'}// 2 - Library GTM to send event by dataLayer
TagManager.initialize(tagManagerArgs)// 2 - Library GTM to send event by dataLayer



const tagManagerArgs = { gtmId: 'GTM-WV45BL3'}
TagManager.initialize(tagManagerArgs)

function App() {
  //const TrackEvent = (action, category, label) => {// 1 - Library GAU direct without dataLayer
    //ReactGA.event({
      //action: action,
      //category: category,
      //label: label
    //});
    //ReactGA4.event({
      //action: action,
      //category: category,
      //label: label
   // })
  //}
  // const CreateDL = () => {// 2 - Library GTM to send event by dataLayer
  //   window.dataLayer.push({
  //     event: 'gauCustomEvent',
  //     action: 'clickActionTest2',
  //     category: 'menuCategoryTest2',
  //     label: 'label2'
  //   });
  // }
  // const TrackEventGa4 = (category ,action ,label ,value , nonInteraction) => { // 3 - Library GA4 direct without dataLayer
  //   ReactGA.send("ga4CustomEvent");
  //   ReactGA.event({
  //     category: category,
  //     action: action,
  //     label: label, // optional
  //     value: value, // optional, must be a number
  //     nonInteraction: nonInteraction, // optional, true/false
  //   });
  // }

  //<!-- Google tag (gtag.js) -->
  //<script async src="https://www.googletagmanager.com/gtag/js?id=G-K6MBY9B33E"></script>

  //<script>
  //    window.dataLayer = window.dataLayer || [];
  //    function gtag(){dataLayer.push(arguments);}
  //    gtag('js', new Date());

  //    gtag('config', 'G-K6MBY9B33E');
  //</script>

  //<script>
  //  window.gtag("event", "Test_Gtag_GA4_A", {
  //      event_action:   "Auto Equity A",
  //      event_category: "Email já cadastrado A",
  //      event_label:    "ga4CustomEventGTAGLabel",
  //      event_value:    "ga4CustomEventGTAGValue"
  //  });
//console.log('test 1');
  //  gtag('event', 'Test_Gtag_GA4_B', {
  //        event_action: 'Auto Equity B',
  //        event_category: 'Email já cadastrado B'
  //  });
//console.log('test 2');
  //</script>

  const GtagEventGA4 = () => { // Create DL
    window.gtag('event', 'cta', {
      action:'click sem aspas',
      category:'link href',
      label:'click here',
      value:'10'
    });
    //console.log('Gtag GA4 event + propeties sent')
    //window.dataLayer.push({
    //  event: 'button_click',
    //  event_category: 'Navigation',
    //  event_label: 'Click on "My Button"',
    //});
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
            //TrackEvent('click', 'link href', 'click here'); // 1 - Library GAU direct without dataLayer
            //CreateDL(); // 2 - Library GTM to send event by dataLayer
            // TrackEventGa4('clickActionTestGA4', 'menuCategoryTestGA4', 'testLabelGA4', 99, true); // 3 - Library GA4 direct without dataLayer
            GtagEventGA4() // To create a Data Layer
          }}
        >Click here!</p>
      </header>
    </div>
  );
}

export default App;
