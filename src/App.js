import "./App.css";
import Weather from "./weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/kait9110/react-weather-app-final"
            target="_blank"
          >
            Open-source Code
          </a>{" "}
          by Kaitlyn Herring
        </footer>
      </div>
    </div>
  );
}
