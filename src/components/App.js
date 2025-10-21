import React, { useState } from "react";
import Header from "./Header.js";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    console.log(isDarkMode);
    console.log("Is it not working");
  }

  return (
    //rethink how to pass the darkmode values
    <Header mode={ isDarkMode } onDarkModeClick={ onDarkModeClick } />
  );
}

export default App;
