import './App.css';
import Form from './Form';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <h1 data-cy="main-heading">Brent Portfolio Cypress Example</h1>
      <p data-cy="intro-paragraph">
        This is a simple React web page for testing via Cypress.
      </p>
      <Form />
      <Calculator />
    </div>
  );
}

export default App;