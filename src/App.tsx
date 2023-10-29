import "./App.css";
import reactLogo from "./assets/react.svg";
import Button from "./components/Button";
import SubComponent from "./components/SubComponent";
import viteLogo from "/vite.svg";

function App() {


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Alert Provider</h1>
      <div className="card">
        <Button
          style="success"
          label="Success Button"
        />

        <Button
          style="warning"
          label="Warning Button"
        />

        <Button
          style="info"
          label="Info Button"
        />

        <Button
          style="error"
          label="Error Button"
        />
      </div>
      <SubComponent />
    </>
  );
}

export default App;
