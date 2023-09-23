import logo from './logo.svg'
import './App.css'
// import ReactGA from 'react-ga' // 1 - Library GAU direct without dataLayer
import TagManager from 'react-gtm-module' // 2 - Library GTM to send event by dataLayer
// import ReactGA from "react-ga4" // 3 - Library GA4 direct without dataLayer - https://www.npmjs.com/package/react-ga4


//ReactGA.initialize('UA-91207311-17')// 1 - Library GAU direct without dataLayer


// GA4 - PROPERTY ID: 332041732 - MEASUREMENT ID G-DNMRELNT2D

const tagManagerArgs = { gtmId: 'GTM-WV45BL3'}// 2 - Library GTM to send event by dataLayer
TagManager.initialize(tagManagerArgs)// 2 - Library GTM to send event by dataLayer

// ReactGA.initialize("G-K6MBY9B33E"); // 3 - Library GA4 direct without dataLayer


function App() {
  // const TrackEvent = (action, category, label) => {// 1 - Library GAU direct without dataLayer
  //   ReactGA.event({
  //     action: action,
  //     category: category,
  //     label: label
  //   })
  // }
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
    window.gtag("event", "ga4CustomEventGTAG", {
      event_action:   "ga4CustomEventGTAGAction",
      event_category: "ga4CustomEventGTAGCategory",
      event_label:    "ga4CustomEventGTAGLabel",
      event_value:    "ga4CustomEventGTAGValue"
    });
    console.log('Gtag GA4 event + propeties sent')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-link"
          onClick={ () => {
            // TrackEvent('clickActionTest', 'menuCategoryTest', 'testLabel'); // 1 - Library GAU direct without dataLayer
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
