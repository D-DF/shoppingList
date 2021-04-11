import React from "react"
import ShoppingApp from "./components/ShoppingApp"
import Header from "./components/Header"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"


function App() {
  return (
    <div className="container">
      <Header />
      <ShoppingApp />
    </div>
  );
}

export default App;
