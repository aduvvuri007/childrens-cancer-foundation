import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Sidebar from "./Sidebar";

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

function App() {
  const sidebarLinks = [
    { name: "Home", path: "/" },
    { name: "Account Settings", path: "/account-settings" },
    { name: "Applications", path: "/applications" },
  ];

  return (
    <div className="App">
      <Sidebar links={sidebarLinks} />
      <div className="content">
        <h1>Welcome to the Admin Dashboard</h1>
      </div>
    </div>
  );
}

export default App;
