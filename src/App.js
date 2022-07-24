import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to SKY-LINE-BIKES! 
        </p>
     
        <p> If new to biking and unsure on how to get started,  <a
    className="App-link"
    href="https://roadcyclinguk.com/how-to/technique/beginners-guide-choose-right-gear-ratios-road-bike.html"
    target="_blank"
    rel="noopener noreferrer"
  >check out this article.
        </a></p>
      </header>
    </div>
  );
}

export default App;
