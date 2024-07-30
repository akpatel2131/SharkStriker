import GaugeChart from "./Component/GuageChart";
import Header from "./Component/Header";
import SecurityEventsPage from "./Component/SecurityEvents";
import SuspectAssetsComponent from "./Component/SuspectAsset";
import SecurityEventsOverTime from "./Component/SecurityGraph"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="action-section">
        <SuspectAssetsComponent />
        <GaugeChart />
        <SecurityEventsPage />
      </div>
      <SecurityEventsOverTime />
    </div>
  );
}

export default App;
