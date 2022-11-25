import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Proxy-Secret': 'a755b180-f5a9-11e9-9f69-7bf51e845926',
		'X-RapidAPI-Key': '7090edaff0mshb8b2bea0d6b650dp1ed9f8jsn8d9317affd20',
		'X-RapidAPI-Host': 'stock-and-options-trading-data-provider.p.rapidapi.com'
	}
};

fetch('https://stock-and-options-trading-data-provider.p.rapidapi.com/options/aapl', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



  
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          
          <Route path= "/" element={<h1>home</h1>} />          
          <Route path= "/page2" element={<h1>page 2</h1>} />
          <Route path= "/*" element={<h1>error</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
