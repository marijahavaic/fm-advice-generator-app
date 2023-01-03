import "./App.scss";
import {isMobile} from 'react-device-detect';

import desktop_divider from './images/pattern-divider-desktop.svg'
import mobile_divider from './images/pattern-divider-mobile.svg'
import icon_dice from './images/icon-dice.svg'

function App() {
  console.log(isMobile)
  return(
  <div className="App">
      <div className="quote-container">
        <small>Advice #123</small>
        <p>Quote</p>
        <img src={isMobile ? mobile_divider : desktop_divider} alt="Pattern divider" className="divider" />
        <button className="dice">
          <img src={icon_dice} alt="Icon dice" />
        </button>
    </div>
  </div>)
}

export default App;
