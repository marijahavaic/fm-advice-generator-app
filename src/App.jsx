import "./App.scss";
import {isMobile} from 'react-device-detect';

import desktop_divider from './images/pattern-divider-desktop.svg'

function App() {
  {/* Check the device */}
  {/* fetch API */}
  return(
  <div className="App">
      <div className="quote-container">
        <small>Advice #123</small>
        <p>Quote</p>
        <img src={desktop_divider} alt="Pattern divider" />
    </div>
  </div>)
}

export default App;
