import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LeftContainer from "./LeftContainer";
import Search from "./Search";
import Data from "./Data";

function App() {
  return (
    <>
      <div className="main">
        <div className="main-header">
          <strong>Home</strong>  <span className="op"> > All Stores</span>
        </div>
      </div>
      <div className="App">
        <LeftContainer />
        <div className="App-right">
          <Search details={Data} />
        </div>
      </div>
      <div className="footer-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.{" "}
      </div>
    </>
  );
}

export default App;
