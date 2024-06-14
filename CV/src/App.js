import './App.css';
import GeneralInfo from './components/Generalinfo'; 
import Work from './components/Work';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
        <div className="gen-info-section">
          <GeneralInfo />
        </div>
        <div className="work-section">
          <Work />
        </div>
        <div className="education-section">
          <Education />
        </div>
    </div>
  );
}

export default App;
