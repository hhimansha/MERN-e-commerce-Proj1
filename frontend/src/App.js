import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderPart from "./components/headerPart";

function App() {
  return (
    <Router>
      <div>
        <HeaderPart/>

      </div>
    </Router>
  );
}

export default App;
