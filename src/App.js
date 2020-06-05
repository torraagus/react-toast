import React from "react";
// import logo from './logo.svg';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

toast.configure();
function App() {
	const notify = () => {
		toast("Basic notification!");
	};

	return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
		</div>
	);
}

export default App;
