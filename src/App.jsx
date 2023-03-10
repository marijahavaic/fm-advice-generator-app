import "./App.scss";
import { isMobile } from 'react-device-detect';

import { useQuery } from "react-query";
import axios from "axios";

import desktop_divider from './images/pattern-divider-desktop.svg'
import mobile_divider from './images/pattern-divider-mobile.svg'
import icon_dice from './images/icon-dice.svg'

function App() {
  // Function for fetching the quote
  async function getAdvice() {
    const { data } = await axios.get("https://api.adviceslip.com/advice");
    return data
  }
  // react-query hook for fetching the data
  const { data, error, isError, isLoading, refetch } = useQuery("getQuote",() => getAdvice());
  // console.log(data)
  // console.log(isMobile)
  return(
  <div className="App">
      <main className="quote-container">
        <small>Advice #{isLoading ? "" : data.slip.id}</small>
        {isError && `An error occured: ${error}`}
        <p>{isLoading ? "Loading..." : `“${data.slip.advice}”`}</p>
        <img src={isMobile ? mobile_divider : desktop_divider} alt="Pattern divider" className="divider" />
        <button className="dice" onClick={refetch}>
          <img src={icon_dice} alt="Icon dice" className="cube" />
        </button>
    </main>
  </div>)
}

export default App;
