import logo from './logo.svg';
import './App.css';
import LoginButton from "./components/LoginButton";
import LogOutButton from "./components/LogOutButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginButton/>
        <LogOutButton/>
      </header>
    </div>
  );
}

export default App;
