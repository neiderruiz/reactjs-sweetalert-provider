import { useContext } from 'react';
import "./App.css";
import reactLogo from "./assets/react.svg";
import Button from "./components/Button";
import SubComponent from "./components/SubComponent";
import { AlertContext } from './context/alert.context';
import viteLogo from "/vite.svg";

function App() {

  const { alertSuccess, alertError, alertInfo, alertWarning } = useContext(AlertContext)

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
          onClick={() => alertSuccess({
            title: 'mi nuevo alert',
            text: 'mi description',
          })}
        />

        <Button
          style="warning"
          label="Warning Button"
          onClick={() => {
            alertWarning({
              title: 'mi nuevo alert warning',
              text: 'mi description warning'
            })
          }}
        />

        <Button
          style="info"
          label="Info Button"
          onClick={() => {
            alertInfo({
              title: 'mi nuevo alert Info',
              text: 'mi description info'
            })
          }}
        />

        <Button
          style="error"
          label="Error Button"
          onClick={() => {
            alertError({
              title: 'mi nuevo alert error',
              text: 'mi description error',
              denyButtonText: 'Cancelar',
              showDenyButton: true,
              backdrop: false
            }).then(response => {
              console.log(response)
              if (response.isConfirmed) {
                alertSuccess({
                  title: 'Usuario Eliminado',
                  text: 'Alerta success'
                })
              }
            })
          }}
        />
      </div>
      <SubComponent />
    </>
  );
}

export default App;
