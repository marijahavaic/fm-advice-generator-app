import "./App.scss";
import { isMobile } from 'react-device-detect';

import { useQuery } from "react-query";
import axios from "axios";

import desktop_divider from './images/pattern-divider-desktop.svg'
import mobile_divider from './images/pattern-divider-mobile.svg'
import icon_dice from './images/icon-dice.svg'

function App() {
  async function getAdvice() {
    const { data } = await axios.get("https://api.adviceslip.com/advice");
    return data
  }

  const { data, error, isError, isLoading, refetch } = useQuery("getQuote",() => getAdvice());
  console.log(data)
  // console.log(isMobile)
  return(
  <div className="App">
      <div className="quote-container">
        <small>Advice #{isLoading ? "" : data.slip.id}</small>
        {isError && `An error occured: ${error}`}
        <p>{isLoading ? "" : `“${data.slip.advice}”`}</p>
        <img src={isMobile ? mobile_divider : desktop_divider} alt="Pattern divider" className="divider" />
        <button className="dice" onClick={refetch}>
          <img src={icon_dice} alt="Icon dice" className="cube" />
        </button>
    </div>
  </div>)
}

export default App;
