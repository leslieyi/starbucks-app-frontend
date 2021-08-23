import Navbar from "./Navbar";
import MainContainer from './MainContainer';
import Aside from "./Aside"
import { useState, useEffect } from "react";


function App() {
  const [drinksData, setDrinksData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/drinks")
      .then((r) => r.json())
      .then((Data) => {
        setDrinksData(Data);
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <MainContainer data={drinksData}/>
      <Aside/>
    </div>
  
  )
  
}

export default App;

