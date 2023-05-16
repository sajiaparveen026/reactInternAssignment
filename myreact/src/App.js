import './App.css';
import {Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
       <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;