import React from "react";
import "./App.css";
import Header from "./components/Header";
import ListingsGrid from "./components/ListingsGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <ListingsGrid></ListingsGrid>
      <Footer></Footer>
    </div>
  );
}

export default App;
