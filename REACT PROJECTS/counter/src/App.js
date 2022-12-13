import React, { useState } from "react";

import './App.css';

// Importing Module
import ReactDOM from 'react-dom';

function App() {
  const [count, setCount] = useState(0);

  return /*#__PURE__*/(
    React.createElement("div", { className: "app" }, /*#__PURE__*/



    React.createElement("h1", { className: count > 0 ? "positive" : count < 0 ? "negative" : null },
    count), /*#__PURE__*/

    React.createElement("div", { className: "button__wrapper" }, /*#__PURE__*/
    React.createElement("button", { onClick: () => setCount(count - 1) }, "-"), /*#__PURE__*/
    React.createElement("button", { onClick: () => setCount(count + 1) }, "+"))));



}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));

export default App;