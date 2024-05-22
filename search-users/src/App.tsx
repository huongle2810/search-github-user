import React from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import UserTable from "./components/UserTable";

function App() {
  return (
    <div className="App">
      <h3>Search Github users</h3>
      <SearchInput />
      <UserTable />
    </div>
  );
}

export default App;
