import "./App.scss";
import {isMobile} from 'react-device-detect';

import desktop_divider from './images/pattern-divider-desktop.svg'
import mobile_divider from './images/pattern-divider-mobile.svg'

function App() {
  {/* Check the device */}
  {/* fetch API */}
  return(
  <div className="App">
      <div className="quote-container">
        <small>Advice #123</small>
        <p>Quote</p>
        <img src={isMobile ? mobile_divider : desktop_divider} alt="Pattern divider" />
    </div>
  </div>)
}

export default App;
